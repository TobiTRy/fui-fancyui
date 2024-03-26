// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTextInput from '../FancyTextInput';

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

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
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    systemMessage: {
      description: 'Error message to be displayed',
      control: {
        type: 'object',
      },
    },
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
    },
    icon: {
      description: 'Icon for the input',
      control: {
        type: 'object',
      },
    },
    value: {
      description: 'Value of the input',
      control: {
        type: 'text',
      },
    },
    transparentBackground: {
      description: 'The input has a transparent background',
      control: {
        type: 'boolean',
      },
    },
    externalStyle: {
      description: 'External style for the input',
      control: {
        type: 'object',
      },
    },
    labelVariant: {
      description: 'Variant of the label',
      control: {
        type: 'select',
      },
    },
    outlined: {
      description: 'Outlined input',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'Background strength of the outlined input',
      control: {
        min: 0,
        max: 1,
        step: 0.1,
        type: 'number',
      },
    },
  },
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
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
  },
};

export const WithErrorState: Story = {
  render: (args) => <FancyTextInput {...args} />,
  args: {
    value: '',
    layer: 0,
    themeType: 'secondary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
    systemMessage: {
      message: 'This is an error message',
      type: 'error',
    },
  },
};

export const WithSuccessState: Story = {
  render: (args) => <FancyTextInput {...args} />,
  args: {
    value: '',
    layer: 0,
    themeType: 'secondary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
    systemMessage: {
      message: 'This is an error message',
      type: 'success',
    },
  },
};

export const WithInfoState: Story = {
  render: (args) => <FancyTextInput {...args} />,
  args: {
    value: '',
    layer: 0,
    themeType: 'secondary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
    systemMessage: {
      message: 'This is an error message',
      type: 'info',
    },
  },
};
