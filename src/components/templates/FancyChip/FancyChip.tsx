import { css } from 'styled-components';

import { Chip } from '@/components/molecules/Chip';
import { sizesSettings } from '@/components/molecules/Chip/sizeSettings';
import { TFancyChip } from '@/components/templates/FancyChip/TFancyChip.model';
import { TSpacingPosition, generateSpacing } from '@/components/templates/FancyChip/utils/generateSpacings';

// --------------------------------------------------------------------------- //
// --------------- The FancyChip with predefined Structure ------------------- //
// --------------------------------------------------------------------------- //
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
      {image && <Chip.Img>{image}</Chip.Img>}
      {(label || icon) && (
        <Chip.Content themeType={textColor}>
          {icon && <Chip.Content.Icon size={sizesSettings[size].iconSize}>{icon}</Chip.Content.Icon>}
          <Chip.Content.Title size={size} fontWeight={'normal'}>
            {label}
          </Chip.Content.Title>
        </Chip.Content>
      )}
      {onDelete && <Chip.DeleteButton size={size} onDelete={onDelete} />}
    </Chip>
  );
}
