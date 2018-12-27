import { Prisma } from 'prisma-binding';

const db = new Prisma({
    typeDefs: 'src/generated/prisma-client/index.ts',
});