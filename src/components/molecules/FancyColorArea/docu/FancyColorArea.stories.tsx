import type { Meta, StoryObj } from '@storybook/react';

import FancyColorArea from '../FancyColorArea';
import Color from 'color';

const meta = {
  component: FancyColorArea,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The Color area that is uses for picking a color. <br> - The ColorIndicator works wehen the color is provides again',
      },
    },
  },
  argTypes: {
    color: {
      description: 'The color that is used to display the color indicator, and sets the correct position of the marker',
    },
    hue: {
      description: 'The hue that to change the color of the area you can use 0-360deg',
    },
    handler: {
      description: 'The handler that is called when the color changes and gives back the color',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyColorArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyColorArea {...args} />,
  args: {
    color: Color('#000000'),
    hue: 0,
    handler: (color: Color) => console.log(color),
  },
};
