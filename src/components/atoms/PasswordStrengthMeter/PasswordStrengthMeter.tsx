import { FancyBox } from '@/components/atoms/FancyBox';
import { TPasswordStrengthMeter } from '@/components/atoms/PasswordStrengthMeter/TPasswordStrengthMeter.model';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { calculatePasswordStrength } from '@/utils/functions/passwordStrengthCalculator';
import { StyledMeter } from './PasswordSrengthMeter.style';
import { useEffect, useMemo } from 'react';

export default function PasswordStrengthMeter(props: TPasswordStrengthMeter) {
  const {
    password,
    borderRadius = 'complete',
    borderRadiusBar = 'complete',
    layer = 2,
    themeType,
    height = 'xxs',
    padding,
    margin,
    notABar = false,
    compareWith,
    onChangeStrength,
  } = props;

  const passwordStrength = useMemo(() => {
    return calculatePasswordStrength(password, compareWith);
  }, [password, compareWith]);

  useEffect(() => {
    if (onChangeStrength) {
      onChangeStrength(passwordStrength);
    }
  }, [passwordStrength, onChangeStrength]);

  return (
    <FancyBox
      borderRadius={borderRadius}
      themeType={themeType}
      padding={padding}
      margin={margin}
      layer={layer}
      externalStyle={{ width: '100%', overflow: 'hidden' }}
    >
      {!notABar ? (
        <StyledMeter
          $borderRadius={borderRadiusBar}
          $height={height}
          low={33}
          min={0}
          high={66}
          optimum={100}
          value={passwordStrength}
          max={100}
        />
      ) : (
        <FancyBox
          as={'meter'}
          themeType={calcStengthInThemeType(passwordStrength)}
          externalStyle={{
            width: '100%',
            height: arrayToCssValues(height, 'spacing'),
            transition: 'background-color 0.4s ease-in-out',
          }}
        />
      )}
    </FancyBox>
  );
}

const calcStengthInThemeType = (strength: number): TUiColorsSystemMessage => {
  if (strength < 33) {
    return 'error';
  }
  if (strength < 66) {
    return 'warning';
  }
  return 'success';
};
