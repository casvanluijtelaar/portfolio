import React, { useContext } from 'react';

import { ThemeContext } from 'providers/ThemeProvider';
import { Container } from 'components/common';
import { Wrapper, ContentWrapper, Details, Top } from './styles';


export const Section = ({ children, header }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper className='scrollItem'>
      <ContentWrapper as={Container}>
        <Details theme={theme}> {children} </Details>
      </ContentWrapper>
    </Wrapper>
  );
}

