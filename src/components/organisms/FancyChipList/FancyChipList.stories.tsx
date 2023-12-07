import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyChipList from './FancyChipList';

const meta = {
  component: FancyChipList,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent:  A Component that act like a tag list. It can be used to display tags/chips for some Informations.',
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
    },
    chips: {
      description: 'The Chips that should be displayed',
      control: {
        type: 'array',
      },
    },
    label: {
      description: 'The Label of the ChipList',
      control: {
        type: 'text',
      },
    },
    systemInformation: {
      description: 'The SystemInformation that should be displayed',
      control: {
        type: 'select',
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
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyChipList {...args} />,
  args: {
    chips: ['12', '1212', '1212', '121221', '121212211', '12121212', '12121212'],
    size: 'md',
    label: 'ChipList',
  },
};
