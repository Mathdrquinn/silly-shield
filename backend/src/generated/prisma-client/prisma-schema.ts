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
  firstName: String!
  lastName: String!
  email: String!
  image: String!
  username: String!
  trainerLevel: Int!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  image: String!
  username: String!
  trainerLevel: Int!
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
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  image_ASC
  image_DESC
  username_ASC
  username_DESC
  trainerLevel_ASC
  trainerLevel_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  image: String!
  username: String!
  trainerLevel: Int!
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
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
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
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  trainerLevel: Int
  trainerLevel_not: Int
  trainerLevel_in: [Int!]
  trainerLevel_not_in: [Int!]
  trainerLevel_lt: Int
  trainerLevel_lte: Int
  trainerLevel_gt: Int
  trainerLevel_gte: Int
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
  firstName: String
  lastName: String
  email: String
  image: String
  username: String
  trainerLevel: Int
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  image: String
  username: String
  trainerLevel: Int
}

input UserUpdateManyDataInput {
  firstName: String
  lastName: String
  email: String
  image: String
  username: String
  trainerLevel: Int
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
  firstName: String
  lastName: String
  email: String
  image: String
  username: String
  trainerLevel: Int
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
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
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
  image: String
  image_not: String
  image_in: [String!]
  image_not_in: [String!]
  image_lt: String
  image_lte: String
  image_gt: String
  image_gte: String
  image_contains: String
  image_not_contains: String
  image_starts_with: String
  image_not_starts_with: String
  image_ends_with: String
  image_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  trainerLevel: Int
  trainerLevel_not: Int
  trainerLevel_in: [Int!]
  trainerLevel_not_in: [Int!]
  trainerLevel_lt: Int
  trainerLevel_lte: Int
  trainerLevel_gt: Int
  trainerLevel_gte: Int
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`