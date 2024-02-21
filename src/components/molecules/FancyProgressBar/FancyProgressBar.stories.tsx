import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyProgressBar from './FancyProgressBar';

const meta = {
  component: FancyProgressBar,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A Progressbar with some Items Like Percent and Label',
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string', required: false },
      description: 'The label for the Progressbar',
    },
    labelAlign: {
      control: {
        type: 'radio',
      },
      description: 'The alignment of the label',
    },
    progressAlign: {
      control: {
        type: 'radio',
      },
      description: 'The alignment of the progress',
    },
    progressCount: {
      type: { name: 'boolean', required: false },
      description: 'If the progress should be shown as a count',
    },
    themeType: {
      control: {
        type: 'select',
      },
      description: 'The theme of the Progressbar',
    },
    textLayer: {
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      description: 'The layer of the text',
    },
    layer: {
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      description: 'The layer of the Progressbar',
    },
    progress: {
      type: { name: 'number', required: false },
      description: 'The progress of the Progressbar',
    },
    maxValue: {
      type: { name: 'number', required: false },
      description: 'The max value of the Progressbar',
    },
    id: {
      type: { name: 'string', required: false },
      description: 'The id of the Progressbar',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyProgressBar {...args} />,
  args: {
    label: 'Test',
    labelAlign: 'left',
    progressCount: true,
    themeType: 'primary',
    textLayer: 0,
    layer: 4,
    progress: 50,
    maxValue: 100,
    id: 'test',
  },
};
