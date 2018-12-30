import ApolloClient from 'apollo-boost';
import withApollo from 'next-with-apollo';
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
        }
    });
}

export const withData = withApollo(createClient);
