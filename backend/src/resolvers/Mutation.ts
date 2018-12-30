import { MutationResolvers } from '../generated/graphqlgen';
import { UserCreateManyInput } from '../generated/prisma-client';
import { Context } from '../types';

export const Mutation: MutationResolvers.Type = {
    // args -- parent, args, context, info
    createUser(parent, args, ctx: Context) {
        const { name, email = 'default@gmail.com' } = args;
        return ctx.db.createUser({ name, email });
    },
    createTournament(parent, { name, startDate, playerCountLimit }, ctx) {
        const players: UserCreateManyInput = {
            connect: {
                id: 'cjq70ijc4iluj0991cix3bk23',
            },
        };
        return ctx.db.createTournament({
            name,
            playerCountLimit,
            players,
            startDate: new Date(startDate),
        });
    },
};
