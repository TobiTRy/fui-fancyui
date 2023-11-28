import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyListBox from './FancyListBox';

const meta = {
  component: FancyListBox,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyListBox Renders a Styled Box with a list of Items.',
      },
    },
  },

  argTypes: {
    children: {
      description: 'The children of the FancyListBox.',
      type: { name: 'function', required: false },
    },
  },
} satisfies Meta<typeof FancyListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <FancyListBox {...args}>
      <FancyListBox.Item>Item 1</FancyListBox.Item>
      <FancyListBox.Item>Item 2</FancyListBox.Item>
      <FancyListBox.Item>Item 3</FancyListBox.Item>
    </FancyListBox>
  ),
  args: {},
};
