import React from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';

import Intro from '../components/Intro';

Router.onRouteChangeStart = () => {
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  NProgress.done();
};

Router.onRouteChangeError = () => {
  NProgress.done();
};

const Home = () => (
  <div>
    <Intro />
  </div>
);

export default Home;
