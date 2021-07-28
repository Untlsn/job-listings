import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`;

export const JobTitle = styled.div`
  font-weight: bold;
  color: #2E3A3B;
  
  
  &:hover { 
    cursor: pointer;
    color: #749B98;
  }
`;