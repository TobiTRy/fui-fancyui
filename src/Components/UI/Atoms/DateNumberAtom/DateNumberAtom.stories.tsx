// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import DateNumberAtom from './DateNumberAtom';
// Define metadata for the story
const meta = {
  component: DateNumberAtom,
  parameters: {
    docs: {
      description: {
        component:
          'The DateNumberAtom component is for displaying a number in a box, it can be used for displaying the day of the month in a calendar <br> - isWeekend: is the day a weekend day <br> - selected: is the day selected <br> - disabled: is the day disabled <br> - onClick: function to be called when the day is clicked <br> - range: is the day in a range <br> - isCurrentDay: is the day the current day <br> - themeType: the theme type of the day <br> - layer: the layer of the day',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    dateNumber: {
      control: { type: 'number' },
    },
    isWeekend: {
      control: { type: 'boolean' },
    },
    selected: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'is the day disabled, like a day in the previous month or next month, or the weekend',
    },
    onClick: {
      control: { type: 'function' },
    },
    range: {
      control: { type: 'object' },
      description: 'is the day in a range, it can be used for a date range picker',
    },
    isCurrentDay: {
      control: { type: 'boolean' },
    },
    themeType: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary'] },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof DateNumberAtom>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <DateNumberAtom {...args} />,
  args: {
    dateNumber: 1,
    isWeekend: false,
    selected: false,
    disabled: false,
    onClick: () => {console.log('clicked')},
    range: { start: false, end: false, inRange: false },
    isCurrentDay: false,
    themeType: 'secondary',

  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
