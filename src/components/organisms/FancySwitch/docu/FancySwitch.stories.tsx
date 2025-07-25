import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import FancySwitch from '../FancySwitch';
import { SVGCheckMark, SVGXlg } from '@/components/icons';

const meta = {
  component: FancySwitch,
  title: 'components/organisms/FancySwitch',
  parameters: {
    docs: {
      description: {
        component:
          'The FancySwitch component is a versatile toggle switch organism designed to provide a modern, accessible switch input. It supports multiple sizes, theme colors, labels, icons, and states, making it suitable for a wide range of use cases where a toggle interaction is required.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'primary', 1),
    sizeC: {
      description: 'This prop will change the size of the switch',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      control: {
        type: 'select' as const,
      },
    },
    checked: {
      description: 'The checked state of the switch',
      control: {
        type: 'boolean' as const,
      },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      control: {
        type: 'boolean' as const,
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    label: {
      description: 'The label text for the switch',
      control: {
        type: 'text' as const,
      },
    },
    alignSwitch: {
      description: 'This prop will position the switch to the left or right of the label',
      options: ['left', 'right'],
      control: {
        type: 'radio' as const,
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    align: {
      description: 'This prop will align the entire component',
      options: ['left', 'right', 'center'],
      control: {
        type: 'radio' as const,
      },
      table: {
        defaultValue: { summary: 'center' },
      },
    },
    description: {
      description: 'Description text for the switch',
      control: {
        type: 'text' as const,
      },
    },
    icon: {
      description: 'Icon to display when switch is unchecked',
      control: {
        type: 'object' as const,
      },
    },
    checkedIcon: {
      description: 'Icon to display when switch is checked',
      control: {
        type: 'object' as const,
      },
    },
    externalStyle: {
      description: 'This prop will change the style of the switch',
      control: {
        type: 'object' as const,
      },
    },
  },
} satisfies Meta<typeof FancySwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'md',
    checked: false,
    disabled: false,
    layer: 0,
  },
};

export const WithLabel: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'md',
    label: 'Enable notifications',
    checked: false,
    disabled: false,
    layer: 0,
  },
};

export const SwitchRight: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'md',
    label: 'Dark mode',
    alignSwitch: 'right',
    checked: false,
    disabled: false,
    layer: 0,
  },
};

export const WithIcons: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'md',
    icon: <SVGXlg />,
    checkedIcon: <SVGCheckMark />,
    checked: false,
    disabled: false,
    layer: 0,
  },
};

export const Checked: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'md',
    label: 'Enabled',
    checked: true,
    disabled: false,
    layer: 0,
  },
};

export const Disabled: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'md',
    label: 'Disabled switch',
    checked: false,
    disabled: true,
    layer: 0,
  },
};

export const Secondary: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'secondary',
    sizeC: 'md',
    label: 'Secondary theme',
    checked: true,
    disabled: false,
    layer: 0,
  },
};

export const Success: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'success',
    sizeC: 'md',
    label: 'Success theme',
    checked: true,
    disabled: false,
    layer: 0,
  },
};

export const SmallSize: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'sm',
    label: 'Small switch',
    checked: false,
    disabled: false,
    layer: 0,
  },
};

export const LargeSize: Story = {
  render: (args) => <FancySwitch {...args} />,
  args: {
    themeType: 'primary',
    sizeC: 'lg',
    label: 'Large switch',
    checked: false,
    disabled: false,
    layer: 0,
  },
};
