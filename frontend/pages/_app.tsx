import { ApolloClient } from 'apollo-boost';
import { Container, default as NextApp } from 'next/app';
import { ApolloProvider } from 'react-apollo';
import { Page } from '../components/Page';
import { withData } from '../lib/withData';

class App extends NextApp<{ apollo: ApolloClient<{}> }> {
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
        const { apollo, Component, pageProps, query } = this.props;
        return (
            <Container>
              <ApolloProvider client={apollo}>
                  <Page>
                      <h1>Silly Shield</h1>
                      <p>
                          <em>Silly Shield</em>
                          <span> is a platform to organize PvP tournament for PokémonGo</span>
                      </p>
                      {pageProps.statusCode !== 404 ? <Component {...pageProps} query={query} /> : <h2>40 fizzle</h2>}
                  </Page>
                </ApolloProvider>
            </Container>
        );
    }
}

export default withData(App);
