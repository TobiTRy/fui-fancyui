import Color from 'color';

import type { Meta, StoryObj } from '@storybook/react';

import FancyColorInput from '../FancyColorInput';

const meta = {
  component: FancyColorInput,
  title: 'components/molecules/FancyColorInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyColorInput` component dynamically adapts its color output to various formats like RGB, RGBA, HSL, HSLA, HEX, and HEXA based on user input. It utilizes the `color` library to handle color transformations and state management to keep track of the current color and format. The component also provides a mechanism to switch between color formats and communicate color changes back to the parent component through callback functions.',
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
      description: ' A callback function that is invoked when the color format type changes.',
      control: {
        type: 'function',
      },
    },
    handler: {
      description: 'A callback function that is invoked when the color value changes.',
      control: {
        type: 'function',
      },
    },
    handlerOpacity: {
      description: 'A callback function that is invoked when the opacity value changes.',
      control: {
        type: 'function',
      },
    },
    currentColorType: {
      description: 'The current color type',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyColorInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyColorInput {...args} />,
  args: {
    pickedColor: Color('#ff0000'),
    opacity: 1,
    colorTypeHandler: (colorType: string) => console.log(colorType),
    handler: (color: Color) => console.log(color),
    handlerOpacity: (opacity: number) => console.log(opacity),
  },
};
