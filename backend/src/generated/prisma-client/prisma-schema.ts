export const typeDefs = /* GraphQL */ `type AggregateTournament {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createTournament(data: TournamentCreateInput!): Tournament!
  updateTournament(data: TournamentUpdateInput!, where: TournamentWhereUniqueInput!): Tournament
  updateManyTournaments(data: TournamentUpdateManyMutationInput!, where: TournamentWhereInput): BatchPayload!
  upsertTournament(where: TournamentWhereUniqueInput!, create: TournamentCreateInput!, update: TournamentUpdateInput!): Tournament!
  deleteTournament(where: TournamentWhereUniqueInput!): Tournament
  deleteManyTournaments(where: TournamentWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  tournament(where: TournamentWhereUniqueInput!): Tournament
  tournaments(where: TournamentWhereInput, orderBy: TournamentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tournament]!
  tournamentsConnection(where: TournamentWhereInput, orderBy: TournamentOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TournamentConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  tournament(where: TournamentSubscriptionWhereInput): TournamentSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tournament {
  id: ID!
  name: String!
  startDate: DateTime!
  playerCountLimit: Int!
  players(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
}

type TournamentConnection {
  pageInfo: PageInfo!
  edges: [TournamentEdge]!
  aggregate: AggregateTournament!
}

input TournamentCreateInput {
  name: String!
  startDate: DateTime!
  playerCountLimit: Int!
  players: UserCreateManyInput
}

type TournamentEdge {
  node: Tournament!
  cursor: String!
}

enum TournamentOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  startDate_ASC
  startDate_DESC
  playerCountLimit_ASC
  playerCountLimit_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TournamentPreviousValues {
  id: ID!
  name: String!
  startDate: DateTime!
  playerCountLimit: Int!
}

type TournamentSubscriptionPayload {
  mutation: MutationType!
  node: Tournament
  updatedFields: [String!]
  previousValues: TournamentPreviousValues
}

input TournamentSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TournamentWhereInput
  AND: [TournamentSubscriptionWhereInput!]
  OR: [TournamentSubscriptionWhereInput!]
  NOT: [TournamentSubscriptionWhereInput!]
}

input TournamentUpdateInput {
  name: String
  startDate: DateTime
  playerCountLimit: Int
  players: UserUpdateManyInput
}

input TournamentUpdateManyMutationInput {
  name: String
  startDate: DateTime
  playerCountLimit: Int
}

input TournamentWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  startDate: DateTime
  startDate_not: DateTime
  startDate_in: [DateTime!]
  startDate_not_in: [DateTime!]
  startDate_lt: DateTime
  startDate_lte: DateTime
  startDate_gt: DateTime
  startDate_gte: DateTime
  playerCountLimit: Int
  playerCountLimit_not: Int
  playerCountLimit_in: [Int!]
  playerCountLimit_not_in: [Int!]
  playerCountLimit_lt: Int
  playerCountLimit_lte: Int
  playerCountLimit_gt: Int
  playerCountLimit_gte: Int
  players_every: UserWhereInput
  players_some: UserWhereInput
  players_none: UserWhereInput
  AND: [TournamentWhereInput!]
  OR: [TournamentWhereInput!]
  NOT: [TournamentWhereInput!]
}

input TournamentWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  email: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  email: String!
}

input UserCreateManyInput {
  create: [UserCreateInput!]
  connect: [UserWhereUniqueInput!]
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  email_ASC
  email_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  email: String!
}

input UserScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserScalarWhereInput!]
  OR: [UserScalarWhereInput!]
  NOT: [UserScalarWhereInput!]
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  email: String
}

input UserUpdateInput {
  name: String
  email: String
}

input UserUpdateManyDataInput {
  name: String
  email: String
}

input UserUpdateManyInput {
  create: [UserCreateInput!]
  update: [UserUpdateWithWhereUniqueNestedInput!]
  upsert: [UserUpsertWithWhereUniqueNestedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  deleteMany: [UserScalarWhereInput!]
  updateMany: [UserUpdateManyWithWhereNestedInput!]
}

input UserUpdateManyMutationInput {
  name: String
  email: String
}

input UserUpdateManyWithWhereNestedInput {
  where: UserScalarWhereInput!
  data: UserUpdateManyDataInput!
}

input UserUpdateWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateDataInput!
}

input UserUpsertWithWhereUniqueNestedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`