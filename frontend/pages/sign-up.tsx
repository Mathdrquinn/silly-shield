import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Mutation } from 'react-apollo';
import { convertBlobToBase64URL } from '../util/blob';
import { Logger } from '../util/Logger';

interface IState {
    firstName: string;
    lastName: string;
    email: string;
    username: string;
    trainerLevel: number;
    image: File | null;
    preview: string | null;
}

export const URL = '/sign-up';
const CREATE_USER_QUERY = gql`
    mutation CREATE_USER_MUTATION(
            $firstName: String!
            $lastName: String!
            $email: String!
            $image: String!
            $username: String!
            $trainerLevel: Int!
        ) {
        createUser(
            firstName: $firstName
            lastName: $lastName
            email: $email
            image: $image
            username: $username
            trainerLevel: $trainerLevel
        ) {
            id
            firstName
            username
            image
        }
    }
`;
export class SignUp extends React.Component<{}, IState> {
    static Preview: React.SFC<{ preview: string }> = ({ preview }) => (
        <img
            alt="Your trainer image: looking so fly"
            src={preview}
            style={{ maxWidth: '100%' }}
        />
    )

    state = {
        email: 'brendan@foo.com',
        firstName: 'brendan',
        image: null,
        lastName: 'Quinn',
        preview: null,
        trainerLevel: 22,
        username: 'quinn197',
    };

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

    onEmailChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ email: e.target.value });
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

    onImageChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target && e.target.files && e.target.files.length) {
            this.setState({ image: e.target.files[0] });
        }
    }

    // onSubmit: () => React.FormEventHandler<HTMLFormElement> = (submit) => (e) => {
    //     e.preventDefault();
    //     submit(this.state);
    //     alert('Submitted :)');
    // }

    componentDidUpdate = (prevProps, prevState) => {
        const currentImage = this.state.image;
        const previousImage = prevState.image;
        if (currentImage && currentImage !== previousImage) {
            convertBlobToBase64URL(currentImage)
                .then(url => this.setState({ preview: url }))
                .catch(e => Logger.error(e));
        }
    }

    renderForm = ({ submit, query }): React.ReactNode => (
        <form onSubmit={submit}>
            <legend>Sign Up for Silly Shield Tournaments</legend>
            <fieldset>
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
                <label htmlFor="email">
                    Email:
                <input
                        id="email"
                        name="email"
                        onChange={this.onEmailChange}
                        required={true}
                        type="email"
                        value={this.state.email}
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
                <label htmlFor="image">
                    Screen shot of trainer page:
                    <input
                        id="image"
                        name="image"
                        onChange={this.onImageChange}
                        required={true}
                        type="file"
                        accept="image/*"
                    />
                </label>
                {this.state.preview ? (<SignUp.Preview preview={this.state.preview} />) : null}
                <br/>
                <button name="submit">Sign Up</button>
            </fieldset>
        </form>
    )

    mutationChild = (mutationFunction, query) => {
        const submit: React.FormEventHandler<HTMLFormElement> = (e) => {
            e.preventDefault();
            mutationFunction();
        };
        console.log(query, submit);
        return this.renderForm({ query, submit });
    }

    render() {
        return (
            <Mutation
                mutation={CREATE_USER_QUERY}
                variables={this.state}
            >
                {this.mutationChild}
            </Mutation>
        );
    }
}

export default SignUp;
