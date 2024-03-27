// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDropDownSelect from '../FancyDropDownSelect';

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { useState } from 'react';

// Define metadata for the story
const meta = {
  component: FancyDropDownSelect,
  title: 'components/organisms/FancyDropDownSelect',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyDropDownSelect component is an enhanced dropdown select input that integrates additional UI features such as icons, labels, and an underline. It is designed to provide a more visually appealing and user-friendly interface for selection inputs. The component is built on top of the basic DropDownSelect component and is wrapped with the InputWrapper to include these extra UI enhancements.',
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
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'radio',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    systemMessage: {
      description: 'Systemmessage to be displayed',
      control: {
        type: 'object',
      },
    },
    values: {
      description: 'Values for the dropdown',
      control: {
        type: 'array',
      },
    },
    value: {
      description: 'The picked value of the dropdown',
      control: {
        type: 'text',
      },
    },
    emptySelect: {
      description: 'A Empty Item that is selectable',
      control: {
        type: 'boolean',
      },
    },
    transparentBackground: {
      description: 'Transparent Background',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    outlined: {
      description: 'Is the dropdown outlined',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FancyDropDownSelect>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

const HelperFunctionForState = (args: any) => {
  const [value, setValue] = useState('');

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return <FancyDropDownSelect value={value} onChange={changeHandler} {...args} />;
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperFunctionForState {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Label',
    values: ['test1', 'test2', 'test3'],
    themeType: 'primary',
    layer: 2,
    align: 'left',
  },
};

export const WithKeyValue: Story = {
  render: (args) => <HelperFunctionForState {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Label',
    values: [
      { key: 'test1', value: 'test1' },
      { key: 'test2', value: 'test2' },
      { key: 'test3', value: 'test3' },
    ],
  },
};

export const WithErrorState: Story = {
  render: (args) => <HelperFunctionForState {...args} />,
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
  render: (args) => <HelperFunctionForState {...args} />,
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
  render: (args) => <HelperFunctionForState {...args} />,
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
