// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested

import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';
import FancyNumberInput from './FancyNumberInput';

// Define metadata for the story
const meta = {
  component: FancyNumberInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    value: {
      description: 'The value of the input',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'The alignment of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    themeType: {
      description: 'The theme of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'secondary',
      },
    },
    layer: {
      description: 'The layer of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: '4',
      },
    },
    label: {
      description: 'The label of the input',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'The icon of the input',
      defaultValue: {
        summary: 'none',
      },
    },
    systemMessage: {
      description: 'The system message of the input',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: '',
      },
    },
    transparentBackground: {
      description: 'The background of the input',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyNumberInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyNumberInput {...args} />,
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    label: 'Number',
    icon: <SVGCheckMark />,
    isActive: false,
  },
};

export const WithErrorState: Story = {
  render: (args) => <FancyNumberInput {...args} />,
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    label: 'Number',
    icon: <SVGCheckMark />,
    isActive: false,
    systemMessage: { type: 'error', message: 'This is an error message' },
  },
};

export const WithSuccessState: Story = {
  render: (args) => <FancyNumberInput {...args} />,
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    label: 'Number',
    icon: <SVGCheckMark />,
    isActive: false,
    systemMessage: { type: 'success', message: 'This is an success message' },
  },
};

export const WithInfoState: Story = {
  render: (args) => <FancyNumberInput {...args} />,
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    label: 'Number',
    icon: <SVGCheckMark />,
    isActive: false,
    systemMessage: { type: 'info', message: 'This is an info message' },
  },
};

export const WithDisabledState: Story = {
  render: (args) => <FancyNumberInput {...args} />,
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    label: 'Number',
    icon: <SVGCheckMark />,
    isActive: false,
    disabled: true,
  },
};
