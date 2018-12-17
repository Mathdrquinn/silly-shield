import * as React from 'react';
import { Header } from './Header';
import { Meta } from './Meta';

export class Page extends React.Component<{}, {}> {
    render() {
        return (
          <div>
            <Meta />
            <Header />
            {this.props.children}
          </div>
        );
    }
}
