import { css } from 'styled-components';

import { FancyBox } from '@/components/atoms/FancyBox';
import { TListBoxItemProps } from '@/components/molecules/ListBox/ListBoxItem/TListBoxItem.model';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { sizeSettings } from '../sizeSettings';
import { generateBackgroundColor } from '@/design/designFunctions/generateItemTheme/utils/generateBackgroundColor';

// --------------------------------------------------------------------------- //
// ------- The List Item for The ListBox to handle the distances -------- //
// --------------------------------------------------------------------------- //
function ListBoxItem(props: TListBoxItemProps) {
  const { children, externalStyle, sizeC, layer = 0, themeType = 'transparent', hoverLayer } = props;

  return (
    <FancyBox
      as={'li'}
      padding={sizeC ? arrayToCssValues(sizeSettings[sizeC].padding, 'spacing') : undefined}
      themeType={themeType}
      layer={layer}
      externalStyle={css`
        list-style: none;
        ${externalStyle}

        &:hover {
          background-color: ${generateBackgroundColor({ $themeType: themeType, $layer: hoverLayer })};
        }

        transition: background-color 0.3s;
      `}
    >
      {children}
    </FancyBox>
  );
}

// This convention is used to allow the Storybook to render the component
ListBoxItem.displayName = 'ListBox.Item';
export { ListBoxItem };
