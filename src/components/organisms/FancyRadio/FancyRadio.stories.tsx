// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyRadio from './FancyRadio';

// Define metadata for the story
const meta = {
  component: FancyRadio,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: Is a Normal RadioInput as ForwardsRef Component with a Label and description porp',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    align: {
      description: 'The alignment of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    label: {
      description: 'The label of the input',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'The description of the input',
      control: {
        type: 'text',
      },
    },
    checked: {
      description: 'The checked state of the input',
      control: {
        type: 'boolean',
      },
    },
    name: {
      description: 'The name of the input',
      control: {
        type: 'text',
      },
    },
    id: {
      description: 'The id of the input',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'The externalStyle of the input',
      control: {
        type: 'object',
      },
    },
    alignInput: {
      description: 'The alignInput of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyRadio>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyRadio {...args} />,
  args: {
    label: 'Label',
    description: 'Description',
    checked: false,
    name: 'name',
    id: 'id',
    align: 'left',
    alignInput: 'left',
  },
};
