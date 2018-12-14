import * as React from 'react';

interface IState {
    first: string;
    last: string;
    username: string;
}

export const URL = '/sign-up';
export class SignUp extends React.Component<{}, IState> {
    state = { first: '', last: '', username: '' };

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

    render() {
        return (
            <form>
                <legend>Sign Up for Silly Shield Tournaments</legend>
                <fieldset>
                    <legend>Your info</legend>
                    <label htmlFor="first">
                        First Name:
                        <input
                            id="first"
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
                            id="first"
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
                            onChange={this.onUsernameChange}
                            required={true}
                            type="text"
                            value={this.state.username}
                        />
                    </label>
                </fieldset>
            </form>
        );
    }
}

export default SignUp;
