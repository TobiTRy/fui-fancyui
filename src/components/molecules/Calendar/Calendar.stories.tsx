import type { Meta, StoryObj } from '@storybook/react';

import Calendar from './Calendar';

const meta = {
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A Calendar component to select a date range. or a single date.',
      },
    },
  },
  argTypes: {
    selectedYearMonth: {
      description: 'The selected year.',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: {
          year: new Date().getFullYear(),
          month: new Date().getMonth(),
        },
      },
    },
    rangeCalendar: {
      description: 'If the Calendar a Rangepicker or SingelDate.',
      type: { name: 'boolean' },
      defaultValue: { summary: false },
    },
    handleDates: {
      description: 'The handler gives back the selected date.',
    },
    selectFromTo: {
      description:
        'If the Calendar a Rangepicker that you can select set wich date is currently selected the from - to.',
      control: {
        type: 'radio',
      },
      defaultValue: { summary: 'from' },
    },
    themeType: {
      description: 'The theme type of the input.',
      control: {
        type: 'select',
      },
      defaultValue: { summary: 'secondary' },
    },
    layer: {
      description: 'The layer of the input.',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      defaultValue: { summary: 4 },
    },
    externalMonthsWithDays: {
      description: 'The external months with days.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Calendar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Calendar {...args} />,
  args: {
    selectedYearMonth: {
      year: 2023,
      month: 2,
    },
    rangeCalendar: false,
    selectFromTo: 'from',
    themeType: 'secondary',
    externalMonthsWithDays: {
      2023: [
        {
          monthIdx: 0,
          dates: [
            {
              date: 1,
              isAvilable: 'partially',
            },
            {
              date: 2,
              isAvilable: 'not',
            },
            {
              date: 3,
              isAvilable: 'transparent',
            },
          ],
        },
        {
          monthIdx: 11,
          dates: [
            {
              date: 5,
              isAvilable: 'partially',
            },
            {
              date: 7,
              isAvilable: 'not',
            },
            {
              date: 2,
              isAvilable: 'transparent',
            },
          ],
        },
      ],
    },
    disabledDateSetting: {
      disabledWeekdays: [1, 6],
      disableWeekends: true,
      disablePastDates: false,
    },
  },
};
