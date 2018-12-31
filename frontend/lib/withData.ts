import { default as ApolloClient } from 'apollo-boost';
import nextWithApollo from 'next-with-apollo';
import { API_URL } from '../config';

function createClient({ headers }): ApolloClient<{}> {
    return new ApolloClient({
        request: async (operation) => {
            const fetchOptions = {
                credentials: 'include',
            };
            operation.setContext({
                fetchOptions,
                headers,
            });
        },
        uri: API_URL,
    });
}

export const withData = nextWithApollo(createClient);
