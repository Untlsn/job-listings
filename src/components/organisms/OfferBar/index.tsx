import React from 'react';
import * as S from './style';
import OfferLeft from '~/components/molecules/OfferLeft';
import { OnlyID } from '~/types/only';
import { useOfferData } from '~/data';

const OfferBar = ({ id }: OnlyID<number>) => {
  const data = useOfferData().getByID(id);
  const createdTags = data.tags
    .map(val => <S.Tag key={val}>{val}</S.Tag>);
  const imgSrc = data.unshell.logo;

  return (
    <S.Wrapper $selectBorder={true}>
      <S.SubWrapper>
        <S.Image src={imgSrc} />
        <OfferLeft id={id} />
      </S.SubWrapper>
      <S.SubWrapper>
        {createdTags}
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default OfferBar;