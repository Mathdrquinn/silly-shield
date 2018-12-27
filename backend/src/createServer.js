import { GraphQlServer } from 'graphql-yoga';
import { mutation as Mutation } from './mutation';
import { query as Query } from './query';
import { db } from './db';

export function createServer() {
    return new GraphQlServer({
        typeDefs: '',
        resolvers: {
            Mutation,
            Query,
        },
        resolverValidationOptions: {
            requireResolversForResolveType: false,
        },
        context: req => ({ ...req, db }),
    });
}
