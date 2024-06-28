// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTextArea from '../FancyTextArea';

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { useState } from 'react';

// Define metadata for the story
const meta = {
  component: FancyTextArea,
  title: 'components/organisms/FancyTextArea',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyTextArea` component is an enhanced text area input field with customizable styling, icons, and integrated state management. It builds upon the basic `RawTextArea` component by adding features such as labels, placeholders, system messages (for errors, success, or info), and visual themes.',
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
    underline: {
      description: 'Underline the input',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FancyTextArea>;

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

  return <FancyTextArea value={value} onChange={handleStateChange} {...args} />;
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <SateFunction {...args} />,
  args: {
    layer: 2,
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
