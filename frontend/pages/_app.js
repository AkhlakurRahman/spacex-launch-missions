import App from 'next/app';
import { ApolloProvider } from '@apollo/react-hooks';

import Page from '../components/Page';
import withApollo from '../lib/withData';
import GlobalStyles from '../components/styles/GlobalStyles';

class MyApp extends App {
  render() {
    const { Component, pageProps, apollo } = this.props;
    return (
      <>
        <ApolloProvider client={apollo}>
          <Page>
            <Component {...pageProps} />
          </Page>
          <GlobalStyles />
        </ApolloProvider>
      </>
    );
  }
}

export default withApollo(MyApp);
