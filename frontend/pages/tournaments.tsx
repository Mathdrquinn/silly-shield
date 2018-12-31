import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Table, Td, Th } from '../components/Table';
import { queryHandler } from '../util/queryHandler';

export const URL = '/tournaments';
interface ITournament {
    id: string;
    name: string;
    startDate: string;
    playerCountLimit: number;
}

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

const TournamentsTable: React.FunctionComponent<{ tournaments: ITournament[] }> = ({ tournaments }) => {
    const alltheT = tournaments.map(({ id, name, startDate: startDateTime, playerCountLimit }) => {
        const startDate = new Date(startDateTime).toDateString();
        return (
            <tr key={id}>
                <Th>
                    <a href={id}>
                        {name}
                    </a>
                </Th>
                <Td>
                    <time>{startDate}</time>
                </Td>
                <Td><em>unknown</em> of <strong>tbd</strong></Td>
                <Td><time>undefined</time></Td>
                <Td>{playerCountLimit}</Td>
            </tr>
        );
    });
    return (
        <React.Fragment>
            {alltheT}
        </React.Fragment>
    );
};
export class Tournaments extends React.Component<{}, {}> {
    render() {
        return (
            <main>
                <h1>Touraments</h1>
                <Table>
                    <caption>High Profile Tournaments</caption>
                    <thead>
                        <tr>
                            <Th>Name</Th>
                            <Th>Start Date</Th>
                            <Th>Round</Th>
                            <Th>Next Round Date</Th>
                            <Th>Players</Th>
                        </tr>
                    </thead>
                    <tbody>
                        <Query query={ALL_TOUNAMENTS_QUERY}>
                            {queryHandler(TournamentsTable, 'Tournaments')}
                        </Query>
                    </tbody>
                </Table>
            </main>
        );
    }
}

export default Tournaments;
