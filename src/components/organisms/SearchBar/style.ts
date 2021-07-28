import styled from 'styled-components';
import TagBase from '~/components/atoms/TagBase';

export const Wrapper = styled.div<{ $empty: boolean }>`
  width: min(1100px, 90vw);
  position: absolute;
  padding: 0 30px;
  top: 112px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: #5EA4A340 0 30px 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  visibility: ${({ $empty }) => $empty && 'hidden'};
`;

export const Flex = styled.div`
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding: 25px 0;
`;

export const ClearButton = styled(TagBase)`
  font-size: 18px;
  color: #838d8c;

  &:hover {
    text-decoration: underline;
    color: #749B98;
  }
`;