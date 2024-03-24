// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDatePicker from './FancyDatePicker';
import { TDateArray } from '@/components/molecules/Calendar/TCalendar.model';

// Define metadata for the story
const meta = {
  component: FancyDatePicker,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: A fancy date picker with a range calendar and more',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    rangeCalendar: {
      description: 'Is Pickinga range of dates',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    handler: {
      description:
        'Handler gives back the first and last date [first, last]... its not a RangePicker then it gives back the first date [frist, undefined]',
      control: {
        type: 'function',
      },
      table: {
        defaultValue: { summary: '[undefined, undefined]' },
      },
    },
    selectedYear: {
      description: 'Selected year',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 'current year' },
      },
    },
    themeType: {
      description: 'Theme type of the datepicker',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    layer: {
      description: 'Layer of the datepicker',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyDatePicker>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDatePicker {...args} />,
  args: {
    rangeCalendar: false,
    handler: (date: TDateArray) => console.log(date),
    selectedYear: new Date().getFullYear(),
    themeType: 'primary',
    layer: 1,
    externalData: {
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
