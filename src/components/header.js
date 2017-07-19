import React from 'react';
import styled from 'styled-components';
import { CenterWrapper, NavLink} from './prestyled';
import { Link } from 'react-router-dom';


export default class Header extends React.Component {

  render () {
    const links = {
      '/about_me': 'About Me',
      '/projects': 'Projects',
      '/resume': 'Resume'
    }
    return (
        <HeaderWrapper col>
          <TitleLink height='100px' >
            <Link to='/'>Joseph.how(arth)</Link>
          </TitleLink>
          <Nav links={links}></Nav>
        </HeaderWrapper>
    );
  }
}

let Nav = (props) => {
    const links = Object.entries(props.links).map(([url, desc], index) => {
      return (
        <NavLink height='70px' key={index}>
          <Link to={url}>{desc}</Link>
        </NavLink>
      )
    });
    return (
      <NavStyle>
        {links}
      </NavStyle>
    );
}
const NavStyle = styled.div`
  width: 200px;
  height: 100%;
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
`

const TitleLink = styled(NavLink)`
  font-size: 2.2em;
  & a {
    color: #666;
  }
  &:focus a {
    color: #333;
  }

`

const HeaderWrapper = styled(CenterWrapper)`
  width: 350px;
  height: 100vh;
  justify-content: flex-start;
  background: #f5f5fb;
  box-shadow: 0 0 4px #AAA;
  z-index: 5;
`

// const Title = styled(Link)`
//   font-size: 2.5em;
//   color: #666;
//   text-decoration: none;
// `
