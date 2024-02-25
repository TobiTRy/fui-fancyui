import type { Meta, StoryObj } from '@storybook/react';

import DateInput from './DateInput';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: DateInput,
  parameters: {
    docs: {
      description: {
        component:
          'Only a blank input: The DateInput is a component that allows the user to select a date from a calendar. ',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'secondary', 0),
    type: {
      description: 'The type of the input.',
      defaultValue: 'date',
      control: {
        type: 'select',
      },
    },
    align: {
      description: 'The alignment of the input.',
      defaultValue: 'center',
      control: {
        type: 'select',
      },
    },
    value: {
      description: 'The value of the input.',
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateInput {...args} />,
  args: {
    value: '2021-01-01',
    align: 'center',
    type: 'date',
    themeType: 'secondary',
    layer: 0,
  },
};
