import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyDropDownUL from './FancyDropDownUL';

const meta = {
  component: FancyDropDownUL,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The Color area that is uses for picking a color. <br> - The ColorIndicator works wehen the color is provides again',
      },
    },
  },
  argTypes: {
    layer: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    themeType: {
      control: {
        type: 'select',
      },
    },
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyDropDownUL>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyDropDownUL {...args} />,
  args: {
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </>
    ),
    themeType: 'primary',
    layer: 5,
    isOpen: true,
    width: '50%',
    alignHorizontal: 'center',
    alignVertical: 'top',
  },
};
