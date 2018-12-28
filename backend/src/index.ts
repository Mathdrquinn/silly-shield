import * as dotenv from 'dotenv';
import { Options } from 'graphql-yoga';
import { createServer } from './createServer';

dotenv.config({ path: 'variables.env' });
const server = createServer();

// TODO Use express middlewre to hndle cookies (JWT)
// TODO Use express middlewre to populate current user
const serverConfig: Options = {
    cors: {
        credentials: true,
        origin: process.env.FRONTEND_URL,
    },
};
const serverCallback = (deets: Options): void => {
    console.log(`Server is running on http://localhost:${deets.port}`);
};

server.start(serverConfig, serverCallback);
