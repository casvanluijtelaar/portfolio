import styled from 'styled-components';



export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  text-align: center;

  h2 {
    margin-bottom: 0px;
  }

  h4 {
    margin-top: 4px;
    margin-bottom: 8px;
  }

  p {
    padding: 8px;
  }

  img {
    height: 100%;
    object-fit: cover;
    margin: 0px;
  }


`;

export const Details = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;

  @media  (max-width: 866px) {
    display: none;
  }
`;