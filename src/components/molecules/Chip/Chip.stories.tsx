import type { Meta, StoryObj } from '@storybook/react';

import Chip from './Chip';

const meta = {
  component: Chip,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent:  A Simple Chip Component you can put everything in.',
      },
    },
  },
  argTypes: {
    sizeC: {
      description: 'The sizeC of the button.',
      control: {
        type: 'select',
      },
    },
    themeType: {
      description: 'The theme type of the button.',
      control: {
        type: 'select',
      },
    },
    isActive: {
      description: 'The active state of the button.',
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      description: 'The outlined state of the button.',
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      description: 'The onClick event of the button.',
      control: {
        type: 'function',
      },
    },
    textColor: {
      description: 'The text color of the button.',
      control: {
        type: 'select',
      },
    },
    textLayer: {
      description: 'The text layer of the button.',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
    layer: {
      description: 'The layer of the button.',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Chip {...args} />,
  args: {
    layer: 3,
    sizeC: 'sm',
    outlined: false,
    themeType: 'primary',
    isActive: false,
  },
};
