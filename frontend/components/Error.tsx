import { ApolloError } from 'apollo-boost';
import * as React from 'react';

export class Error extends React.Component<{ error: ApolloError }> {
    render() {
        return (
            <span>
                {this.props.error.message}
            </span>
        );
    }
}
