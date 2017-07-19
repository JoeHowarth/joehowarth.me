import React, { Component } from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Header   from './components/header';
import Splash   from './components/splash';
import Projects from './components/projects';
import AboutMe  from './components/aboutme';
import Resume   from './components/resume';
import styled from 'styled-components';



class App extends Component {


  render() {
    const AppWrapper = styled.div`
      display: flex;
      flex-direction: row;
      font-family: 'Raleway', sans-serif;
      color: #666
    `
    //const theme = {

    return (
      <HashRouter>
        <AppWrapper>
          <Header/>
          <Switch>
            <Route exact path='/'   component={Splash}/>
            <Route path='/about_me' component={AboutMe}/>
            <Route path='/projects' component={Projects}/>
            <Route path='/resume'   component={Resume}/>
          </Switch>
        </AppWrapper>
      </HashRouter>
    );
  }
}



export default App;
