import { GraphQLServer } from 'graphql-yoga';
// import { db } from './db';
import { prisma } from './generated/prisma-client';
import { resolvers } from './resolvers/index';

export function createServer() {
    return new GraphQLServer({
        context: req => ({ ...req, prisma }),
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        resolvers: resolvers as any,
        typeDefs: 'src/schema.graphql',
    });
}
