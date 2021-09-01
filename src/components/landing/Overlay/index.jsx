import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, ToggleTheme } from 'components/common';
import { Contact, Intro, Project, Contributions } from "components/landing";

import { Wrapper, PhoneWrapper, Frame, Screen, MenuBar, Contents } from './styles';

import leading from 'assets/images/leading.png';
import rcom from 'assets/images/rcom.png';
import wilder from 'assets/images/wilder.png';
import beatable from 'assets/images/beatable.png';

import { gsap } from "gsap"
import ScrollTrigger from "gsap/ScrollTrigger"

const desktop = () => {

  const sections = gsap.utils.toArray('.scrollItem');
  const contents = gsap.utils.toArray('.phoneItem');

  const start = { opacity: 0, scale: 0.9, display: 'none', pointerEvents: 'none' };
  const end = { opacity: 1, scale: 1, display: 'flex', pointerEvents: 'auto' };

  sections.forEach((section, i) => {

    ScrollTrigger.create({
      trigger: section,
      animation: gsap.fromTo(contents[i], start, end),
      start: 'center 90%',
      end: 'center 70%',
      scrub: true,
      toggleActions: 'restart none none reverse'
    });

    ScrollTrigger.create({
      trigger: section,
      animation: gsap.fromTo(contents[i], end, { ...start, immediateRender: false }),
      start: 'center 30%',
      end: 'center 10%',
      scrub: true,
      toggleActions: 'restart none none reverse'
    });


  });
}

const mobile = () => {

  const sections = gsap.utils.toArray('.scrollItem');
  const contents = gsap.utils.toArray('.phoneItem');

  const start = { opacity: 0, scale: 0.9, display: 'none', pointerEvents: 'none' };
  const end = { opacity: 1, scale: 1, display: 'flex', pointerEvents: 'auto' };

  sections.forEach((section, i) => {


    /// scale animation -------------------------------------------------------------------------------------------------------

    ScrollTrigger.create({
      trigger: section,
      animation: gsap.fromTo(contents[i], start, end),
      start: 'center 90%',
      end: 'center 70%',
      scrub: true,
      toggleActions: 'restart none none reverse'
    });



    ScrollTrigger.create({
      trigger: section,
      animation: gsap.fromTo(contents[i], end, { ...start, immediateRender: false }),
      start: 'bottom 20%',
      end: 'bottom 0%',
      scrub: true,
      toggleActions: 'restart none none reverse'
    });





    /// blur animation -------------------------------------------------------------------------------------------------------


    ScrollTrigger.create({
      trigger: section,
      animation: gsap.fromTo('#wrapper', { filter: 'blur(0px)', opacity: '1', zIndex: 100, autoRound: false }, { filter: 'blur(4px)', zIndex: -100, opacity: '0.7', autoRound: false }),
      start: 'center bottom',
      end: 'center 75%',
      scrub: true,
      toggleActions: 'restart none none reverse'
    });

    ScrollTrigger.create({
      trigger: section,
      animation: gsap.fromTo('#wrapper', { filter: 'blur(4px)', opacity: '0.7', zIndex: -100, autoRound: false }, { filter: 'blur(0px)', opacity: '1', zIndex: 100, autoRound: false }),
      start: 'center 15%',
      end: 'center top',
      scrub: true,
      toggleActions: 'restart none none reverse'
    });


  });

}



export const Overlay = () => {
  const { theme } = useContext(ThemeContext);

  if (typeof document !== "undefined") {
    ScrollTrigger.matchMedia({
      '(min-width: 850px)': desktop,
      '(max-width: 850px)': mobile,
    });
  }

  return (
    <Wrapper id='wrapper'>
      <PhoneWrapper as={Container}>
        <Frame theme={theme}>
          <Screen theme={theme}>
            <Contents theme={theme}>
              <Intro />
              <Project image={rcom} url='https://fb.watch/v/1wwobMnpY/' />
              <Project image={wilder} url='https://hvv.be/wilder/' />
              <Project image={leading} url='https://youtu.be/yeY3V62-8Sw' />
              <Project image={beatable} url='https://github.com/casvanluijtelaar/BEATABLE' />
              <Contributions />
              <Contact />
            </Contents>
            <MenuBar>
              <ToggleTheme />
            </MenuBar>
          </Screen>
        </Frame>
      </PhoneWrapper>
    </Wrapper>
  );
};
