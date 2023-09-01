import { styled } from 'styled-components';
import { spacingPx, uiColors } from '../../Design/design';

export const TitleArea = styled.div`
  color: ${uiColors.primary.contrast};
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
    background-color: ${uiColors.accent.main};
  }

  h4 {
    margin: ${spacingPx.sm} 0;
  }
`;
