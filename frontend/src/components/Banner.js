import React from 'react';
import { StyledDiv } from './Styled';

const Banner = ({ type, homeData }) => {
  return (
    <StyledDiv>
      <h1 style={{ marginTop: '0px' }}>{`${type} dashboard`}</h1>
      <h3>{homeData.name}</h3>
    </StyledDiv>
  );
};

export default Banner;
