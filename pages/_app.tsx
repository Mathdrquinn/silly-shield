import { Container, default as NextApp } from 'next/app';
import { Page } from '../components/Page';

export default class App extends NextApp {
  render() {
    const { Component } = this.props;

    return (
      <Container>
        <Page>
          <h1>Silly Shield</h1>
          <p><em>Silly Shield</em> is a platform to organize PvP tournament for PokémonGo</p>
          <Component />
        </Page>
      </Container>
    );
  }
}
