import React from 'react';
import styled from 'styled-components';
import { CenterWrapper, Content } from './prestyled';
import { Link } from 'react-router-dom';
import { projects } from '../data/projectData';
import { ProjElement } from './projectElement';

export default class Projects extends React.Component {
  render() {
    let Rows = [];
    for (var i = 0; i < projects.length; i += 2) {
      Rows = Rows.concat(RenderRow(projects.slice(i, i+2)));
    }
    return(
      <Content col>
        <h1>projects page!!</h1>
        {Rows}

      </Content>
    );
  }
}

const RenderRow = ([proj1, proj2]) => {
  // const [proj1, proj2] = props;
  console.log(proj2);
  return (
    <CenterWrapper key={proj1.name} alignTop>
      <ProjElement key={proj1.name} project={proj1}/>
      {proj2? <ProjElement key={proj2.name} project={proj2}/> : ''}
    </CenterWrapper>
  );
};
