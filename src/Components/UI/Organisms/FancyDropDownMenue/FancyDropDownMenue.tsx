import React, { useEffect, useState } from 'react';

import FancyUL, {IFancyUL} from '../../Molecules/FancyDropDownUL/FancyDropDownUL';
import UseDelay from '../../HelperFunctions/hooks/UseDelay';


// --------------------------------------------------------------------------- //
// ------------ The main component that renders the dropdown menu ------------ //
// --------------------------------------------------------------------------- //
interface IFancyDropDownMenue extends IFancyUL {
  isOpen?: boolean;
}
export default function FancyDropDownMenue(props:IFancyDropDownMenue) {
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
  ) : null
}