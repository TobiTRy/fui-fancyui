// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import DateOutput from './DateOutput';
// Define metadata for the story
const meta = {
  component: DateOutput,
  parameters: {
    docs: {
      description: {
        component:
          'the DateOutput component is for displaying a date in a box, it can be used for displaying the date in a calendar <br> - date: the date to be displayed <br> - themeType: the theme type of the date <br> - isActive: is the date active <br> - onClick: function to be called when the date is clicked <br> - layer: the layer of the date',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    date: {
      control: { type: 'date' },
    },
    themeType: {
      control: { type: 'select', options: ['primary', 'secondary', 'tertiary'] },
    },
    isActive: {
      control: { type: 'boolean' },
    },
    onClick: {
      control: { type: 'function' },
    },
    layer: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
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
  render: (args) => <DateOutput {...args} />,
  args: {
    date: new Date(),
    themeType: 'primary',
    isActive: true,
    onClick: () => {
      console.log('clicked');
    },
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
