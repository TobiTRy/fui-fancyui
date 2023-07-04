import React, { useEffect, createElement, useState } from 'react';
import ReactDOM from 'react-dom';



// --------------------------------------------------------------------------- //
// ------ The Portal is use to append Components to other HTML ELements ------ //
// --------------------------------------------------------------------------- //
interface IFancyPortal {
  children: React.ReactNode;
  appendToID?: string;
  WrapperComponent?: React.ElementType;
}
export function FancyPortal({ children, appendToID, WrapperComponent }: IFancyPortal) {
  const [targetContainer, setTargetContainer] = useState<Element | null>(null);

  useEffect(() => {
    // appendToID is optional, if not provided, append to body when id is provided, append it to the element with the id
    const newTargetContainer = appendToID ? document.getElementById(appendToID) : document.body;

    // If no container was found, throw an error
    if (!newTargetContainer) {
      throw new Error(`Could not find container with ID: "${appendToID}"`);
    }

    setTargetContainer(newTargetContainer);

    return () => {
      setTargetContainer(null);
    };
  }, [appendToID, children]);

  // If a WrapperComponent is provided, wrap the children
  const content = WrapperComponent ? createElement(WrapperComponent, {}, children) : children;

  // Create a portal that renders the content into the target container
  return targetContainer ? ReactDOM.createPortal(content, targetContainer) : null;
}

export default FancyPortal;