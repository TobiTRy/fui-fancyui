import { useState } from 'react';

import { Button, Ring, Wrapper } from './SpeedDailButton.style';
import { sizeSettings } from './sizeSettings';

import { TFloatingButton } from '@/components/atoms/FloatingButton/TFloatingButton.model';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { VisuallyHidden } from '@/components/atoms/VisuallyHidden';

export default function FloatingButton(props: TFloatingButton) {
  const {
    isOpen,
    onClick,
    icon,
    size = 'sm',
    type = 'switch',
    label,
    layer = 0,
    outline,
    themeType = 'accent',
  } = props;
  const [isOpened, setIsOpened] = useState(true);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleClick();
    }
  };

  const handleClick = () => {
    setIsOpened(!isOpened);
    onClick();
  };

  return (
    <Wrapper $size={size}>
      <Button
        $size={size}
        $isOpen={isOpen}
        $themeType={themeType}
        $layer={layer}
        $outline={outline}
        onClick={handleClick}
        onKeyDown={handleKeyDown}
        aria-expanded={isOpen}
        aria-pressed={type === 'switch' ? isOpened : undefined}
        aria-label={label}
        role={type === 'switch' ? 'switch' : 'button'}
        tabIndex={0}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        <FancySVGAtom sizeC={sizeSettings[size].iconSize} aria-hidden="true">
          {icon}
        </FancySVGAtom>
      </Button>
      {type === 'switch' && (
        <Ring $themeType={themeType} $layer={layer} $size={size} $isOpen={isOpened} aria-hidden="true" />
      )}
    </Wrapper>
  );
}
