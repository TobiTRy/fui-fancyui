import { FancyBox } from '@/components/atoms/FancyBox';
import { TPasswordStrengthMeter } from '@/components/atoms/PasswordStrengthMeter/TPasswordStrengthMeter.model';
import { arrayToCssValues } from '@/design/designFunctions/arrayToCssValues';
import { TUiColorsSystemMessage } from '@/types/TUiColorsSystemMessage';
import { calculatePasswordStrength } from '@/utils/functions/passwordStrengthCalculator';
import { StyledMeter } from './PasswordSrengthMeter.style';

export default function PasswordStrengthMeter(props: TPasswordStrengthMeter) {
  const {
    password,
    borderRadius = 'complete',
    borderRadiusBar = 'complete',
    layer = 2,
    themeType,
    height = 'xxs',
    padding,
    notABar = false,
  } = props;

  const passwordStrength = calculatePasswordStrength(password);

  const calcStengthInThemeType = (strength: number): TUiColorsSystemMessage => {
    if (strength < 33) {
      return 'error';
    }
    if (strength < 66) {
      return 'warning';
    }
    return 'success';
  };

  return (
    <FancyBox
      borderRadius={borderRadius}
      themeType={themeType}
      padding={padding}
      layer={layer}
      externalStyle={{ width: '100%', overflow: 'hidden' }}
    >
      {!notABar ? (
        <StyledMeter
          $borderRadius={borderRadiusBar}
          low={33}
          $height={height}
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
