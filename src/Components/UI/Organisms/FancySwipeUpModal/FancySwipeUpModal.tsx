import React from 'react';

import SwipeUpModal from '../../Molecules/SwipeUpModal/SwipeUpModal';
import FancyPortal from '../../HelperFunctions/FancyPortal';

import { ISwipeUpModal } from '../../Molecules/SwipeUpModal/ISwipeUpModal.model';

// --------------------------------------------------------------------------- //
// ----------- The main FancySwipeUpModal to handle all everything ----------- //
// --------------------------------------------------------------------------- //
interface IFancySwipeUpModal {
  appendToDomID?: string;
}
export default function FancySwipeUpModal(props: IFancySwipeUpModal & ISwipeUpModal) {
  const { appendToDomID, ...SwipeUpModalProps } = props;
  return (
    <FancyPortal appendToID={appendToDomID}>
      {/* The Mobile Modal Component  */}
      <SwipeUpModal {...SwipeUpModalProps} />
    </FancyPortal>
  );
}
