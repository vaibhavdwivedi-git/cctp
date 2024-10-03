
import { Entity, PrimaryColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import "reflect-metadata";

@Entity()
@ObjectType()
export class GburnTransactionsTable extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  bridgeId?: string;

  @Column()
  @Field({ nullable: true })
  amount?: number;

  @Column()
  @Field({ nullable: true })
  timeStamp?: number;

  @Column()
  @Field({ nullable: true })
  isCompleted?: boolean;

  @Column()
  @Field({ nullable: true })
  sourceDomain?: string;

  @Column()
  @Field({ nullable: true })
  mintRecipient?: string;

  @Column()
  @Field({ nullable: true })
  messageSender?: string;

  @Column()
  @Field({ nullable: true })
  transactionHash?: string;

  @Column()
  @Field({ nullable: true })
  destinationDomain?: string;

  @Column()
  @Field({ nullable: true })
  burnToken?: string;

  @Column()
  @Field({ nullable: true })
  destinationCaller?: string;

  @Column()
  @Field({ nullable: true })
  destinationTokenMessenger?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GmintTransactionsTable extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  bridgeId?: string;

  @Column()
  @Field({ nullable: true })
  amount?: number;

  @Column()
  @Field({ nullable: true })
  timeStamp?: number;

  @Column()
  @Field({ nullable: true })
  sourceDomain?: string;

  @Column()
  @Field({ nullable: true })
  mintRecipient?: string;

  @Column()
  @Field({ nullable: true })
  messageSender?: string;

  @Column()
  @Field({ nullable: true })
  transactionHash?: string;

  @Column()
  @Field({ nullable: true })
  destinationDomain?: string;

  @Column()
  @Field({ nullable: true })
  caller?: string;

  @Column()
  @Field({ nullable: true })
  sender?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GattestationTable extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  bridgeId?: string;

  @Column()
  @Field({ nullable: true })
  attestationHash?: string;

  @Column()
  @Field({ nullable: true })
  messageHash?: string;

  @Column()
  @Field({ nullable: true })
  timeStamp?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GDomainsTable extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  domainName?: string;

  @Column()
  @Field({ nullable: true })
  chainId?: string;

  @Column()
  @Field({ nullable: true })
  tokenAddress?: string;

  @Column()
  @Field({ nullable: true })
  permessageburnlimit?: number;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GFeeInfo extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  chainId?: string;

  @Column()
  @Field({ nullable: true })
  feeInUSDC?: number;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GcctpDayDataDB extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  statId?: string;

  @Column()
  @Field({ nullable: true })
  date?: string;

  @Column()
  @Field({ nullable: true })
  txCount?: string;

  @Column()
  @Field({ nullable: true })
  dailyVolume?: string;

  @Column()
  @Field({ nullable: true })
  deposited?: string;

  @Column()
  @Field({ nullable: true })
  withdrawal?: string;

  @Column()
  @Field({ nullable: true })
  totalFee?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GcctpWeekDataDB extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  statId?: string;

  @Column()
  @Field({ nullable: true })
  week?: string;

  @Column()
  @Field({ nullable: true })
  txCount?: string;

  @Column()
  @Field({ nullable: true })
  weeklyVolume?: string;

  @Column()
  @Field({ nullable: true })
  deposited?: string;

  @Column()
  @Field({ nullable: true })
  withdrawal?: string;

  @Column()
  @Field({ nullable: true })
  totalFee?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GcctpMonthDataDB extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  statId?: string;

  @Column()
  @Field({ nullable: true })
  month?: string;

  @Column()
  @Field({ nullable: true })
  txCount?: string;

  @Column()
  @Field({ nullable: true })
  monthlyVolume?: string;

  @Column()
  @Field({ nullable: true })
  deposited?: string;

  @Column()
  @Field({ nullable: true })
  withdrawal?: string;

  @Column()
  @Field({ nullable: true })
  totalFee?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GcctpYearDataDB extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  statId?: string;

  @Column()
  @Field({ nullable: true })
  year?: string;

  @Column()
  @Field({ nullable: true })
  txCount?: string;

  @Column()
  @Field({ nullable: true })
  yearlyVolume?: string;

  @Column()
  @Field({ nullable: true })
  deposited?: string;

  @Column()
  @Field({ nullable: true })
  withdrawal?: string;

  @Column()
  @Field({ nullable: true })
  totalFee?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}


@Entity()
@ObjectType()
export class GcctpAllTimeDB extends BaseEntity {

  @Column()
  @Field({ nullable: true })
  statId?: string;

  @Column()
  @Field({ nullable: true })
  txCount?: string;

  @Column()
  @Field({ nullable: true })
  allTimeVolume?: string;

  @Column()
  @Field({ nullable: true })
  deposited?: string;

  @Column()
  @Field({ nullable: true })
  withdrawal?: string;

  @Column()
  @Field({ nullable: true })
  totalFee?: string;

  @Column()
  @Field(() => Number)
  _blocknumber!: number;

  @Column()
  @Field()
  _blockhash!: string;

  @Column()
  @Field()
  _chainId!: string;

  @Column()
  @Field(() => Number)
  _version!: number;

  @Column()
  @Field()
  _refId!: string;
}

