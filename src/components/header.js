import React from 'react';
import styled from 'styled-components';
import {CenterWrapper} from './prestyled';

export default class Header extends React.Component {

  render () {
    const links = ['About Me', 'Projects', 'Resume']
    return (
        <HeaderWrapper col>
          <CenterWrapper height='100px' >
            <Title>Joseph.how(arth)</Title>
          </CenterWrapper>
          <Nav links={links}></Nav>
        </HeaderWrapper>
    );
  }
}

let Nav = (props) => {
    const links = props.links.map((link,index) => {
      return <NavLink key={index}><p>{link}</p></NavLink>
    });
    const NavStyle = styled.div`
      width: 200px;
      height: ${links.length * 80}px;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      align-content: center;
    `
    return (
      <NavStyle>
        {links}
      </NavStyle>
    );
}

const HeaderWrapper = styled(CenterWrapper)`
  width: 350px;
  height: 100vh;
  justify-content: flex-start;
  border-right: 1px #AAA solid;
`
const Title = styled.p`
  font-size: 2.5em;
  color: #666;
`
const NavLink = styled(CenterWrapper)`
  color: #888;
  & p {
    font-size: 2em;
    transition: all .1s;
  }
  &:hover p {
    font-size: 2.4em;
  }
`
