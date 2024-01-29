import { css } from 'styled-components';

import { LoadingSVGArrows } from '@/components/atoms/LoadingSVGArrows';
import { Button } from '@/components/molecules/Button';
import { FancyContent } from '@/components/molecules/FancyContent';
import { generateFancyButton } from './FancyButton.style';

import { IButton, IButtonProps } from '@/components/molecules/Button/Button.model';
import { IFancyButtonProps } from '@/components/organisms/FancyButton/TFancyButton.model';
import { leftRightCenterToFlexJustify } from '@/design/designFunctions/leftRightCenterToFlexJustify';
import { sizeSettings } from '@/components/organisms/FancyButton/sizeSettings';

// --------------------------------------------------------------------------- //
// ---------- The Fancy Button has a bit more options than another  ---------- //
// --------------------------------------------------------------------------- //
type IFancyButton = IFancyButtonProps & IButton;
export default function FancyButton(props: IFancyButton) {
  const {
    icon,
    label,
    isLoading,
    iconAlign,
    sizeC = 'md',
    align = 'center',
    externalStyle,
    oneToOne,
    fontVariant,
    gap,
    ...buttonProps
  } = props;

  const generateFancyStyle = generateFancyButton({
    $size: sizeC,
    $oneToOne: oneToOne || (Boolean(!label) && Boolean(icon)),
    $justifyContent: leftRightCenterToFlexJustify[align ?? 'center'],
  });

  // handle icon alignment
  const alignIcon = iconAlign === 'left' ? 'row' : 'row-reverse';

  return (
    <Button
      sizeC={sizeC}
      externalStyle={css`
        ${generateFancyStyle};
        ${externalStyle};
      `}
      {...(buttonProps as IButtonProps)}
    >
      <FancyContent direction={alignIcon} gapBetweenIcon={gap}>
        {label && (
          <FancyContent.Title size={sizeC ?? 'md'} themeType={buttonProps.textColor}>
            {label}
          </FancyContent.Title>
        )}
        {(isLoading || icon) && (
          <FancyContent.Icon>
            {isLoading ? <LoadingSVGArrows isLoading={isLoading} size={sizeC} /> : icon}
          </FancyContent.Icon>
        )}
      </FancyContent>
    </Button>
  );
}
