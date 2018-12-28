import { MutationResolvers } from '../generated/graphqlgen';
import { Mutation as MutationBase } from '../generated/resolvers/Mutation';

export const Mutation: MutationResolvers.Type = {
    ...MutationBase,
    // args -- parent, args, context, info
    createUser(parent, args) {
        console.log(args);
        return { id: '123', name: 'Brendan', email: 'foo@email.com' };
    },
};
