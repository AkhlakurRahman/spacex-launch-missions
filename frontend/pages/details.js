import LaunchDetails from '../components/LaunchDetails';

const Details = ({ query: { flight_number } }) => {
  return <LaunchDetails flight_number={+flight_number} />;
};

export default Details;
