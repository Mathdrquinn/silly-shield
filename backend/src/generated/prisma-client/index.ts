// Code generated by Prisma (prisma@1.23.2). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export interface Exists {
  tournament: (where?: TournamentWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  tournament: (where: TournamentWhereUniqueInput) => TournamentPromise;
  tournaments: (
    args?: {
      where?: TournamentWhereInput;
      orderBy?: TournamentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<Tournament>;
  tournamentsConnection: (
    args?: {
      where?: TournamentWhereInput;
      orderBy?: TournamentOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => TournamentConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserPromise;
  users: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => FragmentableArray<User>;
  usersConnection: (
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createTournament: (data: TournamentCreateInput) => TournamentPromise;
  updateTournament: (
    args: { data: TournamentUpdateInput; where: TournamentWhereUniqueInput }
  ) => TournamentPromise;
  updateManyTournaments: (
    args: {
      data: TournamentUpdateManyMutationInput;
      where?: TournamentWhereInput;
    }
  ) => BatchPayloadPromise;
  upsertTournament: (
    args: {
      where: TournamentWhereUniqueInput;
      create: TournamentCreateInput;
      update: TournamentUpdateInput;
    }
  ) => TournamentPromise;
  deleteTournament: (where: TournamentWhereUniqueInput) => TournamentPromise;
  deleteManyTournaments: (where?: TournamentWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (
    args: { data: UserUpdateInput; where: UserWhereUniqueInput }
  ) => UserPromise;
  updateManyUsers: (
    args: { data: UserUpdateManyMutationInput; where?: UserWhereInput }
  ) => BatchPayloadPromise;
  upsertUser: (
    args: {
      where: UserWhereUniqueInput;
      create: UserCreateInput;
      update: UserUpdateInput;
    }
  ) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  tournament: (
    where?: TournamentSubscriptionWhereInput
  ) => TournamentSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "email_ASC"
  | "email_DESC"
  | "image_ASC"
  | "image_DESC"
  | "username_ASC"
  | "username_DESC"
  | "trainerLevel_ASC"
  | "trainerLevel_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type TournamentOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "name_ASC"
  | "name_DESC"
  | "startDate_ASC"
  | "startDate_DESC"
  | "playerCountLimit_ASC"
  | "playerCountLimit_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export interface UserCreateManyInput {
  create?: UserCreateInput[] | UserCreateInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
}

export type TournamentWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface UserScalarWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  trainerLevel?: Int;
  trainerLevel_not?: Int;
  trainerLevel_in?: Int[] | Int;
  trainerLevel_not_in?: Int[] | Int;
  trainerLevel_lt?: Int;
  trainerLevel_lte?: Int;
  trainerLevel_gt?: Int;
  trainerLevel_gte?: Int;
  AND?: UserScalarWhereInput[] | UserScalarWhereInput;
  OR?: UserScalarWhereInput[] | UserScalarWhereInput;
  NOT?: UserScalarWhereInput[] | UserScalarWhereInput;
}

export interface UserWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  firstName?: String;
  firstName_not?: String;
  firstName_in?: String[] | String;
  firstName_not_in?: String[] | String;
  firstName_lt?: String;
  firstName_lte?: String;
  firstName_gt?: String;
  firstName_gte?: String;
  firstName_contains?: String;
  firstName_not_contains?: String;
  firstName_starts_with?: String;
  firstName_not_starts_with?: String;
  firstName_ends_with?: String;
  firstName_not_ends_with?: String;
  lastName?: String;
  lastName_not?: String;
  lastName_in?: String[] | String;
  lastName_not_in?: String[] | String;
  lastName_lt?: String;
  lastName_lte?: String;
  lastName_gt?: String;
  lastName_gte?: String;
  lastName_contains?: String;
  lastName_not_contains?: String;
  lastName_starts_with?: String;
  lastName_not_starts_with?: String;
  lastName_ends_with?: String;
  lastName_not_ends_with?: String;
  email?: String;
  email_not?: String;
  email_in?: String[] | String;
  email_not_in?: String[] | String;
  email_lt?: String;
  email_lte?: String;
  email_gt?: String;
  email_gte?: String;
  email_contains?: String;
  email_not_contains?: String;
  email_starts_with?: String;
  email_not_starts_with?: String;
  email_ends_with?: String;
  email_not_ends_with?: String;
  image?: String;
  image_not?: String;
  image_in?: String[] | String;
  image_not_in?: String[] | String;
  image_lt?: String;
  image_lte?: String;
  image_gt?: String;
  image_gte?: String;
  image_contains?: String;
  image_not_contains?: String;
  image_starts_with?: String;
  image_not_starts_with?: String;
  image_ends_with?: String;
  image_not_ends_with?: String;
  username?: String;
  username_not?: String;
  username_in?: String[] | String;
  username_not_in?: String[] | String;
  username_lt?: String;
  username_lte?: String;
  username_gt?: String;
  username_gte?: String;
  username_contains?: String;
  username_not_contains?: String;
  username_starts_with?: String;
  username_not_starts_with?: String;
  username_ends_with?: String;
  username_not_ends_with?: String;
  trainerLevel?: Int;
  trainerLevel_not?: Int;
  trainerLevel_in?: Int[] | Int;
  trainerLevel_not_in?: Int[] | Int;
  trainerLevel_lt?: Int;
  trainerLevel_lte?: Int;
  trainerLevel_gt?: Int;
  trainerLevel_gte?: Int;
  AND?: UserWhereInput[] | UserWhereInput;
  OR?: UserWhereInput[] | UserWhereInput;
  NOT?: UserWhereInput[] | UserWhereInput;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: ID_Input;
}>;

export interface TournamentUpdateInput {
  name?: String;
  startDate?: DateTimeInput;
  playerCountLimit?: Int;
  players?: UserUpdateManyInput;
}

export interface UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  update: UserUpdateDataInput;
  create: UserCreateInput;
}

export interface TournamentSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: TournamentWhereInput;
  AND?: TournamentSubscriptionWhereInput[] | TournamentSubscriptionWhereInput;
  OR?: TournamentSubscriptionWhereInput[] | TournamentSubscriptionWhereInput;
  NOT?: TournamentSubscriptionWhereInput[] | TournamentSubscriptionWhereInput;
}

export interface UserUpdateDataInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  image?: String;
  username?: String;
  trainerLevel?: Int;
}

export interface UserUpdateManyMutationInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  image?: String;
  username?: String;
  trainerLevel?: Int;
}

