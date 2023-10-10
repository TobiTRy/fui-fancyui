// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDateInput from './FancyDateInput';

// Define metadata for the story
const meta = {
  component: FancyDateInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A fancy date input with label, icon and error message',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'Label for the input',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean',
      },
    },
    themeType: {
      description: 'Theme type of the input',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'Layer of the input',
      control: {
        type: 'number',
      },
    },
    errorMessage: {
      description: 'Error message to be displayed',
      control: {
        type: 'text',
      },
    },
    activeHandler: {
      description: 'Handler for the input',
      control: {
        type: 'function',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyDateInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDateInput {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'secondary',
    layer: 4,
    activeHandler: (value: boolean) => console.log(value),
  },
};

export const WithError: Story = {
  render: (args) => <FancyDateInput {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'secondary',
    layer: 4,
    errorMessage: 'This is an error message',
    activeHandler: (value: boolean) => console.log(value),
  },
};
