import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Moment from 'react-moment';

const LaunchStyle = styled.div`
  background: #e1f5fc;
  width: 50%;
  padding: 3rem;
  margin-bottom: 5rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: all 0.4s;

  :hover {
    box-shadow: 1rem 2rem 3rem rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }

  :active {
    box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
  }

  .main-content {
    h3 {
      font-size: 2.5rem;
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
`;

const Launch = ({ launch }) => {
  const {
    flight_number,
    mission_name,
    launch_date_local,
    launch_success
  } = launch;

  return (
    <LaunchStyle>
      <div className='main-content'>
        <h3>{mission_name}</h3>
        <p>
          Date: <Moment format='YYYY-MM-DD'>{launch_date_local}</Moment> at{' '}
          <Moment format='HH:mm'>{launch_date_local}</Moment>
        </p>
        <p>
          Mission:{' '}
          <span className={`${launch_success ? 'success' : 'failed'}`}>
            {launch_success ? 'Success' : 'Failed'}
          </span>
        </p>
      </div>

      <Link href={{ pathname: 'details', query: { flight_number } }}>
        <a>Launch Details</a>
      </Link>
    </LaunchStyle>
  );
};

export default Launch;
