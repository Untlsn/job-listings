import React from 'react';
import * as S from './style';
import { OnlyID } from '~/types/only';
import { useOfferData } from '~/data';
import DataBar from '~/components/atoms/DataBar';
import CompanyName from '~/components/atoms/CompanyName';

const OfferLeft = ({ id }: OnlyID<number>) => {
  const position = useOfferData().getByID(id).unshell.position;

  return (
    <S.Wrapper>
      <CompanyName id={id} />
      <S.JobTitle>{position}</S.JobTitle>
      <DataBar id={id} />
    </S.Wrapper>
  );
};

export default OfferLeft;