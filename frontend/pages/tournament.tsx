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
    query TOURNAMENT_QUERY {
        id,
        name,
    }
`;

export default class Tournament extends React.Component<IProps> {
    render() {
        return (
            <main>
                <Query query={TOURNAMENT_QUERY}>
                    {queryHandler<ITournament>(props => <p>It loaded {props.name}</p>, 'your tournament')}
                </Query>
            </main>
        );
    }
}
