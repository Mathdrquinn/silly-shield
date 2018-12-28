import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
    ...QueryResolvers.defaultResolvers,
    // args -- parent, args, context, info
    users() {
        return [{ id: '123', name: 'first user', email: 'mail@gmail.com' }];
    },
};
