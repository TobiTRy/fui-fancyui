import type { Meta, StoryObj } from '@storybook/react';

import FancyHueSlider from '../FancyHueSlider';

const meta = {
  component: FancyHueSlider,
  title: 'components/molecules/FancyHueSlider',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyHueSlider` component is a React component designed to allow users to select a hue value through a visually interactive slider. It utilizes a gradient background to represent the hue spectrum and provides real-time feedback by displaying the current hue value as the user interacts with the slider.',
      },
    },
  },
  argTypes: {
    hue: {
      description: 'The current hue value of the slider',
      control: {
        type: 'number',
        min: 0,
        max: 359,
      },
    },
    handler: {
      description: 'The handler function for the hue change',
      action: 'handler',
    },
    borderRadius: {
      description: 'The border radius of the slider',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the component',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyHueSlider>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyHueSlider {...args} />,
  args: {
    hue: 0,
    sizeC: 'sm',
  },
};
