import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import Loader from './Loader';

const LAUNCH_DATA_QUERY = gql`
  {
    launches {
      flight_number
      mission_name
      launch_year
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCH_DATA_QUERY);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return data.launches.map(({ flight_number, mission_name }) => (
    <div>{mission_name}</div>
  ));
};

export default Launches;
