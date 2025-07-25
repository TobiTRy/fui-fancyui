import type { Meta, StoryObj } from '@storybook/react';

import FancyCheckbox from '../FancyCheckbox';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyCheckbox,
  title: 'components/organisms/FancyCheckbox',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyCheckbox` is a React component designed to provide a visually enhanced checkbox experience. It utilizes a label and optional description to offer more context to the user. The component is flexible, allowing alignment adjustments for both the checkbox and its associated text. `FancyCheckbox` integrates the `RawCheckbox` atom and the `FancySelectWrapper` molecule, combining their functionalities to create a cohesive user interface element.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'The text to display alongside the checkbox.',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'Provides additional context or information below the label.',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'Aligns the entire component (checkbox, label, and description).',
      control: {
        type: 'select',
      },
    },
    alignCheckbox: {
      description: ' Aligns the checkbox relative to the label and description.',
      control: {
        type: 'select',
      },
    },
    defaultChecked: {
      description: 'Sets the initial state of the checkbox.',
      control: {
        type: 'boolean',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 3),
  },
} satisfies Meta<typeof FancyCheckbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyCheckbox {...args} />,
  args: {
    label: 'Label',
    description: 'Description',
    align: 'left',
    alignCheckbox: 'left',
    defaultChecked: true,
    themeType: 'primary',
    layer: 3,
  },
};
