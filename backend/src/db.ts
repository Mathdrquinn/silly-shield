import { Prisma } from './generated/prisma-client';

export const db = new Prisma({
    debug: process.env.NODE_ENV === 'production' ? false : true,
    endpoint: process.env.PRISMA_ENDPOINT,
    // // secret: process.env.PRISMA_SECRET,
});
