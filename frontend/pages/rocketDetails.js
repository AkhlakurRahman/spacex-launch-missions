import React from 'react';
import RocketItems from '../components/RocketItems';

const rocketDetails = ({ query: { rocket_id } }) => {
  return <RocketItems rocket_id={rocket_id} />;
};

export default rocketDetails;
