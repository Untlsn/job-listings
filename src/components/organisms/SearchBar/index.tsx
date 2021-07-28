import React from 'react';
import * as S from './style';
import TagWithEx from '~/components/atoms/TagWithEx';
import { useFilters } from '~/data/Filters';

const SearchBar = () => {
  const { unshell: filters, remove, removeAll } = useFilters();

  const createdFilters = filters.map(
    filter => <TagWithEx key={filter} onClick={remove}>{filter}</TagWithEx>,
  );


  return (
    <S.Wrapper $empty={!createdFilters.length}>
      <S.Flex>
        {createdFilters}
      </S.Flex>
      <S.ClearButton onClick={removeAll}>clear</S.ClearButton>
    </S.Wrapper>
  );
};

export default SearchBar;