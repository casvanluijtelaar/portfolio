import styled from 'styled-components';

export const Body = styled.div`
  height: 28px;
  line-height: 28px;
  display: inline-block;

  background: ${({ theme, color }) => (color ?? (theme === 'light' ? '#212121' : '#e2e2e2'))};
  color: ${({ theme, color }) => (color ? '#fff' : (theme === 'light' ? '#fff' : '#212121'))}; 

  padding: 0 15px;
  margin: 5px 3px;
  border-radius: 32px;
  font-size: 13px;
`;

export const Icon = styled.div`
  display: block;
  float: left;
  width: 28px;
  text-align: center;
  margin: 0 5px 0 -10px;

  img {
    width: 75%;
    margin: 0px !important;
    padding: 4px;
    filter: ${({ theme, color }) => (color ? '' : (theme === 'light' ? 'invert(0)' : 'invert(0.8)'))};
  }
`;