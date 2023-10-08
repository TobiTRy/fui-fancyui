import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import HeaderSlot from './HeaderSlot';

const meta = {
  component: HeaderSlot,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: A HeaderSlot component. <br> Its a Component from the Header that handles the space and open and close of the menu.',    
      },
    },
  },
  argTypes: {
    headerSlot: {
      description: 'The slot in the header',
      control: {
        type: 'object',
      },
    },
    outOfHeaderSlot: {
      description: 'The area under the real slot to display a menue or something else',
      control: {
        type: 'object',
      },
    },


  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderSlot>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <HeaderSlot {...args}/>,
  args: {
    headerSlot: {
      children: 'Header Slot',
    },
    outOfHeaderSlot: 'Out of Header Slot',
  }
};

