import { IEventContext, ISecrets } from "@blockflow-labs/utils";

import { Instance } from "@blockflow-labs/sdk";

import { DOMAINS } from "../utils/domains";
import { chainIdToDomain } from "../utils/helper";
import { DomainsTable } from "../types/generated";

/**
 * @dev Event::SetBurnLimitPerMessage(address token, uint256 burnLimitPerMessage)
 * @param context trigger object with contains {event: {token ,burnLimitPerMessage }, transaction, block, log}
 * @param bind init function for database wrapper methods
 */
export const SetBurnLimitPerMessageHandler = async (
  context: IEventContext,
  bind: any,
  secrets: ISecrets
) => {
  const client = Instance.MongoClient(bind);

  const { event, transaction, block, log } = context;
  const { token, burnLimitPerMessage, nonce } = event;

  const domainmetadata = DOMAINS[chainIdToDomain[block.chain_id]];
  const domainDB = client.db(DomainsTable);

  let domain = await domainDB.load({
    chainId: block.chain_id,
  });

  if (!domain) {
    domain = {
      domainName: domainmetadata.domainName.toString(),
      chainId: domainmetadata.chainId,
      tokenAddress: token.toString(),
      permessageburnlimit: burnLimitPerMessage.toString(),
    };
  }

  domain.domainName = domainmetadata.domainName.toString();
  domain.tokenAddress = token.toString();
  domain.permessageburnlimit = burnLimitPerMessage.toString();

  await domainDB.save(domain);
};
