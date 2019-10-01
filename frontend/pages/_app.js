import App from 'next/app';

import Page from '../components/Page';
import GlobalStyles from '../components/styles/GlobalStyles';

class MyPortfolio extends App {
  render() {
    const { Component } = this.props;
    return (
      <>
        <Page>
          <Component></Component>
        </Page>
        <GlobalStyles />
      </>
    );
  }
}

export default MyPortfolio;
