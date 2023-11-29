import styled from 'styled-components';

import { TTheme } from '@/Components/Interface/TTheme';

// Styled component for the search bar list
export const StyledSearchBarList = styled.div<{ theme: TTheme }>`
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  z-index: 100;
`;

// Styled component for the inner card of the search bar list
export const InnerCard = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  align-items: center;
  justify-content: center;
`;
