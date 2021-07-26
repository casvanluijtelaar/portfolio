import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';

import { Wrapper, Card } from './styles';


export const Contributions = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper className='phoneItem'>
      <Card theme={theme} target="_blank" rel="noreferrer" href='https://pub.dev/packages/faker_dart'>
        <h4>Faker.dart</h4>
        <p>generate massive amounts of fake data in Dart & Flutter</p>
      </Card>
      <Card theme={theme} target="_blank" rel="noreferrer" href='https://marketplace.visualstudio.com/items?itemName=casvanluijtelaar.dart-firestore-dataclass-generator'>
        <h4>Dart firestore dataclass generator</h4>
        <p>Generate dart data classes from Firebase Firestore documents</p>
      </Card>
      <Card theme={theme} target="_blank" rel="noreferrer" href='https://pub.dev/packages/paged_vertical_calendar'>
        <h4>Paged vertical calendar</h4>
        <p>A simple paginated framework for implementing calendar based interfaces.</p>
      </Card>
      <Card theme={theme} target="_blank" rel="noreferrer" href='https://github.com/casvanluijtelaar/blurhash'>
        <h4>Blurhash</h4>
        <p>A flutter/dart implementation for the Blurhash algorithm</p>
      </Card>
      <Card theme={theme} target="_blank" rel="noreferrer" href='https://youtu.be/X04kq9voH3I'>
        <h4>Vintage LaunchPad</h4>
        <p>Turn any old 1980s organ into a digital launchpad</p>
      </Card>
      <Card theme={theme} target="_blank" rel="noreferrer" href='https://youtu.be/fBuQDW87KT0'>
        <h4>Gravity Ball</h4>
        <p>An interactive installation & team based game</p>
      </Card>
    </Wrapper>
  );
};
