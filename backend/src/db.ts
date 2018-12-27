import { Prisma } from 'prisma-binding';

export const db = new Prisma({
    typeDefs: 'src/datamodel.graphql',
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    debug: process.env.NODE_ENV === 'production' ? false : true,
});