import * as React from 'react';

interface IState {
    first: string;
    last: string;
    username: string;
    poGoUsername: string;
    experience: number;
}

export const URL = '/sign-up';
export class SignUp extends React.Component<{}, IState> {
    state = { first: '', last: '', username: '', poGoUsername: '', experience: 0 };

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

    onExperienceChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        if (e.target) {
            this.setState({ experience: Number(e.target.value) });
        }
    }

    onSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
    }

    render() {
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
                    <label htmlFor="experience">
                        Experience:
                        <input
                            id="experience"
                            name="experience"
                            onChange={this.onExperienceChange}
                            required={true}
                            type="number"
                            min={0}
                            step={1}
                            value={this.state.experience}
                        />
                    </label>
                    <br/>
                    <button name="submit">Sign Up</button>
                </fieldset>
            </form>
        );
    }
}

export default SignUp;
