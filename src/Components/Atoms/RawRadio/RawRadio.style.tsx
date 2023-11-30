import { styled } from 'styled-components';
import { TTheme } from '../../core/interface/TTheme';

export const RadioWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  flex-shrink: 0;
`;

export const HiddenRadio = styled.input.attrs({ type: 'radio' })`
  margin: 0;
  position: absolute;
  cursor: pointer;
  opacity: 1;
  background-color: transparent;
  z-index: 0;
  appearance: none;
  outline: none;
  width: 16px;
  height: 16px;
`;

export const StyledRadio = styled.span<{ checked: boolean; theme: TTheme }>`
  width: 16px;
  height: 16px;
  border: 2px solid;
  border-color: ${(props) => (props.checked ? props.theme.colors.accent[2] : props.theme.colors.primary[3])};
  background: ${(props) => (props.checked ? 'transparent' : props.theme.colors.primary[3])};
  border-radius: 50%;
  display: inline-block;
  position: relative;
  flex-shrink: 0;
  transition:
    background 0.2s ease,
    border-color 0.2s ease;

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: ${(props) => (props.checked ? props.theme.colors.accent[1] : 'transparent')};
    transition:
      background 0.2s ease,
      border-color 0.2s ease;
  }
`;
