import { default as gql } from 'graphql-tag';
import * as React from 'react';
import { Query } from 'react-apollo';
import { ITournament } from '../types/Tournamet';
import { queryHandler } from '../util/queryHandler';

export interface ITournamentQuery {
    id: string;
}

interface IProps {
    query: ITournamentQuery;
}

const TOURNAMENT_QUERY = gql`
    query TOURNAMENT_QUERY($id: ID!) {
        tournament(where: {
            id: $id
        }) {
            id
            name
            startDate
            playerCountLimit
        }
    }
`;

const Tournament: React.FunctionComponent<{ tournament: ITournament }> = ({ tournament }) => (
    <dl>
        <dt>Name</dt>
        <dd>{tournament.name}</dd>
        <dt>Start Date</dt>
        <dd>{tournament.startDate}</dd>
        <dt>Player Count Limit</dt>
        <dd>{tournament.playerCountLimit}</dd>
    </dl>
);

const QueryWrapper: React.FunctionComponent<IProps> = props => (
    <main>
        <Query query={TOURNAMENT_QUERY} variables={{ id: props.query.id }}>
            {queryHandler<{ tournament: ITournament }>(Tournament, 'your tournament')}
        </Query>
    </main>
);

export default QueryWrapper;
