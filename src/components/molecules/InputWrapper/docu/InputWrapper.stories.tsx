import type { Meta, StoryObj } from '@storybook/react';

import InputWrapper from '../InputWrapper';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { TextInput } from '@/components/atoms/TextInput';

const meta = {
  component: InputWrapper,
  title: 'components/molecules/InputWrapper',
  parameters: {
    docs: {
      description: {
        component:
          'InputWrapper is a comprehensive React component designed to augment form inputs by incorporating additional functionality and styling features. It facilitates the incorporation of labels, icons, and system messages (e.g., error messages) into the input fields. This component integrates several sub-components, making it highly customizable to meet diverse UI requirements.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    isActive: {
      description: 'The state of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    outlined: {
      description: 'The state of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    disabled: {
      description: 'The state of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    align: {
      description: 'The align of the component',
      control: {
        type: 'select' as const,
      },
    },
    label: {
      description: 'The label of the component',
      control: {
        type: 'text' as const,
      },
    },
    systemMessage: {
      description: 'The systemMessage of the component',
      control: {
        type: 'object' as const,
      },
    },
    hasValue: {
      description: 'The hasValue of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    autoWidth: {
      description: 'The autoWidth of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    underline: {
      description: 'The underline of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    placeholder: {
      description: 'The placeholder of the component',
      control: {
        type: 'text' as const,
      },
    },
    as: {
      description: 'The as of the component',
      control: {
        type: 'text' as const,
      },
    },
    externalStyle: {
      description: 'The externalStyle of the component',
      control: {
        type: 'object' as const,
      },
    },
    outlinedBackgroundStrength: {
      description: 'The outlinedBackgroundStrength of the component',
      control: {
        type: 'number' as const,
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    transparentBackground: {
      description: 'The transparentBackground of the component',
      control: {
        type: 'boolean' as const,
      },
    },
    InputElement: {
      description: 'The InputElement of the component',
      control: {
        type: 'object' as const,
      },
    },
    icon: {
      description: 'The icon of the component',
      control: {
        type: 'object' as const,
      },
    },
    labelVariant: {
      description: 'The labelVariant of the component in static or animated',
      control: {
        type: 'select' as const,
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'number' as const,
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
    themeType: 'primary',
    labelVariant: 'animated',
  },
};

export const WithLabelAndIcon: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    id: 'id',
    label: 'Label',
    align: 'left',
    InputElement: <TextInput />,
    themeType: 'primary',
    icon: <SVGCheckMark />,
  },
};

export const WithLabelMovedUp: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    ...Primary.args,
    hasValue: true,
    isActive: true,
  },
};

export const WithSystemMessage: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    ...Primary.args,
    systemMessage: 'error',
  },
};
