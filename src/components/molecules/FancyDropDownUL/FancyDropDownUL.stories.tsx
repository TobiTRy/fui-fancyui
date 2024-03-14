import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyDropDownUL from './FancyDropDownUL';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyDropDownUL,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The Color area that is uses for picking a color. <br> - The ColorIndicator works wehen the color is provides again',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    isOpen: {
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FancyDropDownUL>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyDropDownUL {...args} />,
  args: {
    children: (
      <>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </>
    ),
    themeType: 'primary',
    layer: 5,
    isOpen: true,
    width: '50%',
    alignHorizontal: 'center',
    alignVertical: 'top',
  },
};
