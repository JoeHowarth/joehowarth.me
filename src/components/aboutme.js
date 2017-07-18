import React from 'react';
import styled from 'styled-components';
import image from './mountains.jpg'

export default class AboutMe extends React.Component {
  render () {
    const AboutMeWrapper = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;;
      width: calc(100% - 400px);
      background: blue;
      background: url(${image}) no-repeat center center fixed;
      background-size: cover;
    `
    return (
      <AboutMeWrapper>
        <img src={image} height="100" width="100"/>
        <h1>Rebuilding my personal site with React and styled-components</h1>
      </AboutMeWrapper>
    );
  }
}
