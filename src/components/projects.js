import React from 'react';
import styled from 'styled-components';
import { CenterWrapper } from './prestyled';
import { Link } from 'react-router-dom';


export default class Projects extends React.Component {

  render() {
    return(
      <CenterWrapper col>
        <h1>projects page!!</h1>
        <Link to='/'>home</Link>
      </CenterWrapper>
    );
  }
}
