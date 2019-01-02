import * as React from 'react';

const UPDATE_INTERVAL = 800;

export class Loading extends React.Component<{}, { count: number, intervalId: NodeJS.Timeout }> {
    state = {
        count: 0,
        intervalId: null,
    };

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidMount() {
        this.setState({ intervalId: setInterval(this.incrementCount, UPDATE_INTERVAL) });
    }

    componentWillUnmount() {
        clearTimeout(this.state.intervalId);
    }

    render() {
        const { children, ...props } = this.props;
        const elipsis = '.'.repeat(this.state.count % 4);
        return (
            <span {...props}>
                Loading
                {children ? ` ${children}` : null}
                {elipsis}
            </span>
        );
    }
}
