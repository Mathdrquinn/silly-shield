import { QueryResult } from 'react-apollo';
import { Error } from '../components/Error';
import { Loading } from '../components/Loading';

export const queryHandler = <P extends {}>(
    Component: React.FunctionComponent<P> | React.ComponentClass<P>,
    loadingText: string,
) => (query: QueryResult<P>): React.ReactNode => {
    const { data, error, loading } = query;
    if (loading) {
        return (<Loading>{loadingText}</Loading>);
    }
    if (error) {
        return (<Error error={error} />);
    }
    return (<Component {...data} />);
};
