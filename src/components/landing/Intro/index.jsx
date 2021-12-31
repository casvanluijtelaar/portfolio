import React from 'react';

import { Details, Wrapper } from './styles';
import { Chip, Chips } from 'components/common';

import headshot from 'assets/images/headshot.jpg';
import pin from 'assets/icons/pin.svg'
import user from 'assets/icons/user.svg'
import briefcase from 'assets/icons/briefcase.svg'


export const Intro = () => {

  /*   function getAge(dateString) {
      var today = new Date();
      var birthDate = new Date(dateString);
      var age = today.getFullYear() - birthDate.getFullYear();
      var m = today.getMonth() - birthDate.getMonth();
      if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
      }
      return age;
    } */

  /*   function getAge(birthday) { // birthday is a date
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    } */

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
          Currently working as a full stack developer for <a href='https://rvised.com/'>Rvised</a>. Passions include Flutter, Music and electronics. &#128522;
        </p>
      </Details>


    </Wrapper>
  );
};
