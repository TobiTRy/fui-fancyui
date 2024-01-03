import React from 'react';
import { css } from 'styled-components';

import { Chip } from '@/components/molecules/Chip';
import { TChipProps } from '@/components/molecules/Chip/Chip';
import { TSpacingPosition, generateSpacing } from '@/components/templates/FancyChip/utils/generateSpacings';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { TThemeTypesNotTransparent } from '@/types/TThemeTypesNotTransparent';

type TFancyChip = {
  image?: string;
  label?: string;
  onDelete?: () => void;
  icon?: React.ReactNode;
  size?: keyof typeof sizesSettings;
  textColor?: TThemeTypesNotTransparent;
} & TChipProps;
export default function FancyChip(props: TFancyChip) {
  const {
    label,
    icon,
    image,
    onDelete,
    layer = 3,
    themeType,
    size = 'sm',
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
      size={size}
      themeType={themeType}
      layer={layer}
      externalStyle={css`
        ${externalStyle}
        ${generateSpacing({ spacingPosition: getCalcPosition, size })}
        gap: 4px;
      `}
      {...htmlProps}
    >
      {image && <Chip.Img src={image} />}
      {(label || icon) && (
        <Chip.Content themeType={textColor}>
          {icon && <Chip.Content.Icon size={size}>{icon}</Chip.Content.Icon>}
          <Chip.Content.Title size={size} bold={false}>
            {label}
          </Chip.Content.Title>
        </Chip.Content>
      )}
      {onDelete && <Chip.DeleteButton size={size} onDelete={onDelete} />}
    </Chip>
  );
}
