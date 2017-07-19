import styled from 'styled-components';

export const CenterWrapper = styled.div`
  width: 100%;
  height: ${props => props.height? props.height: '100%'};
  display: flex;
  flex-direction: ${props => props.col? 'column':'row'};
  align-items: center;
  justify-content: center;
`
export const NavLink = styled(CenterWrapper)`
  font-size: 2em;

  & a {
    color: #888;
    transition: all .1s;
    text-decoration: none;
  }
  &:hover a {
    font-size: 1.15em;
    cursor:pointer;
  }
  &:active a {
    /*transition: all .1s;*/
    color: #555;
    font-size: 1.2em;
  }
`
export const Content = styled.div`
  position: relative;
  width: calc(100% - 400px);
  height: 100vh;
`
