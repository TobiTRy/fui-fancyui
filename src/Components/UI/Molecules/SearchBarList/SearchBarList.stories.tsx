import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SearchBarList from './SearchBarList';

const meta = {
  component: SearchBarList,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A SearchBarList component to display a list of items as children',
      },
    },
  },
  argTypes: {
    isActive: {
      description: 'If true, the list will be displayed.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    themeType: {
      description: 'The theme type of the search bar list.',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the search bar list.',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
    },
    
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBarList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SearchBarList {...args} />,
  args: {
    isActive: true,
  },
};
