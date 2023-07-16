import React, { useEffect, useState } from 'react';

import { useDropDownMenueModuleStore } from './FancyDropDownMenue.state';

import FancyUL, {IFancyUL} from '../../Molecules/FancyDropDownUL/FancyDropDownUL';
import UseDelay from '../../Atoms/functions/hooks/UseDelay';


// --------------------------------------------------------------------------- //
// ------------ The main component that renders the dropdown menu ------------ //
// --------------------------------------------------------------------------- //
export default function FancyDropDownMenue(props:IFancyUL) {
  const isOpen = useDropDownMenueModuleStore((state) => state.isOpen);
  const [fristRender, setFristRender] = useState(false);

  // This useEffect hook sets the fristRender state to true after the component mounts
  useEffect(() => {
    setFristRender(true);
  }, []);

  // This component returns the FancyUL component wrapped in a UseDelay component
  return fristRender ? (
    <UseDelay delay={600} externalStateBool={isOpen}>
      <FancyUL isOpen={isOpen} {...props} />
    </UseDelay>
  ) : null
}