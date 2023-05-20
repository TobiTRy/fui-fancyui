import React, { useEffect, useState } from 'react'



interface IUseDelay {
  children: React.ReactNode;
  externalStateBool: boolean;
  delay?: number;
}


export default function UseDelay({children, externalStateBool ,delay}: IUseDelay) {
    const [mountState, setMountState] = useState<boolean>()
    
    //ext state for the animation 
    //this stets the state for the mount
    const delayHandler = () => {
      if(externalStateBool) {
        setMountState(true)
      } else {
        setTimeout(() => {setMountState(prev => !prev)}, delay || 250)
      }
    }

    useEffect(() => {
      delayHandler()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [externalStateBool])


  return (
    <>
      {(mountState)  ? children : null}
    </>
  )
}