export interface UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput;
  data: UserUpdateDataInput;
}

export interface TournamentUpdateManyMutationInput {
  name?: String;
  startDate?: DateTimeInput;
  playerCountLimit?: Int;
}

export interface UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput;
  data: UserUpdateManyDataInput;
}

export interface UserCreateInput {
  firstName: String;
  lastName: String;
  email: String;
  image: String;
  username: String;
  trainerLevel: Int;
}

export interface UserUpdateManyInput {
  create?: UserCreateInput[] | UserCreateInput;
  update?:
    | UserUpdateWithWhereUniqueNestedInput[]
    | UserUpdateWithWhereUniqueNestedInput;
  upsert?:
    | UserUpsertWithWhereUniqueNestedInput[]
    | UserUpsertWithWhereUniqueNestedInput;
  delete?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  connect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  disconnect?: UserWhereUniqueInput[] | UserWhereUniqueInput;
  deleteMany?: UserScalarWhereInput[] | UserScalarWhereInput;
  updateMany?:
    | UserUpdateManyWithWhereNestedInput[]
    | UserUpdateManyWithWhereNestedInput;
}

export interface TournamentCreateInput {
  name: String;
  startDate: DateTimeInput;
  playerCountLimit: Int;
  players?: UserCreateManyInput;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: MutationType[] | MutationType;
  updatedFields_contains?: String;
  updatedFields_contains_every?: String[] | String;
  updatedFields_contains_some?: String[] | String;
  node?: UserWhereInput;
  AND?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  OR?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
  NOT?: UserSubscriptionWhereInput[] | UserSubscriptionWhereInput;
}

export interface UserUpdateManyDataInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  image?: String;
  username?: String;
  trainerLevel?: Int;
}

export interface UserUpdateInput {
  firstName?: String;
  lastName?: String;
  email?: String;
  image?: String;
  username?: String;
  trainerLevel?: Int;
}

export interface TournamentWhereInput {
  id?: ID_Input;
  id_not?: ID_Input;
  id_in?: ID_Input[] | ID_Input;
  id_not_in?: ID_Input[] | ID_Input;
  id_lt?: ID_Input;
  id_lte?: ID_Input;
  id_gt?: ID_Input;
  id_gte?: ID_Input;
  id_contains?: ID_Input;
  id_not_contains?: ID_Input;
  id_starts_with?: ID_Input;
  id_not_starts_with?: ID_Input;
  id_ends_with?: ID_Input;
  id_not_ends_with?: ID_Input;
  name?: String;
  name_not?: String;
  name_in?: String[] | String;
  name_not_in?: String[] | String;
  name_lt?: String;
  name_lte?: String;
  name_gt?: String;
  name_gte?: String;
  name_contains?: String;
  name_not_contains?: String;
  name_starts_with?: String;
  name_not_starts_with?: String;
  name_ends_with?: String;
  name_not_ends_with?: String;
  startDate?: DateTimeInput;
  startDate_not?: DateTimeInput;
  startDate_in?: DateTimeInput[] | DateTimeInput;
  startDate_not_in?: DateTimeInput[] | DateTimeInput;
  startDate_lt?: DateTimeInput;
  startDate_lte?: DateTimeInput;
  startDate_gt?: DateTimeInput;
  startDate_gte?: DateTimeInput;
  playerCountLimit?: Int;
  playerCountLimit_not?: Int;
  playerCountLimit_in?: Int[] | Int;
  playerCountLimit_not_in?: Int[] | Int;
  playerCountLimit_lt?: Int;
  playerCountLimit_lte?: Int;
  playerCountLimit_gt?: Int;
  playerCountLimit_gte?: Int;
  players_every?: UserWhereInput;
  players_some?: UserWhereInput;
  players_none?: UserWhereInput;
  AND?: TournamentWhereInput[] | TournamentWhereInput;
  OR?: TournamentWhereInput[] | TournamentWhereInput;
  NOT?: TournamentWhereInput[] | TournamentWhereInput;
}

