// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import FancyNumberInput from '../FancyNumberInput';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { useState } from 'react';

// Define metadata for the story
const meta = {
  component: FancyNumberInput,
  title: 'components/organisms/FancyNumberInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyNumberInput` component enhances the basic number input by integrating additional UI features such as an icon, label, and an underline for a more appealing user interface. It wraps the `NumberInput` component within the `InputWrapper` component, providing a styled container with the ability to handle focus states, display system messages, and adapt to various themes and layers. It´s designed for use in applications that require numeric inputs with an enhanced visual presentation.',
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
    autoWidth: {
      description: 'If the Input should fit the content',
      control: {
        type: 'boolean',
      },
    },
    step: {
      description: 'The step size for the input´s value, used when incrementing or decrementing with arrow keys.',
      type: { name: 'number' },
    },
  },
} satisfies Meta<typeof FancyNumberInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HelperFunctions = (props: any) => {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <FancyNumberInput value={value} onChange={handleChange} {...props} />;
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Number',
    labelVariant: 'animated',
    icon: <SVGCheckMark />,
    decimalPlaces: 2,
    step: 1,
  },
};

export const WithErrorState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Number',
    labelVariant: 'animated',
    icon: <SVGCheckMark />,
    systemMessage: { type: 'error', message: 'This is an error message' },
    decimalPlaces: 2,
  },
};

export const WithSuccessState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    labelVariant: 'animated',
    label: 'Number',
    icon: <SVGCheckMark />,
    systemMessage: { type: 'success', message: 'This is an success message' },
    decimalPlaces: 2,
  },
};

export const WithInfoState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    label: 'Number',
    labelVariant: 'animated',
    icon: <SVGCheckMark />,
    systemMessage: { type: 'info', message: 'This is an info message' },
    decimalPlaces: 2,
  },
};

export const WithDisabledState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    align: 'left',
    themeType: 'primary',
    layer: 2,
    labelVariant: 'animated',
    label: 'Number',
    icon: <SVGCheckMark />,
    disabled: true,
    decimalPlaces: 2,
  },
};
