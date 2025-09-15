'use client';

import { css } from 'styled-components';

import { Chip } from '@/components/molecules/Chip';
import { TFancyChipWithFancyPillAttrs } from '@/components/templates/FancyChip/TFancyChip.model';
import { TSpacingPosition, generateSpacing } from '@/components/templates/FancyChip/utils/generateSpacings';

// --------------------------------------------------------------------------- //
// --------------- The FancyChip with predefined Structure ------------------- //
// --------------------------------------------------------------------------- //
export default function FancyChip(props: TFancyChipWithFancyPillAttrs) {
  const {
    label,
    icon,
    image,
    layer = 2,
    themeType,
    sizeC = 'md',
    onDelete,
    externalStyle,
    textColor,
    ...htmlProps
  } = props;

  // Define a function to calculate the spacing position for the chip
  const clacPosition = (): TSpacingPosition => {
    if (icon && onDelete) return 'booth';
    if (image && onDelete) return 'right';
    if (image) return 'right';
    if (onDelete) return 'booth';
    if (icon) return 'booth';
    return 'booth';
  };

  // Calculate the spacing position for the chip
  const getCalcPosition = clacPosition();

  return (
    <Chip
      sizeC={sizeC}
      themeType={themeType}
      layer={layer}
      externalStyle={css`
        ${externalStyle}
        ${generateSpacing({ spacingPosition: getCalcPosition, sizeC })}
        gap: 4px;
      `}
      {...htmlProps}
    >
      {image && <Chip.Img>{image}</Chip.Img>}
      {(label || icon) && (
        <Chip.Content themeType={textColor} gapBetweenIcon="xxs">
          {icon && (
            <Chip.Content.Icon noPadding sizeC={sizeC}>
              {icon}
            </Chip.Content.Icon>
          )}
          <Chip.Content.Title sizeC={sizeC} fontWeight={'normal'}>
            {label}
          </Chip.Content.Title>
        </Chip.Content>
      )}
      {onDelete && <Chip.DeleteButton sizeC={sizeC} onDelete={onDelete} />}
    </Chip>
  );
}
