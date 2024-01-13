import styled, { css } from 'styled-components';

type TgenerateInputWrapperStyles = {
  hasNumberInput?: boolean;
};
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

  .Test {
    margin-bottom: 4px;
  }
`;
