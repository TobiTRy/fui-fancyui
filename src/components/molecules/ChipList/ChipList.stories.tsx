import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import ChipList from './ChipList';
import { FancyChip } from '@/components/templates/FancyChip';

const meta = {
  component: ChipList,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A Chiplist with Chips. It can be used to display tags/chips for some Informations',
      },
    },
  },
  argTypes: {
    size: {
      description: 'Size of the ChipList',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      defaultValue: {
        summary: 'md',
      },
    },
    outlined: {
      description: 'If the ChipList should be outlined',
      control: {
        type: 'boolean',
      },
    },
    layer: {
      description: 'The Layer of the ChipList',
      control: {
        type: 'select',
      },
    },
    themeType: {
      description: 'The ThemeType of the ChipList',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    systemMessage: {
      description: 'The SystemMessage of the ChipList',
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <ChipList {...args}>
      <FancyChip label="Test" />
      <FancyChip label="Test" />
      <FancyChip label="Test" />
      <FancyChip label="Test" />
      <FancyChip label="Test" />
    </ChipList>
  ),
  args: {},
};
