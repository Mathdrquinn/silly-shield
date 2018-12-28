import { GraphQLServer } from 'graphql-yoga';
// import { db } from './db';
import { prisma } from './generated/prisma-client';
// import { mutation as Mutation } from './mutation';
// import { query as Query } from './query';

export function createServer() {
    return new GraphQLServer({
        context: req => ({ ...req, prisma }),
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        resolvers: {
            // Mutation,
            // Query,
        },
        typeDefs: 'src/schema.graphql',
    });
}
