import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import PasswordInput from '../PasswordInput';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: PasswordInput,
  title: 'components/atoms/PasswordInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `PasswordInput` component is a React component designed for input fields where users can enter passwords. This component integrates a visibility toggle feature, represented by an eye icon, allowing users to switch between showing or hiding their password. It leverages the `PasswordEye` component for the toggle functionality and wraps the input field with a styled wrapper to position the toggle icon appropriately. This component supports customization and theming through various props, making it versatile for different design requirements.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    value: {
      description: 'The value of the input.',
      type: { name: 'string' },
    },
    align: {
      description: 'The align of the input.',
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    customEyeCrossed: {
      description: 'The customEyeCrossed of the input.',
    },
    customEyeOpen: {
      description: 'The customEyeOpened of the input.',
    },
  },
} satisfies Meta<typeof PasswordInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <PasswordInput {...args} />,
  args: {
    value: '',
    align: 'left',
    themeType: 'secondary',
    layer: 4,
  },
};
