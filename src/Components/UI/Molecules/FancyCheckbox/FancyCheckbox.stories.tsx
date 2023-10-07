import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyCheckbox from './FancyCheckbox';


const meta = {
  component: FancyCheckbox,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent:  This component is a button with a lot of props to change the style.',
          
      },
    },
  },
  argTypes: {
    label: {
      description: 'This prop will change the color of the bar',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'This prop will change the layer of the bar',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'This prop will change the align of the button',
      control: {
        type: 'select',
      },
    },
    alignCheckbox: {
      description: 'This prop will change the align of the checkbox',
      control: {
        type: 'select',
      },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyCheckbox {...args} />,
  args: {
    label: 'Label',
    description: 'Description',
    align: 'left',
    alignCheckbox: 'left',

  },
};
