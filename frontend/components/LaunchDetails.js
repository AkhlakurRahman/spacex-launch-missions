import React from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Moment from 'react-moment';

import Header from './Header';
import Loader from './Loader';

const SINGLE_LAUNCH_QUERY = gql`
  query SINGLE_LAUNCH_QUERY($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      mission_name
      launch_success
      launch_date_local
      details
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;

const LaunchDetailsStyles = styled.div`
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
      font-size: 2.5rem;
    }
    hr {
      border: 1px solid #8ee0ee;
      margin: 1rem 0;
    }
    p {
      font-size: 1.4rem;
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
    .rocket {
      margin-top: 3rem;

      p {
        margin-bottom: 3rem;
      }

      a {
        font-family: ${props => props.theme.font_display};
        font-size: 1.7rem;
        text-decoration: none;
        border: 1px solid #6cd0e0;
        border-radius: 0.2rem;
        background: #63a8c7;
        color: #fff;
        padding: 1rem 2rem;
        cursor: pointer;
        transition: background 0.3s, color 0.5s;

        :hover {
          background: #fff;
          color: #63a8c7;
        }

        :focus {
          outline: none;
        }
      }
    }
  }
`;

const LaunchDetails = ({ flight_number }) => {
  const { loading, error, data } = useQuery(SINGLE_LAUNCH_QUERY, {
    variables: { flight_number }
  });

  if (loading) return <Loader />;

  if (error) return <p>Error :(</p>;

  const {
    mission_name,
    launch_success,
    launch_date_local,
    details,
    rocket: { rocket_id, rocket_name, rocket_type }
  } = data.launch;

  return (
    <LaunchDetailsStyles>
      <Header />
      <h2>Launch Details </h2>
      <div className='main-content'>
        <div>
          <h3>Mission Details</h3>
          <hr />
          <h4>{mission_name}</h4>
          <p>
            <strong>Date:</strong>{' '}
            <Moment format='YYYY-MM-DD'>{launch_date_local}</Moment> at{' '}
            <Moment format='HH:mm'>{launch_date_local}</Moment>
          </p>
          <p>
            <strong>Flight Number:</strong> {flight_number}
          </p>
          <p>
            <strong>Mission:</strong>{' '}
            <span className={`${launch_success ? 'success' : 'failed'}`}>
              {launch_success ? 'Success' : 'Failed'}
            </span>
          </p>
          <p>
            <strong>Mission Details:</strong> {details}
          </p>
        </div>
        <div className='rocket'>
          <h3>Rocket Details</h3>
          <hr />
          <h4>{rocket_name}</h4>
          <p>
            <strong>Rocket Type: </strong>
            {rocket_type}
          </p>
          <Link href={{ pathname: '/rocketDetails', query: { rocket_id } }}>
            <a>Details</a>
          </Link>
        </div>
      </div>
    </LaunchDetailsStyles>
  );
};

export default LaunchDetails;
