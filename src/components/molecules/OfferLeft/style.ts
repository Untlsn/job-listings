import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100px;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
`;
export const Flex = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
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

export const JobTitle = styled.div`
  font-weight: bold;
  color: #2E3A3B;
`;

export const DataBar = styled(Flex)`
  color: #969696;
`;