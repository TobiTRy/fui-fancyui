import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyBottomBarStatic from './BottomBar';

const meta = {
  component: FancyBottomBarStatic,
  parameters: {
    docs: {
      description: {
        component:
          'Smart-Comonent:  This component shows a bar with icons and labels. <br> It is handled by a store to show and hide the bar and to (set/get) the active button.',
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
    isVisible: {
      description: 'This prop will show or hide the bar / props musst be received before the component is rendered',
      control: {
        type: 'boolean',
      },
    },
    layer: {
      description: 'This prop will change the layer of the bar',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyBottomBarStatic>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyBottomBarStatic {...args} />,
  args: {},
};
