import React from 'react';

import styled from 'styled-components';

import brakePoints from '../../Design/brakePoints';
import FancyButton from '../FancyButton/FancyButton';
import  IModalBottomLine, { IBottomLineButton } from './ModalBottomLine.model';



const StyledModalBottomLine = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;


  // for the Desktop view align the buttons next to each other
  @media (min-width: ${brakePoints.lg + 'px'}) {
    flex-direction: row-reverse;
    justify-content: flex-start;
  }
`;

// --------------------------------------------------------------------------- //
// ----------------- The main Bottomline for the Modal ----------------------- //
// --------------------------------------------------------------------------- //
export default function ModalBottomLine({ buttons, component }: IModalBottomLine) {
  return buttons ? (
    <StyledModalBottomLine>
      {buttons.map((button: IBottomLineButton, index) => {
        return (
          <FancyButton
            key={index}
            label={button.title}
            outlined={!button.secondaryButton ? true : false}
            wide={false}
            onClick={button.onClick}
            disabled={button.disabled}
          />
        );
      })}
    </StyledModalBottomLine>
  ) : (
    <>{component}</>
  );
}
