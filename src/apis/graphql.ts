
import {  Resolver,
  Query,
  Ctx,
  ObjectType,
  Int,
  Arg,
  Field,
  InputType, } from "type-graphql";
import { Service } from "typedi";
import { API } from "@blockflow-labs/sdk";
import "reflect-metadata";

  import { GburnTransactionsTable } from "../types/types";
   import { burnTransactionsTable } from "../types/generated";

@Service()
@Resolver(() => GburnTransactionsTable)
export class burnTransactionsTableResolver {
  @Query(() => [GburnTransactionsTable])
  async getburnTransactionsTables(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GburnTransactionsTable[]> {
    console.log("Executing getburnTransactionsTables query");
    try {
      const client = API.PostgresClient(bind);
      const burntransactionstableDB = await client.db(burnTransactionsTable);
      const res = await burntransactionstableDB.find({});
      return res as GburnTransactionsTable[];
    } catch (error) {
      console.error("Error in getburnTransactionsTables:", error);
      throw error;
    }
  }
}

  import { GmintTransactionsTable } from "../types/types";
   import { mintTransactionsTable } from "../types/generated";

@Service()
@Resolver(() => GmintTransactionsTable)
export class mintTransactionsTableResolver {
  @Query(() => [GmintTransactionsTable])
  async getmintTransactionsTables(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GmintTransactionsTable[]> {
    console.log("Executing getmintTransactionsTables query");
    try {
      const client = API.PostgresClient(bind);
      const minttransactionstableDB = await client.db(mintTransactionsTable);
      const res = await minttransactionstableDB.find({});
      return res as GmintTransactionsTable[];
    } catch (error) {
      console.error("Error in getmintTransactionsTables:", error);
      throw error;
    }
  }
}

  import { GattestationTable } from "../types/types";
   import { attestationTable } from "../types/generated";

@Service()
@Resolver(() => GattestationTable)
export class attestationTableResolver {
  @Query(() => [GattestationTable])
  async getattestationTables(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GattestationTable[]> {
    console.log("Executing getattestationTables query");
    try {
      const client = API.PostgresClient(bind);
      const attestationtableDB = await client.db(attestationTable);
      const res = await attestationtableDB.find({});
      return res as GattestationTable[];
    } catch (error) {
      console.error("Error in getattestationTables:", error);
      throw error;
    }
  }
}

  import { GDomainsTable } from "../types/types";
   import { DomainsTable } from "../types/generated";

@Service()
@Resolver(() => GDomainsTable)
export class DomainsTableResolver {
  @Query(() => [GDomainsTable])
  async getDomainsTables(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GDomainsTable[]> {
    console.log("Executing getDomainsTables query");
    try {
      const client = API.PostgresClient(bind);
      const domainstableDB = await client.db(DomainsTable);
      const res = await domainstableDB.find({});
      return res as GDomainsTable[];
    } catch (error) {
      console.error("Error in getDomainsTables:", error);
      throw error;
    }
  }
}

  import { GFeeInfo } from "../types/types";
   import { FeeInfo } from "../types/generated";

@Service()
@Resolver(() => GFeeInfo)
export class FeeInfoResolver {
  @Query(() => [GFeeInfo])
  async getFeeInfos(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GFeeInfo[]> {
    console.log("Executing getFeeInfos query");
    try {
      const client = API.PostgresClient(bind);
      const feeinfoDB = await client.db(FeeInfo);
      const res = await feeinfoDB.find({});
      return res as GFeeInfo[];
    } catch (error) {
      console.error("Error in getFeeInfos:", error);
      throw error;
    }
  }
}

  import { GcctpDayDataDB } from "../types/types";
   import { cctpDayDataDB } from "../types/generated";

@Service()
@Resolver(() => GcctpDayDataDB)
export class cctpDayDataDBResolver {
  @Query(() => [GcctpDayDataDB])
  async getcctpDayDataDBs(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GcctpDayDataDB[]> {
    console.log("Executing getcctpDayDataDBs query");
    try {
      const client = API.PostgresClient(bind);
      const cctpdaydatadbDB = await client.db(cctpDayDataDB);
      const res = await cctpdaydatadbDB.find({});
      return res as GcctpDayDataDB[];
    } catch (error) {
      console.error("Error in getcctpDayDataDBs:", error);
      throw error;
    }
  }
}

  import { GcctpWeekDataDB } from "../types/types";
   import { cctpWeekDataDB } from "../types/generated";

@Service()
@Resolver(() => GcctpWeekDataDB)
export class cctpWeekDataDBResolver {
  @Query(() => [GcctpWeekDataDB])
  async getcctpWeekDataDBs(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GcctpWeekDataDB[]> {
    console.log("Executing getcctpWeekDataDBs query");
    try {
      const client = API.PostgresClient(bind);
      const cctpweekdatadbDB = await client.db(cctpWeekDataDB);
      const res = await cctpweekdatadbDB.find({});
      return res as GcctpWeekDataDB[];
    } catch (error) {
      console.error("Error in getcctpWeekDataDBs:", error);
      throw error;
    }
  }
}

  import { GcctpMonthDataDB } from "../types/types";
   import { cctpMonthDataDB } from "../types/generated";

@Service()
@Resolver(() => GcctpMonthDataDB)
export class cctpMonthDataDBResolver {
  @Query(() => [GcctpMonthDataDB])
  async getcctpMonthDataDBs(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GcctpMonthDataDB[]> {
    console.log("Executing getcctpMonthDataDBs query");
    try {
      const client = API.PostgresClient(bind);
      const cctpmonthdatadbDB = await client.db(cctpMonthDataDB);
      const res = await cctpmonthdatadbDB.find({});
      return res as GcctpMonthDataDB[];
    } catch (error) {
      console.error("Error in getcctpMonthDataDBs:", error);
      throw error;
    }
  }
}

  import { GcctpYearDataDB } from "../types/types";
   import { cctpYearDataDB } from "../types/generated";

@Service()
@Resolver(() => GcctpYearDataDB)
export class cctpYearDataDBResolver {
  @Query(() => [GcctpYearDataDB])
  async getcctpYearDataDBs(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GcctpYearDataDB[]> {
    console.log("Executing getcctpYearDataDBs query");
    try {
      const client = API.PostgresClient(bind);
      const cctpyeardatadbDB = await client.db(cctpYearDataDB);
      const res = await cctpyeardatadbDB.find({});
      return res as GcctpYearDataDB[];
    } catch (error) {
      console.error("Error in getcctpYearDataDBs:", error);
      throw error;
    }
  }
}

  import { GcctpAllTimeDB } from "../types/types";
   import { cctpAllTimeDB } from "../types/generated";

@Service()
@Resolver(() => GcctpAllTimeDB)
export class cctpAllTimeDBResolver {
  @Query(() => [GcctpAllTimeDB])
  async getcctpAllTimeDBs(@Ctx() { bind }: any,
          @Arg("limit", () => Int, { nullable: true }) limit?: number,
          @Arg("page", () => Int, { nullable: true }) page?: number): Promise<GcctpAllTimeDB[]> {
    console.log("Executing getcctpAllTimeDBs query");
    try {
      const client = API.PostgresClient(bind);
      const cctpalltimedbDB = await client.db(cctpAllTimeDB);
      const res = await cctpalltimedbDB.find({});
      return res as GcctpAllTimeDB[];
    } catch (error) {
      console.error("Error in getcctpAllTimeDBs:", error);
      throw error;
    }
  }
}
