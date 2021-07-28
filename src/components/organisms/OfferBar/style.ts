import styled, { css } from 'styled-components';
import TagBase from '~/components/atoms/TagBase';

export const Wrapper = styled.div<{ $selectBorder: boolean }>`
  width: min(1100px, 90vw);
  height: 150px;
  border-radius: 5px;
  box-shadow: #5EA4A340 0 30px 20px 0;
  display: flex;
  padding: 0 30px;
  justify-content: space-between;

  ${({ $selectBorder }) => $selectBorder && css`
    position: relative;
    &::after {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 5px;
      border-radius: 5px 0 0 5px;
      background-color: #5EA4A3;
    }
  `}
`;
export const Image = styled.img.attrs({ alt: '' })`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const SubWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const Tag = styled(TagBase)`
  &:hover {
    background-color: #749B98;
    color: #EDF6F5;
  }
`;