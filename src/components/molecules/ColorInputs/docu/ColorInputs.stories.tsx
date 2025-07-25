import type { Meta, StoryObj } from '@storybook/react';

import ColorInputs from '../ColorInputs';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: ColorInputs,
  title: 'components/molecules/ColorInputs',
  parameters: {
    docs: {
      description: {
        component:
          'The `ColorInputs` component is designed to facilitate the input of color values in various formats such as RGB, RGBA, HSL, HSLA, HEX, and HEXA. It dynamically generates input fields suitable for each color type, allowing users to specify color values conveniently. The component relies on the `currentColorObject` to determine the type of input fields to render and uses a callback function `handler` to update the parent component with changes.',
      },
    },
  },
  argTypes: {
    currentColorObject: {
      description: 'The current color object',
      control: {
        type: 'object',
      },
    },
    handler: {
      description: 'The handler for the color',
      control: {
        type: 'function',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 0),
  },
} satisfies Meta<typeof ColorInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ColorInputs {...args} />,
  args: {
    currentColorObject: {
      type: 'rgb',
      color: {
        r: 255,
        g: 255,
        b: 255,
      },
    },
    handler: ({ inputLetter, value }) => {
      console.log(inputLetter, value);
    },
    themeType: 'primary',
    layer: 0,
  },
};
