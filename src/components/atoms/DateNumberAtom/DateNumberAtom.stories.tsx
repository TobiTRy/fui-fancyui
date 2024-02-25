// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import DateNumberAtom from './DateNumberAtom';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: DateNumberAtom,
  parameters: {
    docs: {
      description: {
        component:
          'The DateNumberAtom component is for displaying a number it can be used for displaying the day of the month in a calendar',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    dateNumber: {
      control: { type: 'number' },
    },
    selected: {
      description: 'is the day selected',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'is the day disabled, like a day in the previous month or next month, or the weekend',
      defaultValue: {
        summary: false,
      },
    },
    onClick: {
      control: { type: 'function' },
      description: 'is the function to call when the day is clicked',
      defaultValue: {
        summary: undefined,
      },
    },
    range: {
      control: { type: 'object' },
      description:
        'is the day in a range, you can pass an object with the following properties: <br> - start: is the day the start of the range <br> - end: is the day the end of the range <br> - inRange: is the day in the range',
    },
    isCurrentDay: {
      description: 'is the day the current day it gets a different color',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    ...templateThemeType('allThemeTypes', 'secondary', 0),
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
    selected: false,
    disabled: false,
    onClick: () => {
      console.log('clicked');
    },
    range: { start: false, end: false, inRange: false },
    isCurrentDay: false,
    themeType: 'secondary',
    layer: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
