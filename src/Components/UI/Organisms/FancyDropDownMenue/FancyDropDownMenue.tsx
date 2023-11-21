import React, { useEffect, useState } from 'react';

import FancyUL, { IFancyUL } from '../../Molecules/FancyDropDownUL/FancyDropDownUL';
import UseDelay from '../../HelperFunctions/hooks/UseDelay';
import { TLayer } from '@/Components/UI/Interface/TLayer';
import { TUiColors } from '@/Components/UI/Interface/TUiColors';

// --------------------------------------------------------------------------- //
// ------------ The main component that renders the dropdown menu ------------ //
// --------------------------------------------------------------------------- //
interface IFancyDropDownMenue extends IFancyUL {
  isOpen?: boolean;
  themeType?: TUiColors;
  layer?: TLayer;
}
export default function FancyDropDownMenue(props: IFancyDropDownMenue) {
  const { isOpen } = props;
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [fristRender, setFristRender] = useState(false);

  // This useEffect hook sets the fristRender state to true after the component mounts
  useEffect(() => {
    setFristRender(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setIsOpenState(true);
    } else {
      setIsOpenState(false);
    }
  }, [isOpen]);

  // This component returns the FancyUL component wrapped in a UseDelay component
  return fristRender ? (
    <UseDelay delay={600} externalStateBool={isOpenState}>
      <FancyUL isOpen={isOpen} {...props} />
    </UseDelay>
  ) : null;
}
