import type { Meta, StoryObj } from '@storybook/react';

import FancyColorArea from '../FancyColorArea';
import Color from 'color';

const meta = {
  component: FancyColorArea,
  title: 'components/molecules/FancyColorArea',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyColorArea` component is designed for selecting a color by interacting with a color area, featuring gradients for lightness and saturation, and displaying the currently picked color. This component relies on the `ColorIndicator` atom from the UI library to showcase the selected color, ensuring it´s essential to mention its use within the molecule construction of `FancyColorArea`',
      },
    },
  },
  argTypes: {
    colorValue: {
      control: {
        type: 'color',
      },
      description: 'The color that is used to display the color indicator, and sets the correct position of the marker',
    },
    hue: {
      control: {
        type: 'range',
        min: 0,
        max: 359,
        step: 1,
      },
      description: 'The hue that to change the color of the area you can use 0-359deg',
    },
    handler: {
      description: 'The handler that is called when the color changes and gives back the color',
    },
    externalStyle: {
      description: 'The external style that can be used to style the area',
    },
  },
} satisfies Meta<typeof FancyColorArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyColorArea {...args} />,
  args: {
    colorValue: '#f00',
    hue: 0,
    handler: (color: Color) => console.log(color),
    externalStyle: {},
  },
};
