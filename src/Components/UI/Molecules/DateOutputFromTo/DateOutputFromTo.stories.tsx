import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DateOutputFromTo from './DateOutputFromTo';

const meta = {
  component: DateOutputFromTo,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The DateNumberWithStatus is a component that is a mix of DateNumberAtom and AvailableDot. <br> It is used in the calendar. (FancyDatepicker)',
      },
    },
  },
  argTypes: {

  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateOutputFromTo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateOutputFromTo {...args} />,
  args: {
  },
};
