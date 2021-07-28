import React from 'react';
import * as S from './style';
import { ImCross } from 'react-icons/im';
import { TagWightEx } from '~/components/atoms/TagWithEx/types';

const TagWithEx = ({ children, onClick }: TagWightEx) => {
  return (
    <S.Wrapper>
      <S.Tag>{children}</S.Tag>
      <S.TagEx onClick={() => onClick(children)}><ImCross size={12} /></S.TagEx>
    </S.Wrapper>
  );
};

export default TagWithEx;