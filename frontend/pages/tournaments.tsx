import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Query, QueryResult } from 'react-apollo';
import Error from '../components/Error';
import Loading from '../components/Loading';
import { Table, Td, Th } from '../components/Table';

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
const tournamentsTblQH = (query: QueryResult<{ tournaments: ITournament[] }>): React.ReactNode => {
    const { data, error, loading } = query;
    if (loading) {
        return (<Loading>Tournaments</Loading>);
    }
    if (error) {
        return (<Error error={error} />);
    }
    return (<TournamentsTable {...data} />);
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
                            {tournamentsTblQH}
                        </Query>
                    </tbody>
                </Table>
            </main>
        );
    }
}

export default Tournaments;
