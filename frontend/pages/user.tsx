import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { queryHandler } from '../util/queryHandler';
import { IUser } from './sign-up';

interface IUserQuery {
    id: string;
}

interface IProps {
    query: IUserQuery;
}

export const URL = '/user';

const USER_WHERE_QUERY = gql`
    query USER_WHERE_QUERY($id: ID!) {
        user(where: {
            id: $id
        }) {
            id,
            firstName
            lastName
            email
            username
            trainerLevel
            image
        }
    }
`;

const User: React.FunctionComponent<{ user: IUser }> = ({ user }) => (
    <React.Fragment>
        <img
            src={user.image}
            alt={`Screen shot of ${user.username}'s trainer in PokemonGo`}
        />
        <h2>
            {user.username}
            <br/>
            <small>{user.lastName}, {user.firstName}</small>
        </h2>
        <ul>
            Your information
            <li><strong>Email:</strong> {user.email}</li>
            <li><strong>Trainer Level:</strong> {user.trainerLevel}</li>
        </ul>

    </React.Fragment>
);

const QueryWrapper: React.FunctionComponent<IProps> = props => (
    <main>
        <Query query={USER_WHERE_QUERY} variables={props.query}>
            {queryHandler<{ user: IUser}>(User, 'your information')}
        </Query>
    </main>
);

export default QueryWrapper;
