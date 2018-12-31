// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { User, Tournament } from "./prisma-client";
import { Context } from "../types";

type UserOrderByInput =
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
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type UsersResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export type TournamentsResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Tournament[] | Promise<Tournament[]>;

  export interface Type {
    users: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;

    tournaments: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Tournament[] | Promise<Tournament[]>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    firstName: (parent: User) => parent.firstName,
    lastName: (parent: User) => parent.lastName,
    email: (parent: User) => parent.email,
    image: (parent: User) => parent.image,
    username: (parent: User) => parent.username,
    trainerLevel: (parent: User) => parent.trainerLevel
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstNameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastNameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ImageResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type UsernameResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type TrainerLevelResolver = (
    parent: User,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    firstName: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    lastName: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    image: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    username: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    trainerLevel: (
      parent: User,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export namespace TournamentResolvers {
  export const defaultResolvers = {
    id: (parent: Tournament) => parent.id,
    name: (parent: Tournament) => parent.name,
    startDate: (parent: Tournament) => parent.startDate,
    playerCountLimit: (parent: Tournament) => parent.playerCountLimit
  };

  export interface UserWhereInput {
    AND: UserWhereInput[];
    OR: UserWhereInput[];
    NOT: UserWhereInput[];
    id: string | null;
    id_not: string | null;
    id_in: string[];
    id_not_in: string[];
    id_lt: string | null;
    id_lte: string | null;
    id_gt: string | null;
    id_gte: string | null;
    id_contains: string | null;
    id_not_contains: string | null;
    id_starts_with: string | null;
    id_not_starts_with: string | null;
    id_ends_with: string | null;
    id_not_ends_with: string | null;
    firstName: string | null;
    firstName_not: string | null;
    firstName_in: string[];
    firstName_not_in: string[];
    firstName_lt: string | null;
    firstName_lte: string | null;
    firstName_gt: string | null;
    firstName_gte: string | null;
    firstName_contains: string | null;
    firstName_not_contains: string | null;
    firstName_starts_with: string | null;
    firstName_not_starts_with: string | null;
    firstName_ends_with: string | null;
    firstName_not_ends_with: string | null;
    lastName: string | null;
    lastName_not: string | null;
    lastName_in: string[];
    lastName_not_in: string[];
    lastName_lt: string | null;
    lastName_lte: string | null;
    lastName_gt: string | null;
    lastName_gte: string | null;
    lastName_contains: string | null;
    lastName_not_contains: string | null;
    lastName_starts_with: string | null;
    lastName_not_starts_with: string | null;
    lastName_ends_with: string | null;
    lastName_not_ends_with: string | null;
    email: string | null;
    email_not: string | null;
    email_in: string[];
    email_not_in: string[];
    email_lt: string | null;
    email_lte: string | null;
    email_gt: string | null;
    email_gte: string | null;
    email_contains: string | null;
    email_not_contains: string | null;
    email_starts_with: string | null;
    email_not_starts_with: string | null;
    email_ends_with: string | null;
    email_not_ends_with: string | null;
    image: string | null;
    image_not: string | null;
    image_in: string[];
    image_not_in: string[];
    image_lt: string | null;
    image_lte: string | null;
    image_gt: string | null;
    image_gte: string | null;
    image_contains: string | null;
    image_not_contains: string | null;
    image_starts_with: string | null;
    image_not_starts_with: string | null;
    image_ends_with: string | null;
    image_not_ends_with: string | null;
    username: string | null;
    username_not: string | null;
    username_in: string[];
    username_not_in: string[];
    username_lt: string | null;
    username_lte: string | null;
    username_gt: string | null;
    username_gte: string | null;
    username_contains: string | null;
    username_not_contains: string | null;
    username_starts_with: string | null;
    username_not_starts_with: string | null;
    username_ends_with: string | null;
    username_not_ends_with: string | null;
    trainerLevel: number | null;
    trainerLevel_not: number | null;
    trainerLevel_in: number[];
    trainerLevel_not_in: number[];
    trainerLevel_lt: number | null;
    trainerLevel_lte: number | null;
    trainerLevel_gt: number | null;
    trainerLevel_gte: number | null;
  }

  export interface ArgsPlayers {
    where: UserWhereInput | null;
    orderBy: UserOrderByInput | null;
    skip: number | null;
    after: string | null;
    before: string | null;
    first: number | null;
    last: number | null;
  }

  export type IdResolver = (
    parent: Tournament,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Tournament,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StartDateResolver = (
    parent: Tournament,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PlayerCountLimitResolver = (
    parent: Tournament,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export type PlayersResolver = (
    parent: Tournament,
    args: ArgsPlayers,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User[] | Promise<User[]>;

  export interface Type {
    id: (
      parent: Tournament,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Tournament,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    startDate: (
      parent: Tournament,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    playerCountLimit: (
      parent: Tournament,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;

    players: (
      parent: Tournament,
      args: ArgsPlayers,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User[] | Promise<User[]>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface ArgsCreateUser {
    firstName: string;
    lastName: string;
    email: string;
    image: string;
    username: string;
    trainerLevel: number;
  }

  export interface ArgsCreateTournament {
    name: string;
    startDate: string;
    playerCountLimit: number | null;
  }

  export type CreateUserResolver = (
    parent: undefined,
    args: ArgsCreateUser,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type CreateTournamentResolver = (
    parent: undefined,
    args: ArgsCreateTournament,
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Tournament | null | Promise<Tournament | null>;

  export interface Type {
    createUser: (
      parent: undefined,
      args: ArgsCreateUser,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    createTournament: (
      parent: undefined,
      args: ArgsCreateTournament,
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Tournament | null | Promise<Tournament | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  Tournament: TournamentResolvers.Type;
  Mutation: MutationResolvers.Type;
}
