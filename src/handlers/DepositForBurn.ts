import { IEventContext, ISecrets } from "@blockflow-labs/utils";

import { Instance } from "@blockflow-labs/sdk";

import { Stats } from "../utils/tracking";

import { chainIdToDomain, domainToChainId } from "../utils/helper";

import {
  burnTransactionsTable,
  mintTransactionsTable,
} from "../types/generated";

/**
 * @dev Event::DepositForBurn(uint64 nonce, address burnToken, uint256 amount, address depositor, bytes32 mintRecipient, uint32 destinationDomain, bytes32 destinationTokenMessenger, bytes32 destinationCaller)
 * @param context trigger object with contains {event: {nonce ,burnToken ,amount ,depositor ,mintRecipient ,destinationDomain ,destinationTokenMessenger ,destinationCaller }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const DepositForBurnHandler = async (
  context: IEventContext,
  bind: any,
  secrets: ISecrets
) => {
  const client = Instance.MongoClient(bind);

  const { event, transaction, block, log } = context;
  let {
    nonce,
    burnToken,
    amount,
    depositor,
    mintRecipient,
    destinationDomain,
    destinationTokenMessenger,
    destinationCaller,
  } = event;

  amount = parseInt(amount.toString(), 10);

  const dstChainId: string = domainToChainId[destinationDomain];
  // prettier-ignore
  const burnId = `${nonce.toString()}_${block.chain_id}_${dstChainId}`.toLowerCase();

  const burntransactionDB = client.db(burnTransactionsTable);
  const mintDB = client.db(mintTransactionsTable);

  let [burntransaction, dstTx] = await Promise.all([
    burntransactionDB.load({
      bridgeId: burnId,
    }),
    mintDB.load({
      bridgeId: burnId,
    }),
  ]);

  if (!burntransaction) {
    burntransaction = {
      bridgeId: burnId,
      burnToken: burnToken.toString(),
      transactionHash: transaction.transaction_hash,
      sourceDomain: chainIdToDomain[block.chain_id],
      destinationDomain: destinationDomain.toString(),
      amount: amount,
      mintRecipient: mintRecipient.toLowerCase().toString(),
      messageSender: depositor.toString(),
      timeStamp: parseInt(block.block_timestamp),
      destinationTokenMessenger: destinationTokenMessenger.toString(),
      destinationCaller: destinationCaller.toString(),
      isCompleted: false,
    };
  } else {
    burntransaction.mintRecipient = mintRecipient.toString();
    burntransaction.destinationCaller = destinationCaller.toString();
  }

  if (dstTx) {
    burntransaction.isCompleted = true;
    dstTx.messageSender = depositor.toString();
    await mintDB.save(dstTx);
  }

  let feeamount = 0;
  if (dstTx && dstTx.amount) feeamount = amount - dstTx.amount;

  await Promise.all([
    burntransactionDB.save(burntransaction),
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
