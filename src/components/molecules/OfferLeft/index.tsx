import React from 'react';
import * as S from './style';
import { BsDot } from 'react-icons/all';

const OfferLeft = () => {
  return (
    <S.Wrapper>
      <S.Flex>
        <S.EmployerName>Photosnap</S.EmployerName>
        <S.RoundPrompt $color='#5EA4A3'>new!</S.RoundPrompt>
        <S.RoundPrompt $color='#2E3A3B'>featured</S.RoundPrompt>
      </S.Flex>
      <S.JobTitle>Senior Frontend Developer</S.JobTitle>
      <S.DataBar>
        <span>1d ago</span>
        <BsDot />
        <span>Full Time</span>
        <BsDot />
        <span>USA only</span>
      </S.DataBar>
    </S.Wrapper>
  );
};

export default OfferLeft;