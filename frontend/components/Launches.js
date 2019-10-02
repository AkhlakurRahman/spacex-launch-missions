import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import Loader from './Loader';
import Launch from './Launch';
import Header from './Header';

const LaunchesStyle = styled.div`
  background: linear-gradient(to right bottom, #8ee0ee, #b8e9f0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3rem 0;
  color: #142d38;

  h2 {
    font-size: 4.5rem;
    margin: 3rem 0;
    font-weight: 400;
  }
`;

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

  return (
    <LaunchesStyle>
      <Header />
      <h2>Launches</h2>
      {data.launches.map(launch => (
        <Launch key={launch.flight_number} launch={launch} />
      ))}
    </LaunchesStyle>
  );
};

export default Launches;
