import React from 'react';
import styled from 'styled-components';
import mountains from '../assets/mountains.jpg';
import rowboat from '../assets/rowboat.jpg';
import portrait from '../assets/portrait2.jpg';
import { CenterWrapper, Content } from './prestyled';

export default class Splash extends React.Component {
  render () {
    const SplashWrapper = styled(Content)`
      display: flex;
      flex-direction: column;
      justify-content: center;
      /*height: 100%;*/
    `
    const Bot = styled.div`
      flex: 3;
      text-align: center;
      font-size: 1.5em;
    `
    const Top = styled(CenterWrapper)`
      flex: 2;
      width: 100%;
      background: radial-gradient(circle at top,
                                  rgba(255, 255, 255, 1),
                                  ghostwhite);
                  /*url(${rowboat}) center center;*/
      background-size: cover;
      align-items: flex-end;
    `
    return (
      <SplashWrapper>
        <Top>
          <Portrait/>
        </Top>
        <Bot>
          I love making machines do work <br/> (and Theodore Roosevelt)
        </Bot>
      </SplashWrapper>
    );
  }
}

const Portrait = styled.div`
  margin: 20px;
  box-shadow: 0 0 50px 5px rgba(200,200,200, .6);
  width: 150px;
  height: 150px;
  background: radial-gradient(circle,
                              rgba(200,200,200, 0.0),
                              rgba(200,200,200, 0.1)),
              url(${portrait}) center center;
  background-size: cover;
  border-radius: 45%;

`
