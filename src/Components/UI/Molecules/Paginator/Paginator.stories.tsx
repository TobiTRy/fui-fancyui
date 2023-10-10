import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Paginator from './Paginator';

const meta = {
  component: Paginator,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A Paginator component to switch pages',
      },
    },
  },
  argTypes: {
    currentPage: {
      description: 'The current page which is slected.',
      type: { name: 'number' },
      defaultValue: { summary: 1 },
    },
    totalPages: {
      description: 'The total pages that should counted to.',
      type: { name: 'number' },
    },
    themeType: {
      description: 'The theme type of the paginator.',
      control: {
        type: 'select',
      },
      defaultValue: { summary: 'accent' },
    },
    outlinedButton: {
      description: 'If true, the buttons will be outlined.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
    },
    pageLimits: {
      description: 'The limit of the pages Numbers.',
      type: { name: 'number' },
      defaultValue: { summary: 3 },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof Paginator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Paginator {...args} />,
  args: {
    totalPages: 10,
    currentPage: 1,
    outlinedButton: false,
    pageLimits: 3,
  },
};
