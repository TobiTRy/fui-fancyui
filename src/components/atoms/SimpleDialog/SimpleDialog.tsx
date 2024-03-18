import { useEffect, useState } from 'react';
import { animated, useSpring } from '@react-spring/web';

import { StyledDialog } from './SimpleDialog.style';
import { TSimpleDialogWithHTMLAttrs } from '@/components/atoms/SimpleDialog/SimpleDialog.model';

// --------------------------------------------------------------------------- //
// -------  A container that can filld with everythin and acts as a dialog --- //
// --------------------------------------------------------------------------- //
export default function SimpleDialog(props: TSimpleDialogWithHTMLAttrs) {
  const { isOpen = false, children, themeType = 'primary', layer = 1, ...htmlProps } = props;

  const [shouldRender, setRender] = useState(isOpen);

  // Define the fade animation for the dialog
  const fade = useSpring({
    transform: isOpen ? 'translate(-50%, -50%)' : 'translate(-50%, -40%)',
    opacity: isOpen ? 1 : 0,
    onRest: () => setRender(isOpen),
  });

  // Update the shouldRender state variable when the isOpen prop changes
  useEffect(() => {
    if (isOpen) setRender(true);
  }, [isOpen]);

  // Render the SimpleDialog component with the appropriate props
  return shouldRender ? (
    <StyledDialog as={animated.div} role={'dialog'} style={fade} $themeType={themeType} $layer={layer} {...htmlProps}>
      {children}
    </StyledDialog>
  ) : null;
}
