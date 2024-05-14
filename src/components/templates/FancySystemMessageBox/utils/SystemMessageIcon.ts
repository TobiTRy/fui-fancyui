import { TSystemMessageTypes } from '@/types/TUiColorsSystemMessage';
import { SVGStopSign } from '@/components/icons/SVGStopSign';
import { SVGInfoSign } from '@/components/icons/SVGInfoSign';
import { SVGWarningSign } from '@/components/icons/SVGWarningSign';
import { SVGCircleCheck } from '@/components/icons/SVGCircleCheck';
import { TUiColorsNotTransparent } from '@/types/TUiColorsNotTransparent';

type TSystemMessageIcon = Record<TSystemMessageTypes, () => JSX.Element>;

export const SystemMessageIcon: TSystemMessageIcon = {
  success: SVGCircleCheck,
  error: SVGStopSign,
  info: SVGInfoSign,
  warning: SVGWarningSign,
};

// Function to get the icon component or a fallback
export function getIcon(themeType: TUiColorsNotTransparent) {
  const getIconTypes = Object.keys(SystemMessageIcon);

  const checkIcon = getIconTypes.includes(themeType);
  const iconType = checkIcon ? (themeType as TSystemMessageTypes) : 'error';

  if (checkIcon) {
    return SystemMessageIcon[iconType];
  }

  return SystemMessageIcon['error'];
}
