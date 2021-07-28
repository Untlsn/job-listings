import React from 'react';
import * as S from './style';
import { OnlyID } from '~/types/only';
import { useOfferData } from '~/data/OfferData';

const CompanyName = ({ id }: OnlyID<number>) => {
  const data = useOfferData().getByID(id);
  const { new: isNew, featured } = data.booleans;
  const company = data.unshell.company;

  return (
    <S.Wrapper>
      <S.EmployerName>{company}</S.EmployerName>
      {isNew && <S.RoundPrompt $color='#5EA4A3'>new!</S.RoundPrompt>}
      {featured && <S.RoundPrompt $color='#2E3A3B'>featured</S.RoundPrompt>}
    </S.Wrapper>
  );
};

export default CompanyName;