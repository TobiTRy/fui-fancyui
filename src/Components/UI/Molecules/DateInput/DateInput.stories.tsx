import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DateInput from './DateInput';

const meta = {
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The DateInput is a component that allows the user to select a date from a calendar.',
      },
    },
  },
  argTypes: {
    type: {
      description: 'The type of the input.',
      defaultValue: 'date',
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateInput {...args} />,
  args: {
    value: '2021-01-01',
    activeHandler: (value) => console.log(value),
    align: 'center',
    type: 'date',
  },
};
