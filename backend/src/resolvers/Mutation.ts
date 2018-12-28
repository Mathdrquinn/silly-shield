import { MutationResolvers } from '../generated/graphqlgen';
import { Context } from '../types';

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    // args -- parent, args, context, info
    createUser(parent, args, ctx) {
        console.log(args);
        const { name, email = 'default@gmail.com' } = args;
        return ctx.db.createUser({ name, email });
    },
    createTournament(parent, args) {
        console.log(args);
        return { id: 'made-up', ...args };
    },
};
