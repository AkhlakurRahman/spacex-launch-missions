import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const IntroStyles = styled.div`
  background-image: url(/static/hero.jpg);
  background-size: cover;
  background-position: right;
  height: 100vh;
  width: 100%;

  .intro-main {
    width: 75%;
    height: 100vh;
    background: linear-gradient(to right bottom, #8ee0ee, #b8e9f0);
    clip-path: circle(70% at 7% 50%);
    color: #142d38;
    padding: 2rem;

    .content {
      display: flex;
      flex-direction: column;
      height: 60vh;
      margin: auto;
      margin-top: 10rem;

      h2 {
        font-size: 4rem;
        margin: 2.5rem 0;
      }

      p {
        font-size: 1.6rem;
      }

      .button-link {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 2rem;
        margin-top: 10rem;
        font-weight: 400;

        a {
          color: #142d38;
          margin-right: 3rem;
          padding: 1rem 2rem;
          text-decoration: none;
          border: 1px solid #6cd0e0;
          border-radius: 0.5rem;
          display: inline-block;
          transition: background 0.4s, color 0.5s ease-in-out;

          &:hover {
            background: #63a8c7;
            border: 1px solid #63a8c7;
            color: #fff;
          }
        }
      }
    }
  }
`;

const Intro = () => {
  return (
    <IntroStyles>
      <div className='intro-main'>
        <Link href='/'>
          <a>
            <img
              src='/static/logo.png'
              alt='SpaceX'
              style={{ width: '200px' }}
            />
          </a>
        </Link>
        <div className='content'>
          <h2>SpaceX's Missions and Rockets</h2>
          <p>
            SpaceX Designs, Manufactures and Launches Next Generation Rockets
            and Spacecrafts
          </p>
          <div className='button-link'>
            <Link href='/launches'>
              <a>Launches</a>
            </Link>
            <Link href='/rockets'>
              <a>Rockets</a>
            </Link>
          </div>
        </div>
      </div>
    </IntroStyles>
  );
};

export default Intro;
