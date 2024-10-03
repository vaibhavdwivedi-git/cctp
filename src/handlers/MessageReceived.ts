import { IEventContext, ISecrets } from "@blockflow-labs/utils";

import { Instance } from "@blockflow-labs/sdk";

import {
  attestationTable,
  mintTransactionsTable,
  burnTransactionsTable,
} from "../types/generated";

import {
  chainIdToDomain,
  domainToChainId,
  MESSAGE_RECEIVE_SIG,
  decodeReceiveMessage,
  decodeMintAndWithdraw,
  MINT_AND_WITHDRAW_TOPIC0,
} from "../utils/helper";

import { Stats } from "../utils/tracking";

/**
 * @dev Event::MessageReceived(address caller, uint32 sourceDomain, uint64 nonce, bytes32 sender, bytes messageBody)
 * @param context trigger object with contains {event: {caller ,sourceDomain ,nonce ,sender ,messageBody }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const MessageReceivedHandler = async (
  context: IEventContext,
  bind: any,
  secrets: ISecrets
) => {
  const client = Instance.PostgresClient(bind);

  // Implement your event handler logic for MessageReceived here 163201_10_1
  const { event, transaction, block, log } = context;

  // sender is token messager address
  // caller is circle EOA address
  const { caller, sourceDomain, nonce, sender, messageBody } = event;

  const srcChainId = domainToChainId[sourceDomain];

  let amountDestination = "0";
  let attestationdata = "";
  let mintRecipient = "";

  const isMintAndWithdraw = transaction.logs
    ? transaction.logs.find(
        (log) =>
          log.topics[0].toLowerCase() === MINT_AND_WITHDRAW_TOPIC0.toLowerCase()
      )
    : null;

  if (isMintAndWithdraw) {
    const decodeEvent: any = decodeMintAndWithdraw(
      isMintAndWithdraw.topics,
      isMintAndWithdraw.log_data
    );
    mintRecipient = decodeEvent[0].toString();
    amountDestination = decodeEvent[1].toString();
  }

  const messagereceivesig = MESSAGE_RECEIVE_SIG.includes(
    transaction.transaction_input.slice(0, 10)
  );

  if (messagereceivesig) {
    const decodeTx: any = decodeReceiveMessage(
      transaction.transaction_input,
      transaction.transaction_value
    );
    attestationdata = decodeTx[1];
  }

  const amount = parseInt(amountDestination, 10);
  const mintId = `${nonce}_${srcChainId}_${block.chain_id}`.toLowerCase();

  const minttransactionDB = client.db(mintTransactionsTable);
  const burnDB = client.db(burnTransactionsTable);
  const attestationDB = client.db(attestationTable);

  let [minttransaction, attestation, srcTx] = await Promise.all([
    minttransactionDB.load({
      bridgeId: mintId,
    }),
    attestationDB.load({
      bridgeId: mintId,
    }),
    burnDB.load({
      bridgeId: mintId,
    }),
  ]);

  if (!minttransaction) {
    minttransaction = {
      bridgeId: mintId,
      amount: amount,
      transactionHash: transaction.transaction_hash,
      sourceDomain: sourceDomain,
      destinationDomain: chainIdToDomain[block.chain_id],
      mintRecipient,
      messageSender: "",
      timeStamp: parseInt(block.block_timestamp),
      caller,
      sender,
    };
  }

  if (attestation) {
    attestation = {
      bridgeId: mintId,
      attestation: attestationdata.toString(),
      messageHash: messageBody.toString(),
      timeStamp: block.block_timestamp,
    };
  }

  if (srcTx) {
    minttransaction.messageSender = srcTx.messageSender;
    srcTx.isCompleted = true;
  }

  let feeamount = 0;
  if (srcTx && srcTx.amount) feeamount = srcTx.amount - amount;

  await Promise.all([
    minttransactionDB.save(minttransaction),
    attestationDB.save(attestation),
    burnDB.save(srcTx),
    new Stats(
      true,
      block.chain_id,
      amount,
      feeamount,
      block.block_timestamp,
      bind
    ).update(),
  ]);
};
