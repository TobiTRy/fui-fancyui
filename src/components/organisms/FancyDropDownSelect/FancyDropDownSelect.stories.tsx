// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDropDownSelect from './FancyDropDownSelect';

import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';

// Define metadata for the story
const meta = {
  component: FancyDropDownSelect,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A fancy dropdown select with label, icon and error message and more',
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
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
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
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'radio',
      },
      defaultValue: {
        summary: 'left',
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
    isActive: {
      description: 'Is the input in focus',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    systemMessage: {
      description: 'Systemmessage to be displayed',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: '',
      },
    },
    values: {
      description: 'Values for the dropdown',
      control: {
        type: 'array',
      },
      defaultValue: {
        summary: [],
      },
    },
    value: {
      description: 'The picked value of the dropdown',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
    emptySelect: {
      description: 'A Empty Item that is selectable',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    transparentBackground: {
      description: 'Transparent Background',
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
} satisfies Meta<typeof FancyDropDownSelect>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDropDownSelect {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Label',
    placeholder: 'Placeholder',
    values: ['test1', 'test2', 'test3'],
  },
};

export const WithErrorState: Story = {
  render: (args) => <FancyDropDownSelect {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Label',
    placeholder: 'Placeholder',
    values: ['test1', 'test2', 'test3'],
    systemMessage: {
      type: 'error',
      message: 'Error',
    },
  },
};

export const WithSuccessState: Story = {
  render: (args) => <FancyDropDownSelect {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Label',
    placeholder: 'Placeholder',
    values: ['test1', 'test2', 'test3'],
    systemMessage: {
      type: 'success',
      message: 'Success',
    },
  },
};

export const WithInfoState: Story = {
  render: (args) => <FancyDropDownSelect {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Label',
    placeholder: 'Placeholder',
    values: ['test1', 'test2', 'test3'],
    systemMessage: {
      type: 'info',
      message: 'Info',
    },
  },
};
