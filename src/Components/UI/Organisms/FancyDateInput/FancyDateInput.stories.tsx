// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDateInput from './FancyDateInput';

import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

// Define metadata for the story
const meta = {
  component: FancyDateInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A fancy date input with label, icon and error message and more',
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
      defaultValue: {
        summary: '',
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    themeType: {
      description: 'Theme type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'secondary',
      },
    },
    layer: {
      description: 'Layer of the input',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 4,
      },
    },
    errorMessage: {
      description: 'Error message to be displayed',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    activeHandler: {
      description: 'Handler for the input',
      control: {
        type: 'function',
      },
    },
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    icon: {
      description: 'Icon for the input',
    },
    isActive: {
      description: 'Active state of the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    value: {
      description: 'Value of the input',
      control: {
        type: 'text',
      },
    },
    type: {
      description: 'Type of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'date',
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
    placeholder: new Date().toLocaleDateString(),
    themeType: 'secondary',
    layer: 4,
    value: '2023-10-26',
    icon: <SVGCheckMark />,
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