export interface NodeNode {
  id: ID_Output;
}

export interface UserPreviousValues {
  id: ID_Output;
  firstName: String;
  lastName: String;
  email: String;
  image: String;
  username: String;
  trainerLevel: Int;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  image: () => Promise<String>;
  username: () => Promise<String>;
  trainerLevel: () => Promise<Int>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  username: () => Promise<AsyncIterator<String>>;
  trainerLevel: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface TournamentSubscriptionPayload {
  mutation: MutationType;
  node: Tournament;
  updatedFields: String[];
  previousValues: TournamentPreviousValues;
}

export interface TournamentSubscriptionPayloadPromise
  extends Promise<TournamentSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = TournamentPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = TournamentPreviousValuesPromise>() => T;
}

export interface TournamentSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<TournamentSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = TournamentSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = TournamentPreviousValuesSubscription>() => T;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface Tournament {
  id: ID_Output;
  name: String;
  startDate: DateTimeOutput;
  playerCountLimit: Int;
}

export interface TournamentPromise extends Promise<Tournament>, Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  startDate: () => Promise<DateTimeOutput>;
  playerCountLimit: () => Promise<Int>;
  players: <T = FragmentableArray<User>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface TournamentSubscription
  extends Promise<AsyncIterator<Tournament>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  startDate: () => Promise<AsyncIterator<DateTimeOutput>>;
  playerCountLimit: () => Promise<AsyncIterator<Int>>;
  players: <T = Promise<AsyncIterator<UserSubscription>>>(
    args?: {
      where?: UserWhereInput;
      orderBy?: UserOrderByInput;
      skip?: Int;
      after?: String;
      before?: String;
      first?: Int;
      last?: Int;
    }
  ) => T;
}

export interface User {
  id: ID_Output;
  firstName: String;
  lastName: String;
  email: String;
  image: String;
  username: String;
  trainerLevel: Int;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  email: () => Promise<String>;
  image: () => Promise<String>;
  username: () => Promise<String>;
  trainerLevel: () => Promise<Int>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  email: () => Promise<AsyncIterator<String>>;
  image: () => Promise<AsyncIterator<String>>;
  username: () => Promise<AsyncIterator<String>>;
  trainerLevel: () => Promise<AsyncIterator<Int>>;
}

export interface TournamentPreviousValues {
  id: ID_Output;
  name: String;
  startDate: DateTimeOutput;
  playerCountLimit: Int;
}

export interface TournamentPreviousValuesPromise
  extends Promise<TournamentPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  name: () => Promise<String>;
  startDate: () => Promise<DateTimeOutput>;
  playerCountLimit: () => Promise<Int>;
}

export interface TournamentPreviousValuesSubscription
  extends Promise<AsyncIterator<TournamentPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  name: () => Promise<AsyncIterator<String>>;
  startDate: () => Promise<AsyncIterator<DateTimeOutput>>;
  playerCountLimit: () => Promise<AsyncIterator<Int>>;
}

export interface TournamentConnection {
  pageInfo: PageInfo;
  edges: TournamentEdge[];
}

export interface TournamentConnectionPromise
  extends Promise<TournamentConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<TournamentEdge>>() => T;
  aggregate: <T = AggregateTournamentPromise>() => T;
}

export interface TournamentConnectionSubscription
  extends Promise<AsyncIterator<TournamentConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<TournamentEdgeSubscription>>>() => T;
  aggregate: <T = AggregateTournamentSubscription>() => T;
}

export interface AggregateTournament {
  count: Int;
}

export interface AggregateTournamentPromise
  extends Promise<AggregateTournament>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateTournamentSubscription
  extends Promise<AsyncIterator<AggregateTournament>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface TournamentEdge {
  node: Tournament;
  cursor: String;
}

export interface TournamentEdgePromise
  extends Promise<TournamentEdge>,
    Fragmentable {
  node: <T = TournamentPromise>() => T;
  cursor: () => Promise<String>;
}

export interface TournamentEdgeSubscription
  extends Promise<AsyncIterator<TournamentEdge>>,
    Fragmentable {
  node: <T = TournamentSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export type Long = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. 
*/
export type Int = number;

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "Tournament",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`
});
export const prisma = new Prisma();
