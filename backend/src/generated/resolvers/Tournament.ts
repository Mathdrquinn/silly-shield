// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TournamentResolvers } from "../graphqlgen";

export const Tournament: TournamentResolvers.Type = {
  ...TournamentResolvers.defaultResolvers,

  players: (parent, args, ctx) => {
    throw new Error("Resolver not implemented");
  }
};
