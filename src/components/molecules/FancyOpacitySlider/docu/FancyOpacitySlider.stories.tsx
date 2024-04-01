import Color from 'color';
import type { Meta, StoryObj } from '@storybook/react';

import FancyOpacitySlider from '../FancyOpacitySlider';
import React from 'react';

const meta = {
  component: FancyOpacitySlider,
  title: 'components/molecules/FancyOpacitySlider',
  parameters: {
    docs: {
      layout: 'centered',
      description: {
        component:
          'The FancyOpacitySlider component allows users to adjust the opacity of a color. It visually represents opacity changes using a gradient slider, color indicators, and checkerboard patterns to signify transparency levels. This component is designed to provide a user-friendly interface for opacity adjustments within color manipulation tools.',
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

const OpacitySliderWithState = (args: Story['args']) => {
  const [opacity, setOpacity] = React.useState(args?.opacity ?? 1);

  return <FancyOpacitySlider {...args} opacity={opacity} handler={setOpacity} />;
};

export const Primary: Story = {
  render: (args) => <OpacitySliderWithState {...args} />,
  args: {
    sizeC: 'sm',
    colorValue: Color('#ff0000'),
    opacity: 1,
  },
};
