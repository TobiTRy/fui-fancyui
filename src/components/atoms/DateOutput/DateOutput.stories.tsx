// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import DateOutput from './DateOutput';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: DateOutput,
  title: 'components/atoms/DateOutput',
  parameters: {
    docs: {
      description: {
        component:
          'the DateOutput component is for displaying a date in a box, it can be used for displaying the date in a calendar',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    date: {
      control: { type: 'date' },
      description: 'The date to display',
      defaultValue: {
        summary: undefined,
      },
    },
    isActive: {
      control: { type: 'boolean' },
      description: 'The active state of the box',
    },
    onClick: {
      description: 'The function to call when the box is clicked',
      control: { type: 'function' },
    },
    sizeC: {
      control: { type: 'radio' },
      description: 'The size of the box',
      options: ['sm', 'md', 'lg', undefined],
      defaultValue: {
        summary: 'md',
      },
    },
    textCustom: {
      control: { type: 'object' },
      description: 'The text to display',
      defaultValue: {
        summary: 'text',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof DateOutput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <DateOutput {...args} date={new Date(args?.date!)} />,
  args: {
    date: 1, // strorybook does currently not support date as a type
    layer: 2,
    themeType: 'primary',
    isActive: true,
    textCustom: {
      notSelected: 'not selected',
      selected: 'From:',
    },
    onClick: () => {
      console.log('clicked');
    },
  },
};
