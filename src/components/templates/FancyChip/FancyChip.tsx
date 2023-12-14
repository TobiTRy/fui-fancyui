import React from 'react';
import { css } from 'styled-components';

import { Chip } from '@/components/molecules/Chip';
import { TChipProps } from '@/components/molecules/Chip/Chip';
import { TSpacingPosition, generateSpacing } from '@/components/templates/FancyChip/utils/generateSpacings';
import { sizes } from '@/components/templates/FancyChip/sizeSettings';

type TFancyChip = {
  image?: string;
  label?: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  sizes?: keyof typeof sizes;
} & TChipProps;
export default function FancyChip(props: TFancyChip) {
  const { label, icon, image, onDelete, layer = 3, themeType, sizes, externalStyle, ...htmlProps } = props;

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

  console.log('getCalcPosition', getCalcPosition);

  return (
    <Chip
      themeType={themeType}
      layer={layer}
      externalStyle={css`
        gap: 4px;
        ${externalStyle}
        ${generateSpacing({ spacingPosition: getCalcPosition, size: sizes })}
      `}
      {...htmlProps}
    >
      {image && <Chip.Img src={image} />}
      {label ||
        (icon && (
          <Chip.Content>
            {icon && <Chip.Content.Icon>{icon}</Chip.Content.Icon>}
            <Chip.Content.Title bold={false} fontVariant="content">
              {label}
            </Chip.Content.Title>
          </Chip.Content>
        ))}
      {onDelete && <Chip.DeleteButton />}
    </Chip>
  );
}
