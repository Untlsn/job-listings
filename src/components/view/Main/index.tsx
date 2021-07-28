import React from 'react';
import * as S from './style';
import OfferBar from '~/components/organisms/OfferBar';
import { useOfferData } from '~/data';

const Main = () => {
  const createdOfferBars = useOfferData().ids
    .map(id => <OfferBar key={id} id={id} />);

  return (
    <S.Wrapper>
      <S.Header />
      {createdOfferBars}
    </S.Wrapper>
  );
};

export default Main;