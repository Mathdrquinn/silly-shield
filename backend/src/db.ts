import { Prisma } from 'prisma-binding';

export const db = new Prisma({
    debug: process.env.NODE_ENV === 'production' ? false : true,
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    typeDefs: 'src/generated/prisma-client/prisma-schema.ts',
});
