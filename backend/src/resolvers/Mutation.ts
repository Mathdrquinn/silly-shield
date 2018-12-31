import { MutationResolvers } from '../generated/graphqlgen';
import { UserCreateManyInput } from '../generated/prisma-client';
import { Context } from '../types';

export const Mutation: MutationResolvers.Type = {
    // args -- parent, args, context, info
    createUser(parent, args, ctx: Context) {
        const { firstName, lastName, email, username, image, trainerLevel } = args;
        return ctx.db.createUser({ firstName, lastName, email, username, image, trainerLevel });
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
