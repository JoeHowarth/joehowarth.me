import React from 'react';
import styled from 'styled-components';
// import { Link } from 'react-router-dom';

import { CenterWrapper, NavLink} from './prestyled';
// import { projects } from '../data/projectData';
import Github_icon from '../assets/GitHub-Mark-32px.png';

export const ProjElement = props => {
  const { name, subtitle, description, repo, img, site, technologies} = props.project;

  const RenderTechs = technologies.map(tech => (<li key={tech}>{tech}</li>));

  return (
    <ProjContainer col>
      <NameDiv >{name}</NameDiv>
      <SubTitle>{subtitle}</SubTitle>
      <GithubButton repo={repo}/>
      <DescContainer >{description}</DescContainer>
      <TechList > {RenderTechs}</TechList>
    </ProjContainer>
  );
};

const ProjContainer = styled.div`
  display: grid;
  align-items: center;
  ${''/* justify-items: center; */}
  grid-template-rows:  40px 70px 40px;
  grid-template-columns: 200px  1fr  100px;
  ${''/* grid-template-areas:
    "name . . GitHub"
    "desc desc desc desc"
  ". techs techs techs" */}
  background-color: #f5f5fb;
  border: 1px #AAA solid;
  margin: 20px;
  padding: 10px;
  height: 150px;
  width: 500px;
  & * {
    ${''/* border: 1px #CCC solid; */}
  }
`

const NameDiv = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  font-size: 2em;
`
const SubTitle = styled.div`
  grid-area: 1 / 2 / 2 /3;
  font-size: 1.0em;
  margin: 5px 10px;
  align-self: end;
`
const DescContainer = styled.div`
  grid-area: 2 / 1 / 3/ 4;
  padding: 10px 0;
  align-self: start;
`
const GithubButtonBox = styled.div`
  grid-area: 1 / 3 / 2 / 4;
  display: grid;
  grid-template-columns: 30px 50px;
  justify-items: center;
  align-items: center;
  justify-self: end;
  height: 40px;
  width: 80px;
  font-size: 1.2em;
  position: relative;
  & img {
    height: 25px;
    width: 25px;
    grid-area: 1 / 1 / 2 / 2;
  }
  & a {
    color: #666;
    grid-area: 1 / 2 / 2 / 3;
    text-decoration: none;
    transition: all .1s;
  }
  &:hover a {
    font-size: 1.05em;
  }
  &:active a {
    color: #333;
  }
`


const GithubButton = ({repo}) => {
  return (
    <GithubButtonBox>
      <img src={Github_icon}/>
      <a href={repo}>Repo</a>
    </GithubButtonBox>
  );
};

const TechList = styled.ul`
  grid-area: 3 / 1 / 4 / 4;
  padding-left: 25px;
  align-self: end;
  ${''/* justify-self: end; */}
  margin: 0;
  & li {
    float: left;
    display: inline;
    list-style: georgian;
    padding-right: 10px;
  }
`

// const NameWrapper = styled.div`
//   grid-row-start: 1;
//   width: 100%;
//   height: 50px;
//   margin: 0;
//   & p {
//     grid-area: Name;
//     vertical-align: middle;
//     margin: 0;
//     text-align: center;
//     font-weight: bold;
//     font-size: 2.0em;
//     display: inline-block;
//   }
// `
//non grid
// const NameWrapper = styled.div`
//   display: inline-block;
//   width: 100%;
//   height: 50px;
//   margin: 0;
//   & p {
//     vertical-align: middle;
//     margin: 0;
//     text-align: center;
//     font-weight: bold;
//     font-size: 2.0em;
//     display: inline-block;
//   }
// `
