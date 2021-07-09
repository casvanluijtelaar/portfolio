import styled from 'styled-components';

export const Wrapper = styled.div`
    position: absolute;
    display: flex;
    flex-direction: column;  
`;

export const Card = styled.a`
  padding: 1rem;
  height: 100%;
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#757575')};
  color: ${({ theme }) => (theme === 'light' ? '#757575' : '#fff')};
  box-shadow:  0 0px 60px -30px  ${({ theme }) => (theme === 'light' ? 'rgb(0 0 0 / 30%)' : '#cccccc')};
  h4, p {
    margin-bottom: 1rem;
  }
  h4 {
    color: #031331;
  }
`;

