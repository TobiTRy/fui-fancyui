import React from 'react'

import Card from '../../Components/UI/Atoms/Card/Card'

export default function CradRoute() {
  return (
    <section style={{height: '500px'}}>
      <Card />

      <div style={{height: '200px', width: '300px'}}>

        <Card height='auto' radius='small'>
          <h1>Hello</h1>
          <h1>World</h1>
          <h1>World</h1>
          <h1>World</h1>
          <h1>World</h1>
          <h1>World</h1>
          <h1>World</h1>
        </Card>
      </div>
    </section>
  )
}
