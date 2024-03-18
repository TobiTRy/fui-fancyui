import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyOpacitySlider from '../FancyOpacitySlider';
import Color from 'color';

const meta = {
  component: FancyOpacitySlider,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: Opacity Slider for pick the opacity of a color',
      },
    },
  },
  argTypes: {
    colorValue: {
      description: 'The color for the opacity slider',
    },
    opacity: {
      description: 'The opacity for the opacity slider',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    handler: {
      description: 'The handler for the opacity slider',
      control: {
        type: 'function',
      },
    },
    sizeC: {
      description: 'The size of the component',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyOpacitySlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyOpacitySlider {...args} />,
  args: {
    sizeC: 'sm',
    colorValue: Color('#ff0000'),
    opacity: 1,
  },
};
