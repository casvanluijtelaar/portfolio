import styled from 'styled-components';



export const Grid = styled.div`
  position: absolute;
  display: grid !important;



  grid-template-columns: repeat(3, 1fr);
  overflow: auto;
  column-gap: 5%;
  row-gap: 25px;

  @media  (max-width: 866px) {
    grid-auto-columns: 1fr;
  }
`;

export const Padding = styled.div`
  margin: 20px 5px;
  width: 100%;
`;



