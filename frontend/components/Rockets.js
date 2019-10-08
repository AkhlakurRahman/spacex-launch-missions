import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Loader from './Loader';
import Rocket from './Rocket';
import Header from './Header';

const RocketsStyle = styled.div`
  background: linear-gradient(to right bottom, #8ee0ee, #b8e9f0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  color: #142d38;

  h2 {
    font-size: 4.5rem;
    margin: 4rem 0;
    margin-left: -50rem;
    font-weight: 400;
  }
`;

const ROCKET_DATA_QUERY = gql`
  {
    rockets {
      rocket_id
      rocket_name
      rocket_type
      cost_per_launch
      first_flight
    }
  }
`;

const Rockets = () => {
  const { loading, error, data } = useQuery(ROCKET_DATA_QUERY);

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  return (
    <RocketsStyle>
      <Header />
      <h2>Rockets</h2>
      {data.rockets.map(rocket => (
        <Rocket key={rocket.rocket_id} rocket={rocket} />
      ))}
    </RocketsStyle>
  );
};

export default Rockets;
