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
      display: grid;
      width: 100%;
      height: 100vh;
      grid-template-columns: 350px 1fr;
      font-family: 'Raleway', sans-serif;
      color: #666;
      align-items: stretch;
      justify-items: stretch;
    `
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
