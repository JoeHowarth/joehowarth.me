import React from 'react';
import {CenterWrapper, Content} from './prestyled';
import styled from 'styled-components';

export default class AboutMe extends React.Component {

  render() {
    return (
      <AboutMeContainer col>
        <h1>About Joe</h1>
        {/* <h2></h2> */}
        <p>
          I grew up in the lovely town of Suffield, CT with my wonderful parents
          Liese and Alan.
        </p>
        <p>
          I became fascinated by computer science after feeling the culture in
          a trip to San Francisco. Unfortunately CS wasn't offered at my High
          School, so I picked up Harvard's free introductory course, CS50. At
          first thinking in C hurt. A lot. But I quickly found myself spending
          hours and hours wracking my brain to make a program print out a mario
          level or detect a palandrom. This started my addiction to solving
          puzzles.
        </p>
        <p>
          Currently I've spent my free time diving into deep learning.
          Learning the theory behind backprogation, fully-connected vs cnn
          vs rnn(lstm), attention mechanisms and the countless mesmerizing
          details in learning to make machines learn.
        </p>
        <p>
          Over the summer I build a computer vision system that can take an
          image of a Go game board, segment it, classify if a tile belongs to
          which player and convert that to a standarized game tree file format.
        </p>
      </AboutMeContainer>
    );
  }
}

const AboutMeContainer = styled(Content)`
  text-align: left;
  padding: 20px 20%;
`
