import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  position: fixed;
  
  top: 0;
  left: 0;

  z-index: 100;
  pointer-events: none;
`;

export const PhoneWrapper = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: flex-end;
  pointer-events: none;

  @media  (max-width: 850px) {
    justify-content: center;
  }

`;


export const Frame = styled.div`
  width: 40vh;
  height: 80vh;
  padding: 10px;
	background-color: ${({ theme }) => (theme === 'light' ? '#e6e6e6' : '#757575')}; 
	border-radius: 40px;
  box-shadow:  0 0px 60px -30px  ${({ theme }) => (theme === 'light' ? 'rgb(0 0 0 / 30%)' : '#cccccc')}, inset 0 -2px 6px 0  ${({ theme }) => (theme === 'light' ? 'rgb(10 37 64 / 35%)' : '#EFFFFF')};
  pointer-events: auto;

`;


export const Screen = styled.div`
    pointer-events: auto !important;
    overflow: hidden;

    width: 100%;
    height: 100%;
  
    border-radius: 40px;
    background-color: ${({ theme }) => (theme === 'light' ? '#e6e6e6' : '#757575')};
    display: flex;
    flex-direction: column;
    align-items: flex-end;

`;


export const Contents = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  overflow-x: hidden;
  border-radius: 40px 40px 0px 0px;
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#414141')};
`;

export const ContentElement = styled.h1`
  position: absolute;
`;

export const MenuBar = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  opacity: 0.5;

  @media  (max-height: 600px) {
      height: 30px;

      img {
        height:20px;
      }
  }
`;




