import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyHueSlider from './FancyHueSlider';
import Color from 'color';

const meta = {
  component: FancyHueSlider,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The Color area that is uses for picking a color. <br> - The ColorIndicator works wehen the color is provides again',
      },
    },
  },
  argTypes: {
    hue: {
      description: 'The hue of the color',
      control: {
        type: 'number',
        min: 0,
        max: 360,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyHueSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyHueSlider {...args} />,
  args: {
    hue: 0,
    color: Color('hsl(0, 100%, 50%)'),
  },
};
