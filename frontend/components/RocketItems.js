import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Loader from './Loader';

const SINGLE_ROCKET_QUERY = gql`
  query SINGLE_ROCKET_QUERY($rocket_id: String!) {
    rocket(rocket_id: $rocket_id) {
      rocket_id
      rocket_name
      rocket_type
      cost_per_launch
      first_flight
      boosters
      description
      success_rate_pct
    }
  }
`;

const RocketItems = ({ rocket_id }) => {
  const { loading, error, data } = useQuery(SINGLE_ROCKET_QUERY, {
    variables: { rocket_id }
  });

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  console.log(data.rocket);

  return <div></div>;
};

export default RocketItems;
