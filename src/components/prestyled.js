import styled from 'styled-components';

export const CenterWrapper = styled.div`
  width: ${props => props.width? props.width: 'inherit'};
  height: ${props => props.height? props.height: '100%'};
  display: flex;
  flex-direction: ${props => props.col? 'column':'row'};
  align-items: ${props => props.alignTop? 'flex-start':'center'};
  justify-content: ${props => props.justifyStart? 'flex-start' : 'center'};
`
export const NavLink = styled.div`
  width: ${props => props.width? props.width: 'inherit'};
  height: ${props => props.height? props.height: '100%'};
  display: flex;
  flex-direction: ${props => props.col? 'column':'row'};
  align-items: ${props => props.alignTop? 'flex-start':'center'};
  justify-content: center;
  font-size: 2em;
  & a {
    color: #888;
    transition: all .3s;
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
  ${''/* height: ${props => props.height? props.height: '100%'}; */}
  ${''/* display: grid; */}
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
