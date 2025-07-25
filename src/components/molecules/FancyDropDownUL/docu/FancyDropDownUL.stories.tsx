import type { Meta, StoryObj } from '@storybook/react';

import FancyDropDownUL from '../FancyDropDownUL';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyDropDownUL,
  title: 'components/molecules/FancyDropDownUL',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyDropDownUL component is a customizable dropdown list component in React, designed to provide a flexible way to display a list of items with various design and alignment options.',
      },
      story: {
        height: '300px',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    isOpen: {
      description: 'This prop is used to open and close the dropdown list.',
      control: { type: 'boolean' },
    },
    width: {
      description: 'This prop is used to set the width of the dropdown list.',
      control: { type: 'text' },
    },
    alignHorizontal: {
      description: 'This prop is used to set the horizontal alignment of the dropdown list.',
      control: { type: 'select', options: ['left', 'center', 'right'] },
    },
    alignVertical: {
      description: 'This prop is used to set the vertical alignment of the dropdown list.',
      control: { type: 'select', options: ['top', 'center', 'bottom'] },
    },
    borderRadius: {
      description: 'This prop is used to set the border radius of the dropdown list.',
      control: { type: 'select' },
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
