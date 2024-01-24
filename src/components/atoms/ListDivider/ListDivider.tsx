import { IListDivider } from './ListDivider.model';

import { FancyContent } from '@/components/molecules/FancyContent';
import { StyledI, StyledTextDiv } from './ListDivider.style';
import { sizeSettings } from './sizeSettings';

// --------------------------------------------------------------------------- //
// ------- A Divider that displays only a line or line with informations ----- //
// --------------------------------------------------------------------------- //
export default function ListDivider(props: IListDivider) {
  const { label, textAlignment = 'center', themeType, layer, bold, icon, noLine, size = 'md', ...htmlProps } = props;

  return (
    <>
      {/* Render a Seperator(Divider) with a optional label and icon  */}
      {label ? (
        <StyledTextDiv
          $textAlignment={textAlignment}
          $noLine={noLine}
          tabIndex={htmlProps.tabIndex ?? 0}
          $themeType={themeType}
          $layer={layer}
          {...htmlProps}
        >
          <FancyContent>
            {label && (
              <FancyContent.Title fontVariant={sizeSettings[size].fontVariant} bold={bold ?? false}>
                {label}
              </FancyContent.Title>
            )}
            {icon && <FancyContent.Icon size={sizeSettings[size].iconSize}>{icon}</FancyContent.Icon>}
          </FancyContent>
        </StyledTextDiv>
      ) : (
        // Render a Seperator(Divider) only a line
        <StyledI role="separator" {...htmlProps} />
      )}
    </>
  );
}
