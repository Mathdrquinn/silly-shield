import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { UserForm } from '../components/UserForm';
import { IUser } from '../types/User';
import { queryHandler } from '../util/queryHandler';

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

interface IUserProps extends IUser {
    onClick: React.MouseEventHandler<HTMLButtonElement>;
}

const User: React.FunctionComponent<IUserProps> = ({
    email,
    firstName,
    image,
    lastName,
    onClick,
    trainerLevel,
    username,
}) => (
    <React.Fragment>
        <img
            src={image}
            alt={`Screen shot of ${username}'s trainer in PokemonGo`}
        />
        <h2>
            {username}
            <br/>
            <small>{lastName}, {firstName}</small>
        </h2>
        <ul>
            Your information
            <li><strong>Email:</strong> {email}</li>
            <li><strong>Trainer Level:</strong> {trainerLevel}</li>
        </ul>
        <button
            type="button"
            onClick={onClick}
        >
            Edit
        </button>
    </React.Fragment>
);

class UserView extends React.Component<{ user: IUser }, { edit: boolean }> {
    state = { edit: false };

    toggleEdit = () => {
        this.setState({ edit: true });
    }

    render() {
        if (this.state.edit) {
            return (
                <UserForm {...this.props.user} />
            );
        }

        return (
            <User {...this.props.user} onClick={this.toggleEdit} />
        );
    }
}

const QueryWrapper: React.FunctionComponent<IProps> = props => (
    <main>
        <Query query={USER_WHERE_QUERY} variables={{ id: props.query.id }}>
            {queryHandler<{ user: IUser }>(UserView, 'your information')}
        </Query>
    </main>
);

export default QueryWrapper;
