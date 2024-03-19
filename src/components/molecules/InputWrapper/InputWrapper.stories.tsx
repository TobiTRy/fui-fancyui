import type { Meta, StoryObj } from '@storybook/react';

import InputWrapper from './InputWrapper';
import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { TextInput } from '@/components/atoms/TextInput';

const meta = {
  component: InputWrapper,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The InputWrapper component that can be used to wrap a input component via the InputElement. <br> ',
      },
    },
  },
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    isActive: {
      description: 'The state of the component',
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      description: 'The state of the component',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'The state of the component',
      control: {
        type: 'boolean',
      },
    },
    align: {
      description: 'The align of the component',
      control: {
        type: 'select',
      },
    },
    label: {
      description: 'The label of the component',
      control: {
        type: 'text',
      },
    },
    systemMessage: {
      description: 'The systemMessage of the component',
      control: {
        type: 'object',
      },
    },
    hasValue: {
      description: 'The hasValue of the component',
      control: {
        type: 'boolean',
      },
    },
    autoWidth: {
      description: 'The autoWidth of the component',
      control: {
        type: 'boolean',
      },
    },
    underline: {
      description: 'The underline of the component',
      control: {
        type: 'boolean',
      },
    },
    placeholder: {
      description: 'The placeholder of the component',
      control: {
        type: 'text',
      },
    },
    as: {
      description: 'The as of the component',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'The externalStyle of the component',
      control: {
        type: 'object',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The outlinedBackgroundStrength of the component',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    transparentBackground: {
      description: 'The transparentBackground of the component',
      control: {
        type: 'boolean',
      },
    },
    InputElement: {
      description: 'The InputElement of the component',
      control: {
        type: 'object',
      },
    },
    icon: {
      description: 'The icon of the component',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof InputWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    id: 'id',
    label: 'Label',
    align: 'left',
    InputElement: <TextInput />,
    icon: <SVGCheckMark />,
  },
};

export const Secondary: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    ...Primary.args,
    themeType: 'secondary',
  },
};
