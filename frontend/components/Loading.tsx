import * as React from 'react';

const UPDATE_INTERVAL = 800;

export class Loading extends React.Component<{}, { count: number}> {
    state = { count: 0 };

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    }

    componentDidMount() {
        setTimeout(this.incrementCount, UPDATE_INTERVAL);
    }

    componentDidUpdate() {
        setTimeout(this.incrementCount, UPDATE_INTERVAL);
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
