import styled from 'styled-components';


export const Base = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: transparent;
  border: none;
  padding: 0;
`;

export const Top = styled.div`
  background-color: ${({ color }) => color};
  border-radius: 100%;
  width: 70%;
  aspect-ratio: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 33%;
    margin: 0;
  }
`;

export const Bottom = styled.p`
  color:  ${({ theme }) => (theme === 'light' ? '#212121' : '#e2e2e2')}; 
  margin: 0;
  font-size: 0.85rem;
  margin-top: 8px;
  text-align: center;
  width: 100%;
  word-wrap: break-word;
`;

