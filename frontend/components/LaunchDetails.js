import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const SINGLE_LAUNCH_QUERY = gql`
  query SINGLE_LAUNCH_QUERY($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const LaunchDetails = ({ flight_number }) => {
  const { loading, error, data } = useQuery(SINGLE_LAUNCH_QUERY, {
    variables: { flight_number }
  });
  console.log(data);
  return <div>LaunchDetails {flight_number} </div>;
};

export default LaunchDetails;
