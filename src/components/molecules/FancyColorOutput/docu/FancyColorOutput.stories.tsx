import Color from 'color';

import type { Meta, StoryObj } from '@storybook/react';

import FancyColorOutput from '../FancyColorOutput';

const meta = {
  component: FancyColorOutput,
  title: 'components/molecules/FancyColorOutput',
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The Color area that is uses for picking a color. <br> - The ColorIndicator works wehen the color is provides again',
      },
    },
  },
  argTypes: {
    opacity: {
      description: 'The opacity value of the color',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.01,
      },
    },
    pickedColor: {
      description: 'The color that is picked',
      control: {
        type: 'object',
      },
    },
    colorTypeHandler: {
      description: 'The color type handler',
      control: {
        type: 'function',
      },
    },
    handler: {
      description: 'The handler for the color',
      control: {
        type: 'function',
      },
    },
    handlerOpacity: {
      description: 'The handler for the opacity',
      control: {
        type: 'function',
      },
    },
    initialColorType: {
      description: 'The current color type',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyColorOutput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyColorOutput {...args} />,
  args: {
    pickedColor: Color('#ff0000'),
    opacity: 1,
    colorTypeHandler: (colorType: string) => console.log(colorType),
    handler: (color: Color) => console.log(color),
    handlerOpacity: (opacity: number) => console.log(opacity),
  },
};
