import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyBoxSet from './FancyBoxSet';

const meta = {
  component: FancyBoxSet,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyBoxSet Renders a Styled Box with a list of Items and a label.',
      },
    },
  },
  argTypes: {
    displayLine: {
      description: 'The Horizontal Line is displayed.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: true,
      },
    },
    label: {
      description: 'TheBoySet has a label.',
      type: { name: 'string' },
      defaultValue: {
        summary: '',
      },
    },
    alignLabel: {
      description: 'The alignment of the label.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    fontVariantLegend: {
      description: 'The font variant of the label.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'h3',
      },
    },
    disabled: {
      description: 'If true, the Fieldset is disabled.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    themeType: {
      description: 'The theme type of the modal.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the modal.',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 1,
      },
    },
    outlined: {
      description: 'If true, the modal is outlined.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the modal.',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
      defaultValue: {
        summary: 1,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyBoxSet>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <FancyBoxSet {...args}>
      <p>Hiii</p>
      <p>Hiii</p>
      <p>Hiii</p>
      <p>Hiii</p>
      <p>Hiii</p>
    </FancyBoxSet>
  ),
  args: {
    layer: 1,
    themeType: 'primary',
    displayLine: true,
    label: 'Label',
    alignLabel: 'left',
    fontVariantLegend: 'h3',
    disabled: false,
  },
};
