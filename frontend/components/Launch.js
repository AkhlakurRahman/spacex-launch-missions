import React from 'react';
import styled from 'styled-components';

const LaunchStyle = styled.div`
  background: #e1f5fc;
  width: 50%;
  padding: 3rem;
  margin-top: 5rem;
  box-shadow: 0 1rem 5rem rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: space-between;

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

  .see-more {
    button {
      font-family: ${props => props.theme.font_display};
      font-size: 1.5rem;
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
`;

const Launch = ({ launch }) => {
  const {
    mission_name,
    launch_date_local,
    launch_success,
    launch_year
  } = launch;

  return (
    <LaunchStyle>
      <div className='main-content'>
        <h3>{mission_name}</h3>
        <p>Date: {launch_date_local}</p>
        <p>
          Mission:{' '}
          <span className={`${launch_success ? 'success' : 'failed'}`}>
            {launch_success ? 'Success' : 'Failed'}
          </span>
        </p>
      </div>

      <div className='see-more'>
        <button>Launch Details</button>
      </div>
    </LaunchStyle>
  );
};

export default Launch;
