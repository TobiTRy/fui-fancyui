import React from 'react';

import { StyledI, StyledTextDiv } from './ListDivider.style';
import FancyContent from '../../UI/Molecules/FancyContent/FancyContent';
import { IListDivider } from './ListDivider.model';

// --------------------------------------------------------------------------- //
// ------- A Divider that displays only a line or line with informations ----- //
// --------------------------------------------------------------------------- //
export default function ListDivider(props: IListDivider) {
  const { label, textAlignment = 'center', themeType, layer, bold, icon, noLine } = props;

  return (
    <>
      {/* Render a Seperator(Divider) with a optional label and icon  */}
      {label ? (
        <StyledTextDiv $textAlignment={textAlignment} $noLine={noLine} tabIndex={0} $themeType={themeType} $layer={layer}>
          <FancyContent>
            {label && (
              <FancyContent.Title fontVariant="inlineElement" bold={bold ?? false}>
                {label}
              </FancyContent.Title>
            )}
            {icon && <FancyContent.Icon>{icon}</FancyContent.Icon>}
          </FancyContent>
        </StyledTextDiv>
      ) : (
        // Render a Seperator(Divider) only a line
        <StyledI role="separator" />
      )}
    </>
  );
}
