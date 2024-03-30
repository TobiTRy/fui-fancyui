import styled, { css } from 'styled-components';

type TgenerateInputWrapperStyles = {
  hasNumberInput?: boolean;
};
// eslint-disable-next-line react-refresh/only-export-components
export const generateInputWrapperStyles = ({ hasNumberInput }: TgenerateInputWrapperStyles) => {
  if (hasNumberInput) {
    return css`
      padding: 2px 2px 2px 8px;
    `;
  }

  return css`
    padding: 2px 8px;
  `;
};

export const InputElementWrapper = styled.div`
  display: flex;
  align-items: end;
  gap: 8px;
`;
