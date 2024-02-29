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
        component: 'Dumb-Comonent: A PasswordInput component to input password',
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
      defaultValue: { summary: 'left' },
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
