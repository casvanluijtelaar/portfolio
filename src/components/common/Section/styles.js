import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

export const ContentWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 850px) {
    flex-direction: column;
    justify-content: center;
    gap: 40px;
  }
`;

export const Details = styled.div`
  flex: 0.5;

  @media (max-width: 850px) {
      flex: none;
      text-align: center;
  }

  h1 {
    font-size: 36pt;
    color: ${({ theme }) => (theme === 'light' ? '#212121' : '#fff')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2rem;
    font-size: 24pt;
    font-weight: normal;
    color: ${({ theme }) => (theme === 'light' ? '#707070' : '#e6e6e6')};

    @media (max-width: 960px) {
      mix-blend-mode: ${({ theme }) => (theme === 'light' ? 'unset' : 'difference')};
    }

    @media (max-width: 680px) {
      font-size: 20pt;
    }
  }
`;


export const Top = styled.div`
  display: none;
  overflow: hidden;
  width: min(50vw, 250px);
  height: min(50vw, 250px);
  border-radius: 100%;
  background-color: red;

  @media (max-width: 850px) {
    display: block;
  }

  img {
    margin: 0;
    padding: 0;

  }
`;