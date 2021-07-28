import React from 'react';
import * as S from './style';
import photoSnap from '~/assets/images/photosnap.svg';
import OfferLeft from '~/components/molecules/OfferLeft';

const OfferBar = () => {
  const tags = ['frontend', 'senior', 'HTML', 'CSS', 'JavaScript'];
  const createdTags = tags.map(val => <S.Tag key={val}>{val}</S.Tag>);

  return (
    <S.Wrapper $selectBorder={true}>
      <S.SubWrapper>
        <S.Image src={photoSnap} />
        <OfferLeft />
      </S.SubWrapper>
      <S.SubWrapper>
        {createdTags}
      </S.SubWrapper>
    </S.Wrapper>
  );
};

export default OfferBar;