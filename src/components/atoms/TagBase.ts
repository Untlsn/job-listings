import styled from 'styled-components';

const TagBase = styled.button`
  border: none;
  outline: none;
  height: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  border-radius: 5px;
  font-weight: bold;
  background-color: #EDF6F5;
  text-transform: capitalize;
  color: #749B98;
  
  &:hover { 
    cursor: pointer;
  }
`;

export default TagBase;