import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SimpleHeader from './SimpleHeader';

const meta = {
  component: SimpleHeader,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A simple header component to display a header with slots',
      },
    },
  },

  argTypes: {
    themeType: {
      description: 'The theme type of the header.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the header.',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
      defaultValue: {
        summary: 1,
      },
    },
    headerHeight: {
      description: 'The height of the header.',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '3rem',
      },
    },
    spacingLeftRight: {
      description: 'The spacing of the header.',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '0',
      },
    },
    leftSlot: {
      description: 'The left slot of the header. <br> <code>{<br>component: <b>Component</b>,<br>scale: <b>1</b>,<br>toOpenComponent: <b>Component</b><br>}</code>',
    },
    middeSlot: {
      description: 'The left slot of the header. <br> <code>{<br>component: <b>Component</b>,<br>scale: <b>1</b>,<br>toOpenComponent: <b>Component</b><br>}</code>',
    },
    rightSlot: {
      description: 'The left slot of the header. <br> <code>{<br>component: <b>Component</b>,<br>scale: <b>1</b>,<br>toOpenComponent: <b>Component</b><br>}</code>',
    }
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SimpleHeader>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SimpleHeader {...args} />,
  args: {
    layer: 1,
  },
};
