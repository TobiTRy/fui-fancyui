// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDateInput from '../FancyDateInput';
import { SVGCheckMark } from '@/components/icons';
import { useState } from 'react';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyDateInput,
  title: 'components/organisms/FancyDateInput',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyDateInput` is a customizable date input component for React applications, encapsulating functionality such as displaying an icon, a label, system messages, and handling various input states like active, disabled, and filled. It´s designed to provide a richer user experience compared to standard date inputs.',
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
    },
    value: {
      description: 'Value of the input',
      control: {
        type: 'text' as const,
      },
    },
    type: {
      description: 'Type of the input',
      control: {
        type: 'select' as const,
      },
      table: {
        defaultValue: { summary: 'date' },
      },
    },
    transparentBackground: {
      description: 'Transparent background of the input',
      control: {
        type: 'boolean' as const,
      },
      table: {
        defaultValue: { summary: 'false' },
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
    underline: {
      description: 'Underline of the input',
      control: {
        type: 'boolean' as const,
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
  },
} satisfies Meta<typeof FancyDateInput>;

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
  return <FancyDateInput value={value} onChange={handleChange} {...props} />;
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    underline: false,
    placeholder: 'PlaceHolder',
    themeType: 'primary',
    layer: 2,
    icon: <SVGCheckMark />,
  },
};

export const WithErrorState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: 'error',
  },
};

export const WithSuccessState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: 'success',
  },
};

export const WithInfoState: Story = {
  render: (args) => <HelperFunctions {...args} />,
  args: {
    label: 'Date',
    align: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 2,
    systemMessage: 'info',
  },
};
