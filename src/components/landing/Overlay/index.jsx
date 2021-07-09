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

export const Overlay = () => {
  const { theme } = useContext(ThemeContext);

  if (typeof document !== "undefined") {

    const sections = gsap.utils.toArray('.scrollItem');
    const contents = gsap.utils.toArray('.phoneItem');


    const start = { opacity: 0, scale: 0.9, display: 'none', pointerEvents: 'none' };
    const end = { opacity: 1, scale: 1, display: 'flex', pointerEvents: 'auto' };

    sections.forEach((section, i) => {

      ScrollTrigger.create({
        trigger: section,
        animation: gsap.fromTo(contents[i], start, end),
        start: 'center bottom',
        end: 'center center',
        scrub: true,
        toggleActions: 'restart none none reverse'
      });

      ScrollTrigger.create({
        trigger: section,
        animation: gsap.fromTo(contents[i], end, { ...start, immediateRender: false }),
        start: 'center center',
        end: 'center top',
        scrub: true,
        toggleActions: 'restart none none reverse'
      });

    });

  }

  return (
    <Wrapper>
      <PhoneWrapper as={Container}>
        <Frame theme={theme}>
          <Screen theme={theme}>
            <Contents theme={theme}>
              <Intro />
              <Project image={leading} url='https://youtu.be/yeY3V62-8Sw' />
              <Project image={rcom} url='https://fb.watch/v/1wwobMnpY/' />
              <Project image={wilder} url='https://hvv.be/wilder/' />
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
