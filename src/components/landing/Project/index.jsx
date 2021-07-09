import React from 'react';

import { Wrapper } from './styles';

export const Project = ({ image, url }) => {

  return (
    <Wrapper className='phoneItem'>
      <a href={url} target="_blank" rel="noreferrer">
        <img loading="lazy" src={image} alt={url}></img>
      </a>
    </Wrapper>
  );
};
