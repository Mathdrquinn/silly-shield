import * as React from 'react';

interface State {
    first: string;
    last: string;
    username: string;
}

export const URL = '/sign-up';
export class SignUp extends React.Component<{}, State> {
    state = { first: '', last: '', username: '' };

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
                            onChange={(e) => this.setState({ first: e.target.value })}
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
                            onChange={(e) => this.setState({ last: e.target.value })}
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
                            onChange={(e) => this.setState({ username: e.target.value })}
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
