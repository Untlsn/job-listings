import React from 'react';
import * as S from './style';
import { useOfferData } from '~/data/OfferData';
import { OnlyID } from '~/types/only';
import { BsDot } from 'react-icons/all';

const DataBar = ({ id }: OnlyID<number>) => {
  const { postedAt, contract, location } = useOfferData().getByID(id).workData;

  return (
    <S.Wrapper>
      <span>{postedAt}</span>
      <BsDot />
      <span>{location}</span>
      <BsDot />
      <span>{contract}</span>
    </S.Wrapper>
  );
};

export default DataBar;