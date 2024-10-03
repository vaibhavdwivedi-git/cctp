import BigNumber from "bignumber.js";

// prettier-ignore
import { cctpDayDataDB, cctpWeekDataDB, cctpMonthDataDB, cctpYearDataDB, cctpAllTimeDB, FeeInfo } from "../types/generated";
import { Instance } from "@blockflow-labs/sdk";

export class Stats {
  fee: number;
  date: Date;
  amount: number;
  isMint: boolean;
  chainId: string;

  cctpDayDataDB: any;
  cctpWeekDataDB: any;
  cctpMonthDataDB: any;
  cctpYearDataDB: any;
  cctpAllTimeDB: any;
  feeDB: any;

  constructor(
    isMint: boolean,
    chainId: string,
    amount: number,
    fee: number,
    timestamp: string,
    bind: any
  ) {
    this.fee = fee;
    this.isMint = isMint;
    this.amount = amount;
    this.chainId = chainId;
    this.date = new Date(Number(timestamp) * 1000);

    const client = Instance.PostgresClient(bind);
    this.feeDB = client.db(FeeInfo);
    this.cctpAllTimeDB = client.db(cctpAllTimeDB);
    this.cctpDayDataDB = client.db(cctpDayDataDB);
    this.cctpYearDataDB = client.db(cctpYearDataDB);
    this.cctpMonthDataDB = client.db(cctpMonthDataDB);
    this.cctpWeekDataDB = client.db(cctpWeekDataDB);
  }

  _getDate(): string {
    return this.date.toISOString().split("T")[0];
  }

  _getWeek(): string {
    return Math.floor(this.date.getTime() / 604800000).toString();
  }

  _getMonth(): string {
    return (this.date.getMonth() + 1).toString();
  }

  _getYear(): string {
    return this.date.getFullYear().toString();
  }

  async updateFee() {
    if (this.fee > 0) {
      let feeinfo = await this.feeDB.load({
        chainId: this.chainId,
      });

      if (feeinfo) {
        feeinfo.feeInUSDC += this.fee;

        await this.feeDB.save(feeinfo);
      } else
        feeinfo = await this.feeDB.save({
          chainId: this.chainId,
          feeInUSDC: this.fee,
        });
    }
  }

  async updateDailyData() {
    const date = this._getDate();
    let statId = this.chainId.concat("_").concat(date).toLowerCase();

    let entry = await this.cctpDayDataDB.load({
      statId: statId,
    });

    if (!entry) {
      entry = {
        statId: statId,
        date: date,
        txCount: "0",
        dailyVolume: "0",
        deposited: "0",
        withdrawal: "0",
        totalFee: "0",
      };
    }

    entry.txCount = new BigNumber(entry.txCount).plus(1).toString();

    entry.dailyVolume = new BigNumber(entry.dailyVolume)
      .plus(this.amount)
      .toString();

    if (this.isMint)
      entry.deposited = new BigNumber(entry.deposited)
        .plus(this.amount)
        .toString();
    else
      entry.withdrawal = new BigNumber(entry.withdrawal)
        .plus(this.amount)
        .toString();

    if (this.fee > 0)
      entry.totalFee = new BigNumber(entry.totalFee).plus(this.fee).toString();

    await this.cctpDayDataDB.save(entry);
  }

  async updateWeeklyData() {
    const week = this._getWeek();
    let statId = this.chainId.concat("_").concat(week).toLowerCase();

    let entry = await this.cctpWeekDataDB.load({
      statId: statId,
    });

    if (!entry) {
      entry = {
        statId: statId,
        week: week,
        txCount: "0",
        weeklyVolume: "0",
        deposited: "0",
        withdrawal: "0",
        totalFee: "0",
      };
    }

    entry.txCount = new BigNumber(entry.txCount).plus(1).toString();

    entry.weeklyVolume = new BigNumber(entry.weeklyVolume)
      .plus(this.amount)
      .toString();

    if (this.isMint)
      entry.deposited = new BigNumber(entry.deposited)
        .plus(this.amount)
        .toString();
    else
      entry.withdrawal = new BigNumber(entry.withdrawal)
        .plus(this.amount)
        .toString();

    if (this.fee > 0)
      entry.totalFee = new BigNumber(entry.totalFee).plus(this.fee).toString();

    await this.cctpWeekDataDB.save(entry);
  }

