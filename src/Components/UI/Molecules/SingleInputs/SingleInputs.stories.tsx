import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SingleInputs from './SingleInputs';

const meta = {
  component: SingleInputs,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The Singele input component is for single input like a verification code.',
      },
    },
  },

  argTypes: {
    length: {
      description: 'How many inputs are Displayed / how long is the verification code.',
      control: {
        type: 'number',
      },
      defaultValue: {
        summary: 6,
      },
    },
    automaticCase: {
      description: 'If the input should be upper or lower case',
      control: {
        type: 'select',
        options: ['upper', 'lower', undefined],
      },
      defaultValue: {
        summary: undefined,
      },
    },
    status: {
      description: 'The status of the input',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: `isError: false,
          isSucceed: false,`,
      },
    },
    themeType: {
      description: 'The theme type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'secondary',
      },
    },
    layer: {
      description: 'The layer of the input',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
      defaultValue: {
        summary: '0',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SingleInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SingleInputs {...args} />,
  args: {
    length: 6,
    status: {
      isError: false,
      isSucceed: false,
    },
  },
};
