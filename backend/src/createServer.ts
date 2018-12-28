import { GraphQLServer } from 'graphql-yoga';
import { db } from './db';
import { resolvers } from './resolvers/index';

export function createServer() {
    return new GraphQLServer({
        context: req => ({ ...req, db }),
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        resolvers: resolvers as any,
        typeDefs: 'src/schema.graphql',
    });
}
