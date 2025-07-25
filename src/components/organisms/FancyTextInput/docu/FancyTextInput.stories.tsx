// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTextInput from '../FancyTextInput';

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { useState } from 'react';

// Define metadata for the story
const meta = {
  component: FancyTextInput,
  title: 'components/organisms/FancyTextInput',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyTextInput` is a component designed to provide a flexible and visually appealing text input. It combines a raw input with optional enhancements such as a label, icon, custom styling, and integration with a system messaging feature. The component is built to be easily integrated into larger forms or UIs, offering extensive customization through props to match various design requirements.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'Label for the input',
      control: {
        type: 'text' as const,
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'select' as const,
      },
    },
    type: {
      description: 'Type of the input',
      control: {
        type: 'select' as const,
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean' as const,
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    systemMessage: {
      description: 'Error message to be displayed',
      control: {
        type: 'object' as const,
      },
    },
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text' as const,
      },
    },
    icon: {
      description: 'Icon for the input',
      control: {
        type: 'object' as const,
      },
    },
    value: {
      description: 'Value of the input',
      control: {
        type: 'text' as const,
      },
    },
    transparentBackground: {
      description: 'The input has a transparent background',
      control: {
        type: 'boolean' as const,
      },
    },
    externalStyle: {
      description: 'External style for the input',
      control: {
        type: 'object' as const,
      },
    },
    labelVariant: {
      description: 'Variant of the label',
      control: {
        type: 'select' as const,
      },
    },
    outlined: {
      description: 'Outlined input',
      control: {
        type: 'boolean' as const,
      },
    },
    outlinedBackgroundStrength: {
      description: 'Background strength of the outlined input',
      control: {
        min: 0,
        max: 1,
        step: 0.1,
        type: 'number' as const,
      },
    },
    underline: {
      description: 'Underline the input',
      control: {
        type: 'boolean' as const,
      },
    },
  },
} satisfies Meta<typeof FancyTextInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SateFunction = (args: any) => {
  const [value, setValue] = useState('');

  const handleStateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <FancyTextInput value={value} onChange={handleStateChange} {...args} />;
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <SateFunction {...args} />,
  args: {
    layer: 2,
    type: 'text' as const,
    themeType: 'primary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
  },
};

export const WithErrorState: Story = {
  render: (args) => <SateFunction {...args} />,
  args: {
    layer: 2,
    themeType: 'primary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
    systemMessage: 'error',
  },
};

export const WithSuccessState: Story = {
  render: (args) => <SateFunction {...args} />,
  args: {
    layer: 2,
    themeType: 'primary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
    systemMessage: 'success',
  },
};

export const WithInfoState: Story = {
  render: (args) => <SateFunction {...args} />,
  args: {
    layer: 2,
    themeType: 'primary',
    align: 'left',
    label: 'Label',
    icon: <SVGCheckMark />,
    systemMessage: 'info',
  },
};
