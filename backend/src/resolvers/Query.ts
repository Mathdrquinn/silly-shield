import { QueryResolvers } from '../generated/graphqlgen';
import { Query as QueryBase } from '../generated/resolvers/Query';

export const Query: QueryResolvers.Type = {
    ...QueryBase,
    // args -- parent, args, context, info
    users() {
        return [{ id: '123', name: 'first user', email: 'mail@gmail.com' }];
    },
};
