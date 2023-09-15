import { styled } from 'styled-components';
import { spacingPx } from '../../Design/design';
import { TUiColorsType } from '../../Design/color/designColor';

export const TitleArea = styled.div<{theme: TUiColorsType}>`
  color: ${({theme}) => theme.secondary[0]};
  margin-bottom: ${spacingPx.sm};
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  width: 100%;

  i {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 1px;
    border-radius: 50%;
    background-color: ${({theme}) => theme.accent[0]};
  }

  h4 {
    margin: ${spacingPx.sm} 0;
  }
`;
