import styled from 'styled-components';
import TagBase from '~/components/atoms/TagBase';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Tag = styled(TagBase)`
  border-radius: 5px 0 0 5px;
`;

export const TagEx = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 25px;
  width: 25px;
  border-radius: 0 5px 5px 0;
  background-color: #5ca8a7;
  color: #fff;
  &:hover { 
    cursor: pointer;
    background-color: #293a39;
  }
`;