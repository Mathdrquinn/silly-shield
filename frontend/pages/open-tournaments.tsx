import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Table, Td, Th } from '../components/Table';

const ALL_TOUNAMENTS_QUERY = gql`
    query ALL_TOUNAMENTS_QUERY {
        tournaments {
            id
            name
            startDate
            playerCountLimit
        }
    }
`;

export const URL = '/open-tournaments';

const QueryWrapper = () => (
    <Query query={ALL_TOUNAMENTS_QUERY}>
        {({ data }) => <span>{JSON.stringify(data, null, 4)}</span>}
    </Query>
);

export class OpenTournaments extends React.Component<{}, { open: boolean }> {
    state = { open: false };
    onClick = () => {
        this.setState({ open: !this.state.open });
    }

    render() {
        const { open } = this.state;
        return (
            <main>
                <h1>Open Touraments</h1>
                <button
                    onClick={this.onClick}
                >
                    Toggle
                </button>
                <Table>
                    <caption>Tournaments looking for players</caption>
                    <thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Start Date</Th>
                            <Th>Players Count</Th>
                            <Th>Tournament Type</Th>
                            <Th>Player Level Restriction</Th>
                        </tr>
                    </thead>
                    <tbody>
                        {open ? <tr><Td><QueryWrapper /></Td></tr> : null}
                        <tr>
                            <Th>
                                <a href="">
                                    Tom's Battle
                                </a>
                            </Th>
                            <Td>
                                <time>2019-01-15</time>
                            </Td>
                            <Td>4 of 32</Td>
                            <Td>Type Battle</Td>
                            <Td>30</Td>
                        </tr>
                        <tr>
                            <Th>
                                <a href="">
                                    Bliss
                                </a>
                            </Th>
                            <Td>
                                <time>2019-01-15</time>
                            </Td>
                            <Td>7 of 8</Td>
                            <Td>Redundant Pokemon Battle</Td>
                            <Td>30+</Td>
                        </tr>
                        <tr>
                            <Th>
                                <a href="">
                                    Big Bird
                                </a>
                            </Th>
                            <Td>
                                <time>2019-01-29</time>
                            </Td>
                            <Td>59 of 128</Td>
                            <Td>Legendary Birds Only</Td>
                            <Td>25+</Td>
                        </tr>
                        <tr>
                            <Th>
                                <a href="">
                                    Baby Bash
                                </a>
                            </Th>
                            <Td>
                                <time>2019-02-14</time>
                            </Td>
                            <Td>2 of 32</Td>
                            <Td>Babies Only</Td>
                            <Td><em>None</em></Td>
                        </tr>
                    </tbody>
                </Table>
            </main>
        );
    }
}

export default OpenTournaments;
