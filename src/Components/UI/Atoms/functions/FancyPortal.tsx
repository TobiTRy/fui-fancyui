import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';

interface PortalProps {
  children: React.ReactNode;  // children to be rendered in the portal
  appendToID?: string;  // optional ID of the element to append the portal to
}

const FancyPortal: React.FC<PortalProps> = ({children, appendToID}) => {
  // Create a div to render the portal into
  const el = useRef(document.createElement('div'));

  useEffect(() => {
    // Get the target container - with ID `appendToID`, if provided,
    // or the document body if not
    const targetContainer = appendToID ? document.getElementById(appendToID) : document.body;

    // If we didn't find a target container, throw an error
    if (!targetContainer) {
      throw new Error(`Could not find container with ID: "${appendToID}"`);
    }

    // Append the div to the target container
    targetContainer.appendChild(el.current);

    // Cleanup function to be run when component unmounts - remove the div from the target container
    return () => {
      targetContainer.removeChild(el.current);
    }
  }, [appendToID]);

  // Create a portal that renders the children into `el.current`
  return ReactDOM.createPortal(
    children,
    el.current
  );
};

export default FancyPortal;