import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Base, Top, Bottom } from './styles';


export const Logo = ({ icon, color, url, children }) => {
  const { theme } = useContext(ThemeContext);

  return (

    <Base type="button" onClick={() => window.open(url).focus()}>
      <Top  color={color}>
        <img src={icon} alt={url}></img>
      </Top>
      <Bottom theme={theme}>{children}</Bottom>
    </Base>
   /*  <Wrapper type="button" theme={theme} color={color} onClick={() => window.open(url).focus()}>
      <Background color={color}>
        <img src={icon} alt={icon} />
      </Background>
      <p>{children}</p>
    </Wrapper> */
  );
};