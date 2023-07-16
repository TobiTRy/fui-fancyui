import React from 'react'

import FancyEditBar from '../../Components/UI/Organisms/FancyEditBar/FancyEditBar'
import FancButton from '../../Components/UI/Molecules/FancyButton/FancyButton'

export default function EditBarRoute() {
  const [isActive, setIsActive] = React.useState(false)

const openEditBarHandler = () => {
  setIsActive(!isActive)
}
  return (
    <div>
      <FancButton label='test' onClick={openEditBarHandler} />
      <FancyEditBar active={isActive} sectionType='sectionBox'/>
    </div>
  )
}
