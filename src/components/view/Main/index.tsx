import React from 'react';
import * as S from './style';
import OfferBar from '~/components/organisms/OfferBar';

const Main = () => {
  return (
    <S.Wrapper>
      <S.Header />
      <OfferBar />
      <OfferBar />
      <OfferBar />
    </S.Wrapper>
  );
};

export default Main;