import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyTabSwitch from './FancyTabSwitch';

const meta = {
  component: FancyTabSwitch,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Dumb-Comonent: a Button that opens a SpeedDialMenue with a list of Buttons.',
      },
    },
  },
  argTypes: {
    wide: {
      description: 'If true, the component will take up the full width of its container.',
      type: { name: 'boolean' },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      type: { name: 'boolean' },
    },
    sizeC: {
      description: 'The sizeC of the component.',
      control: {
        type: 'select',
      },
    },
    iconAlign: {
      description: 'The icon alignment.',
      control: {
        type: 'radio',
      },
    },
    textColor: {
      description: 'The color of the component.',
      control: {
        type: 'select',
      },
    },
    themeType: {
      description: 'The color of the component.',
      control: {
        type: 'select',
      },
    },
    currentSelect: {
      description: 'The currently selected tab.',
    },
    layer: {
      description: 'The layer of the component.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    activeColor: {
      description: 'The active color of the component.',
      control: {
        type: 'select',
      },
    },
    outlined: {
      description: 'If true, the component will be outlined.',
      type: { name: 'boolean' },
    },
    rounded: {
      description: 'The rounded of the component.',
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyTabSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyTabSwitch {...args} />,
  args: {
    values: [
      { itemKey: '1', label: 'Tab 1' },
      { itemKey: '2', label: 'Tab 2' },
      { itemKey: '3', label: 'Tab 3' },
    ],

    label: 'FancyTabSwitch',
    currentSelect: '2',
    handler: () => {
      console.log('onChange');
    },
    themeType: 'primary',
    wide: true,
    layer: 4,
    disabled: false,
  },
};
