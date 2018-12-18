import * as React from 'react';
import { convertBlobToBase64URL } from '../util/blob';
import { Logger } from '../util/Logger';

interface IState {
    first: string;
    last: string;
    username: string;
    poGoUsername: string;
    trainerLevel: number;
    picture: File | null;
    preview: string | null;
}

export const URL = '/sign-up';
export class SignUp extends React.Component<{}, IState> {
    state = {
        first: '',
        last: '',
        picture: null,
        poGoUsername: '',
        preview: null,
        trainerLevel: 0,
        username: '',
    };

    onFirstChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ first: e.target.value });
        }
    }

    onLastChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ last: e.target.value });
        }
    }

    onUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ username: e.target.value });
        }
    }

    onPoGoUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ poGoUsername: e.target.value });
        }
    }

    onTrainerLevelChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ trainerLevel: Number(e.target.value) });
        }
    }

    onPictureChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target && e.target.files && e.target.files.length) {
            this.setState({ picture: e.target.files[0] });
        }
    }

    onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        alert('Submitted :)');
    }

    componentDidUpdate = (prevProps, prevState) => {
        const currentPicture = this.state.picture;
        const previousPicture = prevState.picture;
        if (currentPicture && currentPicture !== previousPicture) {
            convertBlobToBase64URL(currentPicture)
                .then(url => this.setState({ preview: url }))
                .catch(e => Logger.error(e));
        }
    }

    render() {
        const preview = this.state.preview
            ? (
                <img
                    alt="Your trainer image: looking so fly"
                    src={this.state.preview}
                    style={{ maxWidth: '100%' }}
                />
            )
            : null;
        return (
            <form onSubmit={this.onSubmit}>
                <legend>Sign Up for Silly Shield Tournaments</legend>
                <fieldset>
                    <legend>Your info</legend>
                    <label htmlFor="first">
                        First Name:
                        <input
                            id="first"
                            name="first"
                            onChange={this.onFirstChange}
                            required={true}
                            type="text"
                            value={this.state.first}
                        />
                    </label>
                    <br/>
                    <label htmlFor="last">
                        Last Name:
                    <input
                            id="last"
                            name="last"
                            onChange={this.onLastChange}
                            required={true}
                            type="text"
                            value={this.state.last}
                    />
                    </label>
                    <br/>
                    <label htmlFor="username">
                        Username:
                        <small>(for Silly Shield)</small>
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
                    <label htmlFor="poGoUsername">
                        Username:
                        <small>(for PokemonGo)</small>
                        <input
                            id="poGoUsername"
                            name="poGoUsername"
                            onChange={this.onPoGoUsernameChange}
                            required={true}
                            type="text"
                            value={this.state.poGoUsername}
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
                    <label htmlFor="picture">
                        Screen shot of trainer page:
                        <input
                            id="picture"
                            name="picture"
                            onChange={this.onPictureChange}
                            required={true}
                            type="file"
                            accept="image/*"
                        />
                    </label>
                    {preview}
                    <br/>
                    <button name="submit">Sign Up</button>
                </fieldset>
            </form>
        );
    }
}

export default SignUp;
