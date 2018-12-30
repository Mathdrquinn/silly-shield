import { Container, default as NextApp } from 'next/app';
import { ApolloProvider, ApolloProviderProps } from 'react-apollo';
import { Page } from '../components/Page';
import { withData } from '../lib/withData';

class App extends NextApp {
    static async getInitialProps({ Component, ctx }) {
        let pageProps: any = {};
        const { query } = ctx;

        if (Component.getInitialProps) {
            const initProps = await Component.getInitialProps(ctx);
            pageProps = { ...initProps };
        }

        return { pageProps, query };
    }
    render() {
        const { Component, pageProps } = this.props;

        return (
            <Container>
              <ApolloProvider>
                  <Page>
                      <h1>Silly Shield</h1>
                      <p>
                          <em>Silly Shield</em>
                          <span> is a platform to organize PvP tournament for PokémonGo</span>
                      </p>
                      <Component {...pageProps} />
                  </Page>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(App);
