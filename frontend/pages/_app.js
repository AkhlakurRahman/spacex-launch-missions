import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import Page from '../components/Page';
import withData from '../lib/withData';
import GlobalStyles from '../components/styles/GlobalStyles';

class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    pageProps.query = ctx.query;
    return { pageProps };
  }

  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <ApolloProvider client={apollo}>
        <Page>
          <Component {...pageProps} />
        </Page>
        <GlobalStyles />
      </ApolloProvider>
    );
  }
}

export default withData(MyApp);
