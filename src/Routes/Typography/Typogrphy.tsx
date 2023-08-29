
import React from 'react'
import Typography from '../../Components/UI/Atoms/Typography/Typography'

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper'

export default function Typogrphy() {
  return (
    <DesignWrapper>
      <DesignArea title='Typography'>
        <div style={{flexDirection: 'column',}}>

          <Typography type='h1'>h1. Heading Lorem ipsum dolor sit amet, </Typography>
          <Typography type='h1'>h1. Heading Heading Lorem ipsum dolor sit amet,</Typography>
          <Typography type='h2'>h2. Headin Heading Lorem ipsum dolor sit amet, </Typography>
          <Typography type='h3'>h3. Heading Heading Lorem ipsum dolor sit amet, </Typography>
          <Typography type='h4'>h4. Heading Heading Lorem ipsum dolor sit amet, </Typography>
          <Typography type='h5'>h5. Heading Heading Lorem ipsum dolor sit amet, </Typography>
          <Typography type='h6'>h6. Heading Heading Lorem ipsum dolor sit amet, </Typography>
          <Typography type='button'>button. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Typography type='content'>content. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>
          <Typography type='smText' weight='bold'>smText. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur</Typography>

        </div>

      </DesignArea>
    </DesignWrapper>
  )
}
