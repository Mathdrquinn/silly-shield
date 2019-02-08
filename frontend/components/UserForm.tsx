import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Mutation, MutationFn, MutationResult } from 'react-apollo';
import { IUser, IUserUpdate } from '../types/User';
import { Error } from './Error';

const UPDATE_USER_QUERY = gql`
    mutation UPDATE_USER_QUERY(
            $id: ID!
            $firstName: String
            $lastName: String
            $username: String
            $trainerLevel: Int
        ) {
        updateUser(
            firstName: $firstName
            lastName: $lastName
            username: $username
            trainerLevel: $trainerLevel
        ) {
            id
            firstName
            lastName
            username
            trainerLevel
        }
    }
`;

interface IProps extends IUserUpdate {
    onSubmit: MutationFn<IUser, IUserUpdate>;
    mutationResult: MutationResult<IUser>;
}

class UserFormP extends React.Component<IProps, IUserUpdate> {
    constructor(props) {
        super(props);

        const { firstName, lastName, id, trainerLevel, username } = props;
        this.state = { firstName, lastName, id, trainerLevel, username };
    }

    onFirstChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ firstName: e.target.value });
        }
    }

    onLastChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ lastName: e.target.value });
        }
    }

    onUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ username: e.target.value });
        }
    }

    onTrainerLevelChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ trainerLevel: Number(e.target.value) });
        }
    }

    onSubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
        e.preventDefault();
        const { id, firstName, lastName, username, trainerLevel } = this.state;
        const response = await this.props
            .onSubmit({ variables: { id, firstName, lastName, username, trainerLevel }, where: { id } });
        return response;
    }

    render() {
        const { mutationResult } = this.props;
        if (!mutationResult.loading && mutationResult.called) {
            return (
                <p>Your details have been updated!</p>
            );
        }
        return (
            <form onSubmit={this.onSubmit}>
                <legend>Sign Up for Silly Shield Tournaments</legend>
                <fieldset
                    disabled={mutationResult.loading}
                    aria-busy={mutationResult.loading}
                >
                    <Error error={mutationResult.error} />
                    <legend>Your info</legend>
                    <label htmlFor="firstName">
                        First Name:
                        <input
                            id="firstName"
                            name="firstName"
                            onChange={this.onFirstChange}
                            required={true}
                            type="text"
                            value={this.state.firstName}
                        />
                    </label>
                    <br/>
                    <label htmlFor="lastName">
                        Last Name:
                    <input
                            id="lastName"
                            name="lastName"
                            onChange={this.onLastChange}
                            required={true}
                            type="text"
                            value={this.state.lastName}
                    />
                    </label>
                    <br/>
                    <label htmlFor="username">
                        Username:
                        <small>(from PokemonGo)</small>
                        <input
                            id="username"
                            name="username"
                            onChange={this.onUsernameChange}
                            required={true}
                            type="text"
                            value={this.state.username}
                        />
                    </label>
                    <br/>
                    <label htmlFor="trainerLevel">
                        Trainer Level:
                        <input
                            id="trainerLevel"
                            name="trainerLevel"
                            onChange={this.onTrainerLevelChange}
                            required={true}
                            type="number"
                            min={0}
                            max={40}
                            step={1}
                            value={this.state.trainerLevel}
                        />
                    </label>
                    <br/>
                    <button name="submit">Save</button>
                </fieldset>
            </form>
        );
    }
}

export const UserForm: React.FunctionComponent<IUserUpdate> = props => (
    <Mutation
        mutation={UPDATE_USER_QUERY}
    >
        {(fn: MutationFn<any>, mr: MutationResult<any>) => (<UserFormP onSubmit={fn} mutationResult={mr} {...props} />)}
    </Mutation>
);
