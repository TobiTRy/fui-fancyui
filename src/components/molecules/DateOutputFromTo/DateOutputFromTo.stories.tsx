import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DateOutputFromTo from './DateOutputFromTo';

const meta = {
  component: DateOutputFromTo,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: DateOutputFromTo is a component that renders two DateOutput components and a FancyVR component in between. It is used to display a date range. It is used in the DateRangePicker component.',
      },
    },
  },
  argTypes: {
    layer: {
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    themeType: {
      control: {
        type: 'select',
      },
    },
    whichIsSelecting: {
      control: {
        type: 'radio',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateOutputFromTo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateOutputFromTo {...args} />,
  args: {
    dateFrom: new Date(),
    dateTo: new Date(),
    handleFromTo: (wich: 'from' | 'to') => console.log(wich),
    whichIsSelecting: 'from',
    themeType: 'primary',
    layer: 2,
  },
};
