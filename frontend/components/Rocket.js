import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

import formatMoney from '../lib/formatMoney';

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

const Launch = ({ rocket }) => {
  const {
    rocket_id,
    rocket_name,
    rocket_type,
    cost_per_launch,
    first_flight
  } = rocket;

  return (
    <LaunchStyle>
      <div className='main-content'>
        <h3>{rocket_name}</h3>
        <p>
          <strong>Rocket Type: </strong> {rocket_type}
        </p>
        <p>
          <strong>Cost Per Launch:</strong>{' '}
          {formatMoney.format(cost_per_launch)}
        </p>
        <p>
          <strong>First Flight:</strong> {first_flight}
        </p>
      </div>

      <Link href={{ pathname: 'rocketDetails', query: { rocket_id } }}>
        <a>Rocket Details</a>
      </Link>
    </LaunchStyle>
  );
};

export default Launch;
