import { withRouter } from 'next/router';

import LaunchDetails from '../components/LaunchDetails';

const Details = withRouter(({ router: { query: { flight_number } } }) => {
  return <LaunchDetails flight_number={+flight_number} />;
});

export default Details;
