import React from 'react';
import * as S from './style';
import OfferBar from '~/components/organisms/OfferBar';
import { useOfferData } from '~/data/OfferData';
import SearchBar from '~/components/organisms/SearchBar';
import { containAll } from '~/components/view/Main/helpers';
import { useFilters } from '~/data/Filters';


const Main = () => {
  const filters = useFilters().unshell;
  const createdOfferBars = useOfferData().all
    .filter(it => containAll(it.tags, filters))
    .map(({ id }) => <OfferBar key={id} id={id} />);

  return (
    <S.Wrapper>
      <S.Header />
      <SearchBar />
      {createdOfferBars}
    </S.Wrapper>
  );
};

export default Main;