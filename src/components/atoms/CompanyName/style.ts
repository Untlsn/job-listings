import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;
`;

export const EmployerName = styled.span`
  color: #5EA4A3;
  font-size: 14px;
  font-weight: bold;
`;
export const RoundPrompt = styled.div<{ $color: string }>`
  height: 25px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  font-size: 14px;
  background-color: ${({ $color }) => $color};
  text-transform: uppercase;
  color: white;
`;