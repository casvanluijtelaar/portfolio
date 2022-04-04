import React from 'react';

import { Details, Wrapper } from './styles';
import { Chip, Chips } from 'components/common';

import headshot from 'assets/images/headshot.jpg';
import pin from 'assets/icons/pin.svg'
import user from 'assets/icons/user.svg'
import briefcase from 'assets/icons/briefcase.svg'


export const Intro = () => {

  const getAge = birthDate => Math.floor((new Date() - birthDate.getTime()) / 3.15576e+10)

  return (
    <Wrapper className='phoneItem'>
      <img loading="lazy" src={headshot} alt="headshot" width='400px' height='400px' />
      <Details>
        <h2>Cas van Luijtelaar</h2>
        <h4>Software developer & Interaction Designer</h4>

        <Chips>
          <Chip color='#A62639' icon={pin} href='https://www.google.com/maps/@50.8044807,5.6506495,11.67z'>Belgium</Chip>
          <Chip color='#A62639' icon={user}>{getAge(new Date(1998, 11, 30, 20, 55))} Years</Chip>
          <Chip color='#A62639' icon={briefcase} href='https://rvised.com/'>Rvised</Chip>
        </Chips>

        <p>
          Hey &#128075; I'm Cas! For the last {getAge(new Date(2016, 9, 1))} years I've been making creative software experiences on all platforms.
          Currently working as a mobile development consultant at <a href='https://umain.com/'>Umain</a>. Passions include Flutter, Music and electronics. &#128522;
        </p>
      </Details>


    </Wrapper>
  );
};
