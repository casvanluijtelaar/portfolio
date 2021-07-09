import React from 'react';
import { Logo } from 'components/common';
import { Grid, Padding } from './styles';

import githubIcon from 'assets/icons/github.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import linkedInIcon from 'assets/icons/linkedin.svg';
import emailIcon from 'assets/icons/email.svg';
import stackoverflowIcon from 'assets/icons/stack.svg';

export const Contact = () => {

  return (
    <Padding>
      <Grid className='phoneItem'>
        <Logo icon={githubIcon} color='#1A1E22' url='https://github.com/casvanluijtelaar/'>Github</Logo>
        <Logo icon={twitterIcon} color='#1DA1F2' url='https://www.twitter.com/'>Twitter</Logo>
        <Logo icon={linkedInIcon} color='#2867B2' url='https://www.linkedin.com/in/cas-van-luijtelaar/'>Linkedin</Logo>
        <Logo icon={emailIcon} color='#A62639' url='mailto: casvanluijtelaar@hotmail.com'>Email</Logo>
        <Logo icon={stackoverflowIcon} name='StackOverflow' color='#F48024' url='https://stackoverflow.com/users/10355644/casvl/'>Stack Overflow</Logo>
      </Grid>
    </Padding>
  );
};
