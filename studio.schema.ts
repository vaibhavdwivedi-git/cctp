const burnTransactionsTable = {
  name: "burnTransactionsTable",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    bridgeId: "string?",
    amount: "number?",
    timeStamp: "number?",
    isCompleted: "boolean?",
    sourceDomain: "string?",
    mintRecipient: "string?",
    messageSender: "string?",
    transactionHash: "string?",
    destinationDomain: "string?",
    burnToken: "string?",
    destinationCaller: "string?",
    destinationTokenMessenger: "string?",
  },
};

const mintTransactionsTable = {
  name: "mintTransactionsTable",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    bridgeId: "string?",
    amount: "number?",
    timeStamp: "number?",
    sourceDomain: "string?",
    mintRecipient: "string?",
    messageSender: "string?",
    transactionHash: "string?",
    destinationDomain: "string?",
    caller: "string?",
    sender: "string?",
  },
};

const attestationTable = {
  name: "attestationTable",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    bridgeId: "string?",
    attestationHash: "string?",
    messageHash: "string?",
    timeStamp: "string?",
  },
};

const DomainsTable = {
  name: "DomainsTable",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    domainName: "string?",
    chainId: "string?",
    tokenAddress: "string?",
    permessageburnlimit: "number?",
  },
};

const FeeInfo = {
  name: "FeeInfo",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    chainId: "string?",
    feeInUSDC: "number?",
  },
};

const cctpDayDataDB = {
  name: "cctpDayDataDB",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    statId: "string?",
    date: "string?",
    txCount: "string?",
    dailyVolume: "string?",
    deposited: "string?",
    withdrawal: "string?",
    totalFee: "string?",
  },
};

const cctpWeekDataDB = {
  name: "cctpWeekDataDB",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    statId: "string?",
    week: "string?",
    txCount: "string?",
    weeklyVolume: "string?",
    deposited: "string?",
    withdrawal: "string?",
    totalFee: "string?",
  },
};

const cctpMonthDataDB = {
  name: "cctpMonthDataDB",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    statId: "string?",
    month: "string?",
    txCount: "string?",
    monthlyVolume: "string?",
    deposited: "string?",
    withdrawal: "string?",
    totalFee: "string?",
  },
};

const cctpYearDataDB = {
  name: "cctpYearDataDB",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    statId: "string?",
    year: "string?",
    txCount: "string?",
    yearlyVolume: "string?",
    deposited: "string?",
    withdrawal: "string?",
    totalFee: "string?",
  },
};

const cctpAllTimeDB = {
  name: "cctpAllTimeDB",
  db: "mongodb",
  type: "managed",
  reorg: true,
  properties: {
    statId: "string?",
    txCount: "string?",
    allTimeVolume: "string?",
    deposited: "string?",
    withdrawal: "string?",
    totalFee: "string?",
  },
};

module.exports = {
  burnTransactionsTable,
  mintTransactionsTable,
  attestationTable,
  DomainsTable,
  FeeInfo,
  cctpDayDataDB,
  cctpWeekDataDB,
  cctpMonthDataDB,
  cctpYearDataDB,
  cctpAllTimeDB,
};
