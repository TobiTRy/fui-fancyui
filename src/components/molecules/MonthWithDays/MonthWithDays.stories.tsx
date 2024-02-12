import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import MonthWithDays from './MonthWithDays';

const meta = {
  component: MonthWithDays,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: Generate a month with days, which can be used in a calendar. <br> ',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The themeType for the Modal',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer for the Modal',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    monthIdx: {
      description: 'The month index',
      control: {
        type: 'number',
      },
    },
    year: {
      description: 'The year',
      control: {
        type: 'number',
      },
    },
    selectedDates: {
      description: 'The selected dates',
      control: {
        type: 'object',
      },
    },
    isRangePicking: {
      description: 'The range picking',
      control: {
        type: 'boolean',
      },
    },
    disabledDateSetting: {
      description: 'The disabled date setting',
      control: {
        type: 'object',
      },
    },
    externalMonthWithDays: {
      description: 'The external month with days setting',
      control: {
        type: 'object',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MonthWithDays>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <MonthWithDays {...args} />,
  args: {
    year: 2021,
    monthIdx: 0,
    isRangePicking: false,
    themeType: 'primary',
    layer: 1,
    selectedDates: [new Date(2021, 0, 1), undefined],
    handleDateClick: () => {
      console.log('handleDateClick');
    },
    disabledDateSetting: {
      disabledWeekdays: [1, 6],
      disableWeekends: true,
      disablePastDates: false,
    },
    externalMonthWithDays: {
      monthIdx: 0,
      dates: [
        {
          date: 0,
          isAvilable: 'partially',
        },
        {
          date: 5,
          isAvilable: 'not',
        },
        {
          date: 7,
          isAvilable: 'transparent',
        },
      ],
    },
  },
};
