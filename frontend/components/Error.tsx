import { ApolloError } from 'apollo-boost';
import * as React from 'react';

export const Error: React.FunctionComponent<{ error: ApolloError | null }> = ({ error }) => {
    if (!error || !error.message) {
        return null;
    }
    return (
        <p>
            {error.message}
        </p>
    );
};
