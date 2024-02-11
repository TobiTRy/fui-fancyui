// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import YearSelector from './YearSelector';
// Define metadata for the story
const meta = {
  component: YearSelector,
  parameters: {
    docs: {
      description: {
        component: 'the year selector is a simple component to select a year',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    selectedYear: {
      description: 'The year to be displayed',
      control: {
        type: 'number',
      },
    },
    themeType: {
      description: 'The theme type of the year selector',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the year selector',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    handler: {
      description: 'The handler for the year selector',
      control: {
        type: 'function',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof YearSelector>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <YearSelector {...args} />,
  args: {
    selectedYear: 2021,
    handler: (year: number) => console.log(year),
    themeType: 'secondary',
    layer: 0,
    ariaTextLeftArrow: 'go one year back',
    ariaTextRightArrow: 'go one year',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
