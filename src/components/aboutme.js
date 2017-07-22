import React from 'react';
import {CenterWrapper, Content} from './prestyled';
import styled from 'styled-components';

export default class AboutMe extends React.Component {

  render() {
    return (
      <AboutMeContainer col>
        <h1>I'm awesome!!</h1>
        <h2>nuf said...</h2>
      </AboutMeContainer>
    );
  }
}

const AboutMeContainer = styled(Content)`

`
