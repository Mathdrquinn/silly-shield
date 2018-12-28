import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
    ...MutationResolvers.defaultResolvers,
    // args -- parent, args, context, info
    createUser(parent, args) {
        console.log(args);
        return { id: '123', name: 'Brendan', email: 'foo@email.com' };
    },
};
