
import { Resolvers } from '../generated/graphqlgen';
import { Mutation } from './Mutation';
import { Query } from './Query';
import { Tournament } from './Tournament';
import { User } from './User';

export const resolvers: Resolvers = {
    Mutation,
    Query,
    Tournament,
    User,
};
