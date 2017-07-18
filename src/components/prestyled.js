import styled from 'styled-components';

export const CenterWrapper = styled.div`
  width: 100%;
  height: ${props => props.height? props.height: '100%'};
  display: flex;
  flex-direction: ${props => props.col? 'column':'row'};
  align-items: center;
  justify-content: center;
`
