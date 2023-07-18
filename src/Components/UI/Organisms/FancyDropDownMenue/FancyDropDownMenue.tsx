import React, { useEffect, useState } from 'react';

import { useDropDownMenueModuleStore } from './FancyDropDownMenue.state';

import FancyUL, {IFancyUL} from '../../Molecules/FancyDropDownUL/FancyDropDownUL';
import UseDelay from '../../Atoms/functions/hooks/UseDelay';


// --------------------------------------------------------------------------- //
// ------------ The main component that renders the dropdown menu ------------ //
// --------------------------------------------------------------------------- //
interface IFancyDropDownMenue extends IFancyUL {
  isOpen?: boolean;
}
export default function FancyDropDownMenue(props:IFancyDropDownMenue) {
  const { isOpen } = props;
  const isModalOpen = useDropDownMenueModuleStore((state) => state.isOpen);
  const setModalOpen = useDropDownMenueModuleStore((state) => state.open);
  const setModalClose = useDropDownMenueModuleStore((state) => state.close);

  const [fristRender, setFristRender] = useState(false);

  // This useEffect hook sets the fristRender state to true after the component mounts
  useEffect(() => {
    setFristRender(true);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setModalOpen();
    } else {
      setModalClose();
    }
  }, [isOpen]);

  // This component returns the FancyUL component wrapped in a UseDelay component
  return fristRender ? (
    <UseDelay delay={600} externalStateBool={isModalOpen}>
      <FancyUL isOpen={isOpen} {...props} />
    </UseDelay>
  ) : null
}