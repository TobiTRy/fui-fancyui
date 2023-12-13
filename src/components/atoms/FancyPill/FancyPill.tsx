import { IFancyPillProps } from '@/components/atoms/FancyPill/FancyPill.model';
import { StyledFancyPill } from '@/components/atoms/FancyPill/FancyPill.styled';

// --------------------------------------------------------------------------- //
// ------------  A Bar that can usesd for for the most components ------------ //
// --------------------------------------------------------------------------- //
export default function FancyPill<T extends React.ElementType = 'div'>(props: IFancyPillProps<T>) {
  const { layer, themeType, outlined, outlinedBackgroundStrength, externalStyle, as, ...htmlProps } = props;

  return (
    <StyledFancyPill
      as={as || 'div'}
      $layer={layer}
      $outlined={outlined}
      $themeType={themeType}
      $externalStyle={externalStyle}
      $outlinedBackgroundStrength={outlinedBackgroundStrength}
      {...htmlProps}
    >
      {props.children}
    </StyledFancyPill>
  );
}
