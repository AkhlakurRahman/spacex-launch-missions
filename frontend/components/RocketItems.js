import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';

import formatMoney from '../lib/formatMoney';
import Loader from './Loader';
import Header from './Header';

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

const RocketDetailsStyles = styled.div`
  background: linear-gradient(to right bottom, #8ee0ee, #b8e9f0);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding: 3rem 0;
  color: #142d38;

  h2 {
    font-size: 4.5rem;
    margin: 4rem 0;
    margin-left: -38rem;
    font-weight: 400;
  }

  .main-content {
    background: #e1f5fc;
    width: 50%;
    padding: 3rem;
    margin-bottom: 5rem;
    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
    display: flex;
    flex-direction: column;
    transition: all 0.4s;

    :hover {
      box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.4);
      cursor: pointer;
    }

    :active {
      box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
    }

    h3 {
      font-size: 3rem;
      text-align: center;
    }
    h4 {
      font-size: 3rem;
    }
    hr {
      border: 1px solid #8ee0ee;
      margin: 1rem 0;
    }
    p {
      font-size: 1.4rem;
      margin-bottom: 0.7rem;
      span {
        font-weight: 400;
      }
      .success {
        color: green;
      }
      .failed {
        color: red;
      }
    }
  }
`;

const RocketItems = ({ rocket_id }) => {
  const { loading, error, data } = useQuery(SINGLE_ROCKET_QUERY, {
    variables: { rocket_id }
  });

  if (loading) return <Loader />;
  if (error) return <p>Error :(</p>;

  const {
    rocket_name,
    rocket_type,
    cost_per_launch,
    first_flight,
    boosters,
    description,
    success_rate_pct
  } = data.rocket;

  return (
    <RocketDetailsStyles>
      <Header />
      <h2>Rocket Details </h2>
      <div className='main-content'>
        <div>
          <h4>{rocket_name}</h4>
          <p>
            <strong>Rocket Type:</strong> {rocket_type}
          </p>
          <p>
            <strong>Cost Per Launch:</strong>{' '}
            {formatMoney.format(cost_per_launch)}
          </p>
          <p>
            <strong>First Flight:</strong> {first_flight}
          </p>
          <p>
            <strong>Boosters:</strong> {boosters}
          </p>
          <p>
            <strong>Description:</strong> {description}
          </p>
          <p>
            <strong>Success Rate:</strong> {success_rate_pct}&#37;
          </p>
        </div>
      </div>
    </RocketDetailsStyles>
  );
};

export default RocketItems;
