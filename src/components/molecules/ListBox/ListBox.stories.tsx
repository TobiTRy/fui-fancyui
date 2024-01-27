import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ListBox from './ListBox';

const meta = {
  component: ListBox,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The ListBox Renders a Styled Box with a list of Items.',
      },
    },
  },

  argTypes: {
    children: {
      description: 'The children of the ListBox.',
      type: { name: 'function', required: false },
    },
  },
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <ListBox {...args}>
      <ListBox.Item>Item 1</ListBox.Item>
      <ListBox.Item>Item 2</ListBox.Item>
      <ListBox.Item>Item 3</ListBox.Item>
    </ListBox>
  ),
  args: {},
};
