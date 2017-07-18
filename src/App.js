import React, { Component } from 'react';
import Header from './components/header';
import AboutMe from './components/aboutme';
import styled from 'styled-components';


class App extends Component {


  render() {
    const AppWrapper = styled.div`
      display: flex;
      flex-direction: row;
      font-family: 'Raleway', sans-serif;
    `
    //const theme = {

    return (
      <AppWrapper>
        <Header/>
        <AboutMe/>
      </AppWrapper>
    );
  }
}



export default App;
