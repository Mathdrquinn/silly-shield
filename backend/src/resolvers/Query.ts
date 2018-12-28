import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
    ...QueryResolvers.defaultResolvers,
    // args -- parent, args, context, info
    users(parent, args, ctx) {
        return ctx.db.users();
    },
};
