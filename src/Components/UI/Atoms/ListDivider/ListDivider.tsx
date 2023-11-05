import React from 'react';
import { css, styled } from 'styled-components';
import { TUiColorsType } from '../../Design/color/designColor';
import { TLayer } from '../../Design/color/generateColorSteps';
import { Typography } from '../Typography';

const StyledI = styled.div`
  height: 1px;
  background-color: #656565;
  margin: 8px 0;
`;

const StyledTextDiv = styled.div<{ $align?: IListDivider['textAlignment'] }>`
  display: flex;
  color: #656565;
  justify-content: center;
  align-items: center;
  margin: 8px 0;
  line-height: 0;

  span {
    padding: 0 12px;
  }


  ${({ $align }) =>
    ($align === 'right' || $align === 'center') &&
    css`
      &:before {
        content: ' ';
        margin-left: 12px;
        width: 100%;
        height: 1px;
        background-color: #656565;
      }
    `}

  ${({ $align }) =>
    ($align === 'left' || $align === 'center') &&
    css`
      &:after {
        content: ' ';
        width: 100%;
        margin-right: 12px;
        height: 1px;
        background-color: #656565;
      }
    `}
`;

type IListDivider = {
  label: string;
  themeType?: TUiColorsType;
  layer?: TLayer;
} & {
  label?: string;
  textAlignment?: 'left' | 'center' | 'right';
};

export default function ListDivider(props: IListDivider) {
  const { label = 'hhsd', textAlignment = 'center' } = props;

  return (
    <>
      {label ? (
        <StyledTextDiv role="separator" $align={textAlignment}>
          <Typography type="inlineElement">{label || 'MOoiin'}</Typography>
        </StyledTextDiv>
      ) : (
        <StyledI role="separator"></StyledI>
      )}
    </>
  );
}
