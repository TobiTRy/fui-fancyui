import type { Meta, StoryObj } from '@storybook/react';

import MonthWithDays from '../MonthWithDays';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: MonthWithDays,
  title: 'components/molecules/MonthWithDays',
  parameters: {
    docs: {
      description: {
        component:
          'The MonthWithDays component is a React component designed to render a single month calendar view with dates. It leverages the Typography atom and the DateNumberWithStatus molecule, among other utilities, to construct a comprehensive and interactive calendar month. This component is part of a larger calendar or date-picker functionality, providing users with the ability to interact with individual days within a month, select dates, and view different states of each day (e.g., selected, disabled, range picking).',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    monthIdx: {
      description: 'The index of the month to display, starting from 0 for January',
      control: {
        type: 'number',
      },
    },
    startWeekOn: {
      description: 'The day of the week on which the week starts. 0 is Sunday, 1 is Monday, etc.',
      control: {
        type: 'number',
      },
    },
    year: {
      description: 'The year for which the month is displayed.',
      control: {
        type: 'number',
      },
    },
    handleDateClick: {
      description: 'Click handler for when a date is clicked.',
      control: {
        type: 'function',
      },
    },
    selectedDates: {
      description: 'An array of dates to be marked as selected.',
      control: {
        type: 'object',
      },
    },
    isRangePicking: {
      description: 'Flag to indicate if the component should support range picking.',
      control: {
        type: 'boolean',
      },
    },
    disabledDateSetting: {
      description: 'Settings to disable specific dates.',
      control: {
        type: 'object',
      },
    },
    externalMonthWithDays: {
      description: 'Dates you can modify to integrate with the component for dynamic date management.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof MonthWithDays>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <MonthWithDays {...args} />,
  args: {
    year: 2021,
    monthIdx: 0,
    isRangePicking: false,
    themeType: 'secondary',
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
