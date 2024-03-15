import type { Meta, StoryObj } from '@storybook/react';

import FancySpeedDialButton from '../FancySpeedDailButton';

const meta = {
  component: FancySpeedDialButton,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Smart-Comonent: a Button that opens a SpeedDialMenue with a list of Buttons.',
      },
    },
  },
  argTypes: {
    labelAlign: {
      description: 'The alignment of the label',
      control: { type: 'radio' },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancySpeedDialButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancySpeedDialButton {...args} />,
  args: {
    items: [
      {
        label: 'Test',
        icon: <div>Test</div>,
      },
      {
        label: 'Test',
        icon: <div>Test</div>,
      },
    ],
    size: 'md',
    labelAlign: 'right',
  },
};
