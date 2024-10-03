export const burnTransactionsTable = {
  "name": "XXXX-XXXX-XXXX-XXXX-burnTransactionsTable",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "bridgeId": "string?",
    "amount": "number?",
    "timeStamp": "number?",
    "isCompleted": "boolean?",
    "sourceDomain": "string?",
    "mintRecipient": "string?",
    "messageSender": "string?",
    "transactionHash": "string?",
    "destinationDomain": "string?",
    "burnToken": "string?",
    "destinationCaller": "string?",
    "destinationTokenMessenger": "string?"
  },
  "reorg": true
};

export interface IburnTransactionsTable {
  bridgeId: string;
  amount: number;
  timeStamp: number;
  isCompleted: boolean;
  sourceDomain: string;
  mintRecipient: string;
  messageSender: string;
  transactionHash: string;
  destinationDomain: string;
  burnToken: string;
  destinationCaller: string;
  destinationTokenMessenger: string;
}

export const mintTransactionsTable = {
  "name": "XXXX-XXXX-XXXX-XXXX-mintTransactionsTable",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "bridgeId": "string?",
    "amount": "number?",
    "timeStamp": "number?",
    "sourceDomain": "string?",
    "mintRecipient": "string?",
    "messageSender": "string?",
    "transactionHash": "string?",
    "destinationDomain": "string?",
    "caller": "string?",
    "sender": "string?"
  },
  "reorg": true
};

export interface ImintTransactionsTable {
  bridgeId: string;
  amount: number;
  timeStamp: number;
  sourceDomain: string;
  mintRecipient: string;
  messageSender: string;
  transactionHash: string;
  destinationDomain: string;
  caller: string;
  sender: string;
}

export const attestationTable = {
  "name": "XXXX-XXXX-XXXX-XXXX-attestationTable",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "bridgeId": "string?",
    "attestationHash": "string?",
    "messageHash": "string?",
    "timeStamp": "string?"
  },
  "reorg": true
};

export interface IattestationTable {
  bridgeId: string;
  attestationHash: string;
  messageHash: string;
  timeStamp: string;
}

export const DomainsTable = {
  "name": "XXXX-XXXX-XXXX-XXXX-DomainsTable",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "domainName": "string?",
    "chainId": "string?",
    "tokenAddress": "string?",
    "permessageburnlimit": "number?"
  },
  "reorg": true
};

export interface IDomainsTable {
  domainName: string;
  chainId: string;
  tokenAddress: string;
  permessageburnlimit: number;
}

export const FeeInfo = {
  "name": "XXXX-XXXX-XXXX-XXXX-FeeInfo",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "chainId": "string?",
    "feeInUSDC": "number?"
  },
  "reorg": true
};

export interface IFeeInfo {
  chainId: string;
  feeInUSDC: number;
}

export const cctpDayDataDB = {
  "name": "XXXX-XXXX-XXXX-XXXX-cctpDayDataDB",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "statId": "string?",
    "date": "string?",
    "txCount": "string?",
    "dailyVolume": "string?",
    "deposited": "string?",
    "withdrawal": "string?",
    "totalFee": "string?"
  },
  "reorg": true
};

export interface IcctpDayDataDB {
  statId: string;
  date: string;
  txCount: string;
  dailyVolume: string;
  deposited: string;
  withdrawal: string;
  totalFee: string;
}

export const cctpWeekDataDB = {
  "name": "XXXX-XXXX-XXXX-XXXX-cctpWeekDataDB",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "statId": "string?",
    "week": "string?",
    "txCount": "string?",
    "weeklyVolume": "string?",
    "deposited": "string?",
    "withdrawal": "string?",
    "totalFee": "string?"
  },
  "reorg": true
};

export interface IcctpWeekDataDB {
  statId: string;
  week: string;
  txCount: string;
  weeklyVolume: string;
  deposited: string;
  withdrawal: string;
  totalFee: string;
}

export const cctpMonthDataDB = {
  "name": "XXXX-XXXX-XXXX-XXXX-cctpMonthDataDB",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "statId": "string?",
    "month": "string?",
    "txCount": "string?",
    "monthlyVolume": "string?",
    "deposited": "string?",
    "withdrawal": "string?",
    "totalFee": "string?"
  },
  "reorg": true
};

export interface IcctpMonthDataDB {
  statId: string;
  month: string;
  txCount: string;
  monthlyVolume: string;
  deposited: string;
  withdrawal: string;
  totalFee: string;
}

export const cctpYearDataDB = {
  "name": "XXXX-XXXX-XXXX-XXXX-cctpYearDataDB",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "statId": "string?",
    "year": "string?",
    "txCount": "string?",
    "yearlyVolume": "string?",
    "deposited": "string?",
    "withdrawal": "string?",
    "totalFee": "string?"
  },
  "reorg": true
};

export interface IcctpYearDataDB {
  statId: string;
  year: string;
  txCount: string;
  yearlyVolume: string;
  deposited: string;
  withdrawal: string;
  totalFee: string;
}

export const cctpAllTimeDB = {
  "name": "XXXX-XXXX-XXXX-XXXX-cctpAllTimeDB",
  "db": "mongodb",
  "type": "managed",
  "properties": {
    "statId": "string?",
    "txCount": "string?",
    "allTimeVolume": "string?",
    "deposited": "string?",
    "withdrawal": "string?",
    "totalFee": "string?"
  },
  "reorg": true
};

export interface IcctpAllTimeDB {
  statId: string;
  txCount: string;
  allTimeVolume: string;
  deposited: string;
  withdrawal: string;
  totalFee: string;
}