  async updateMonthlyData() {
    const month = this._getMonth();
    const year = this._getYear();

    let statId = this.chainId
      .concat("_")
      .concat(month)
      .concat("_")
      .concat(year)
      .toLowerCase();

    let entry = await this.cctpMonthDataDB.load({
      statId: statId,
    });

    if (!entry) {
      entry = {
        statId: statId,
        month: month,
        txCount: "0",
        monthlyVolume: "0",
        deposited: "0",
        withdrawal: "0",
        totalFee: "0",
      };
    }

    entry.txCount = new BigNumber(entry.txCount).plus(1).toString();
    entry.monthlyVolume = new BigNumber(entry.monthlyVolume)
      .plus(this.amount)
      .toString();

    if (this.isMint)
      entry.deposited = new BigNumber(entry.deposited)
        .plus(this.amount)
        .toString();
    else
      entry.withdrawal = new BigNumber(entry.withdrawal)
        .plus(this.amount)
        .toString();

    if (this.fee > 0)
      entry.totalFee = new BigNumber(entry.totalFee).plus(this.fee).toString();

    await this.cctpMonthDataDB.save(entry);
  }

  async updateYearlyData() {
    const year = this._getYear();
    let statId = this.chainId.concat("_").concat(year).toLowerCase();

    let entry = await this.cctpYearDataDB.load({
      statId: statId,
    });

    if (!entry) {
      entry = {
        statId: statId,
        year: year,
        txCount: "0",
        yearlyVolume: "0",
        deposited: "0",
        withdrawal: "0",
        totalFee: "0",
      };
    }

    entry.txCount = new BigNumber(entry.txCount).plus(1).toString();
    entry.yearlyVolume = new BigNumber(entry.yearlyVolume)
      .plus(this.amount)
      .toString();

    if (this.isMint)
      entry.deposited = new BigNumber(entry.deposited)
        .plus(this.amount)
        .toString();
    else
      entry.withdrawal = new BigNumber(entry.withdrawal)
        .plus(this.amount)
        .toString();

    if (this.fee > 0)
      entry.totalFee = new BigNumber(entry.totalFee).plus(this.fee).toString();

    await this.cctpYearDataDB.save(entry);
  }

  async updateAllTimeData() {
    let statId = this.chainId.toLowerCase();

    let entry = await this.cctpAllTimeDB.load({
      statId: statId,
    });

    if (!entry) {
      entry = {
        statId: this.chainId,
        txCount: "0",
        allTimeVolume: "0",
        deposited: "0",
        withdrawal: "0",
        totalFee: "0",
      };
    }

    entry.txCount = new BigNumber(entry.txCount).plus(1).toString();
    entry.allTimeVolume = new BigNumber(entry.allTimeVolume)
      .plus(this.amount)
      .toString();

    if (this.isMint)
      entry.deposited = new BigNumber(entry.deposited)
        .plus(this.amount)
        .toString();
    else
      entry.withdrawal = new BigNumber(entry.withdrawal)
        .plus(this.amount)
        .toString();

    if (this.fee > 0)
      entry.totalFee = new BigNumber(entry.totalFee).plus(this.fee).toString();

    await this.cctpAllTimeDB.save(entry);
  }

  async update() {
    await Promise.all([
      this.updateFee(),
      this.updateDailyData(),
      this.updateWeeklyData(),
      this.updateYearlyData(),
      this.updateMonthlyData(),
      this.updateAllTimeData(),
    ]);
  }
}
