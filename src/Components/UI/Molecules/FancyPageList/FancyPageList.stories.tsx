import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyPageList from './FancyPageList';

const meta = {
  component: FancyPageList,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: A Page List for a List of Elements with a Paginator',
      },
    },
  },
  argTypes: {
    itemsPerPage: {
      type: { name: 'number', required: false },
      description: 'The number of items that shown per page',
    },
    elements: {
      description: 'The elements that should be displayed',
    },
    spacingBetweenItems: {
      type: { name: 'string', required: false },
      description: 'The spacing between the items',
    },
    pageLimits: {
      type: { name: 'number', required: false },
      description: 'The number of pages that should be shown',
    },
    buttonDesign: {
      control: {
        type: 'select',
      },
      description: 'The design of the buttons',
    },
    outlinedButton: {
      type: { name: 'boolean', required: false },
      description: 'If the buttons should be outlined',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyPageList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyPageList {...args} />,
  args: {
    elements: [
      <p>Test</p>,
      <p>Test</p>,
      <p>Test</p>,
      <p>Test2</p>,
      <p>Test2</p>,
      <p>Test2</p>,
      <p>Test3</p>,
      <p>Test3</p>,
      <p>Test3</p>,
      <p>Test4</p>,
    ],
    itemsPerPage: 3,
  },
};
