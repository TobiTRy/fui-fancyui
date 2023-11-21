import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from './SearchBar';

const meta = {
  component: SearchBar,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The Searchbar for the header.',
      },
    },
  },
  argTypes: {
    searchValue: {
      description: 'The value of the search bar.',
      type: { name: 'string' },
    },
    align: {
      description: 'The alignment of the text.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'center',
      },
    },
    themeType: {
      description: 'The theme type of the search bar.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'secondary',
      },
    },
    layer: {
      description: 'The layer of the search bar.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 4,
      },
    },
    placerholder: {
      description: 'The placeholder of the search bar.',
      type: { name: 'string' },
      defaultValue: {
        summary: 'Search',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SearchBar {...args} />,
  args: {
    searchValue: '',
  },
};
