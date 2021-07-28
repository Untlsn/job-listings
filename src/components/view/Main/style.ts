import styled from 'styled-components';
import bgHeaderDesktop from '~/assets/images/bg-header-desktop.svg';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;
`;

export const Header = styled.header`
  background: #5da4a4 url("${bgHeaderDesktop}");
  height: 150px;
  width: 100vw;
`;