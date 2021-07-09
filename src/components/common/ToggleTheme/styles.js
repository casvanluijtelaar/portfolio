import styled from 'styled-components';

export const Wrapper = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  transition: 0.3s all;
  padding: 10px;

  &:focus {
    outline: none;
    transition: 0.3s all;
  }

  img {
    margin-bottom: unset;
    
  }
`;
