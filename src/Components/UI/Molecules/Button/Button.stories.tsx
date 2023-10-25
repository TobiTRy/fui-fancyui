import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

const meta = {
  component: Button,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent:  This component is a button with a lot of props to change the style.',
          
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'This prop will change the color of the bar',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'This prop will change the layer of the bar',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
    },
    outlined: {
      description: 'This prop will change the Nutton to outlined',
      control: {
        type: 'boolean',
      },
    },
    borderRadius: {
      description: 'This prop will change the borderRadius of the button',
      control: {
        type: 'select',
      },
    },
    textColor: {
      description: 'This prop will change the color of the text',
      control: {
        type: 'select',
      },
    },
    hoverColor: {
      description: 'This prop will change the color of the hover',
      control: {
        type: 'select',
      },
    },
    wide: {
      description: 'This prop will change the width of the button',
      control: {
        type: 'boolean',
      },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args} />,
  args: {
    themeType: 'accent',
    size: 'md',
    layer: 0,
    outlined: false,
    borderRadius: 'md',
    wide: false,
  },
};

export const Outlined: Story = {
  render: (args) => <Button {...args} />,
  args: {
    themeType: 'accent',
    size: 'md',
    layer: 0,
    outlined: true,
    borderRadius: 'md',
    wide: false,
  },
};

export const oneToOne: Story = {
  render: (args) => <Button {...args} />,
  args: {
    themeType: 'accent',
    size: 'md',
    layer: 0,
    outlined: true,
    borderRadius: 'md',
    wide: false,
  },
};