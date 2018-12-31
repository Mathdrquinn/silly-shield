import { default as gql } from 'graphql-tag';
import { default as Link } from 'next/link';
import * as React from 'react';
import { Query } from 'react-apollo';
import { Table, Td, Th } from '../components/Table';
import { ITournament } from '../types/Tournamet';
import { IHref } from '../types/util';
import { queryHandler } from '../util/queryHandler';
import { ITournamentQuery } from './tournament';

export const URL = '/tournaments';

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
        const href: IHref<ITournamentQuery> = { pathname: '/tournament', query: { id } };
        return (
            <tr key={id}>
                <Th>
                    <Link href={href}>
                        <a>{name}</a>
                    </Link>
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
