import React from 'react'

import HeaderContainer from '../../Components/UI/Atoms/HeaderContainer/HeaderContainer'

export default function HeaderRoute() {
  return (
    <section>
      <HeaderContainer title="Fancy Header" links={['Home', 'About', 'Contact']} />
    </section>
  )
}
