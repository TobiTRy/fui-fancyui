// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyPasswordInput from '../FancyPasswordInput';

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyPasswordInput,
  title: 'components/organisms/FancyPasswordInput',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyPasswordInput component is a specialized input component designed for password fields. It enhances user experience by wrapping a standard password input with additional UI elements such as an icon, label, and underline for improved aesthetics and functionality. It also supports various states and themes, making it a versatile component for any form requiring password input.',
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
    underline: {
      description: 'Underline the input',
      control: {
        type: 'boolean',
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
    step: {
      description: 'The step size for the input´s value, used when incrementing or decrementing with arrow keys.',
      type: { name: 'number' },
    },
  },
} satisfies Meta<typeof FancyPasswordInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyPasswordInput {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    underline: true,
    label: 'Password',
    icon: <SVGCheckMark />,
  },
};

export const WithErrorState: Story = {
  render: (args) => <FancyPasswordInput {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Password',
    icon: <SVGCheckMark />,
    systemMessage: 'error',
  },
};

export const WithSuccessState: Story = {
  render: (args) => <FancyPasswordInput {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Password',
    icon: <SVGCheckMark />,
    systemMessage: 'success',
  },
};

export const WithInfoState: Story = {
  render: (args) => <FancyPasswordInput {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Password',
    icon: <SVGCheckMark />,
    systemMessage: 'info',
  },
};

export const WithDisabledState: Story = {
  render: (args) => <FancyPasswordInput {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Password',
    icon: <SVGCheckMark />,
    disabled: true,
  },
};
