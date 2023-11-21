// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTextInput from './FancyTextInput';

import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

// Define metadata for the story
const meta = {
  component: FancyTextInput,
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
      defaultValue: '',
      control: {
        type: 'text',
      },
    },

    layer: {
      description: 'The layer of the modal',
      defaultValue: 0,
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    themeType: {
      description: 'The theme of the modal',
      defaultValue: 'primary',
      control: {
        type: 'select',
      },
    },
    isActive: {
      description: 'The activity state of the input',
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    align: {
      description: 'The alignment of the input',
      defaultValue: 'left',
      control: {
        type: 'select',
      },
    },
    label: {
      description: 'The label of the input',
      defaultValue: 'Label',
      control: {
        type: 'text',
      },
    },
    errorMessage: {
      description: 'The error message of the input',
      defaultValue: '',
      control: {
        type: 'text',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyTextInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyTextInput {...args} />,
  args: {
    value: '',
    layer: 0,
    themeType: 'secondary',
    isActive: false,
    align: 'left',
    label: 'Label',
    errorMessage: '',
    icon: <SVGCheckMark />,
  },
};
