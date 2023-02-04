import React from 'react'
import '../../Design/colorVariables.css'

import styled from 'styled-components';

interface IFancyButton {
  primary?: boolean;
  size?: 'small' | 'medium' | 'large';
  label?: string;
  outlined?: boolean;  
  onClick?: () => void;
}



const Button = styled.button`
  width: ${({size}: IFancyButton) =>
    size === 'small' && '80px' ||
    size === 'medium' && '120px' ||
    size === 'large' && '100%'
   };


  background-color: var(--main-bg-color);
`

//rounded?

export default function FancyButton({
  primary,
  label,
  outlined,
  ...props
}: IFancyButton) {


  return (
    <Button 
      type='button' 
      {...props}>
        {label}
    </Button>
  )
}