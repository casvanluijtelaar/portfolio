import React, { useContext } from 'react';
import { ThemeContext } from 'providers/ThemeProvider';
import { Body, Icon } from './styles';


export const Chip = ({ icon, children, href, color }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <a href={href} target="_blank" rel="noreferrer">
      <Body theme={theme} color={color}>
        {icon != null && <Icon theme={theme} color={color}> <img src={icon} alt={icon} /></Icon>}
        {children}
      </Body>
    </a>

  );
};
