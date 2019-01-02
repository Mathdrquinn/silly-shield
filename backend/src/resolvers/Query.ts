import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
    // args -- parent, args, context, info
    users(parent, args, ctx) {
        return ctx.db.users();
    },
    user(parent, args, ctx) {
        return ctx.db.user(args.where);
    },
    tournaments(parent, args, ctx) {
        return ctx.db.tournaments();
    },
    tournament(parent, args, ctx) {
        return ctx.db.tournament(args.where);
    },
};
