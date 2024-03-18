import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import ActionItem from '../ActionItem';
import { SVGPlus } from '@/components/icons/SVGPlus';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: ActionItem,
  title: 'components/molecules/ActionItem',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component:
          'The ActionItem component is a versatile button component designed for initiating actions within an application. It combines settings and button properties to allow for extensive customization, including label alignment, size, theme, and click behavior. This component utilizes types from custom TypeScript interfaces to ensure type safety and clarity in usage.',
      },
    },
  },
  argTypes: {
    icon: {
      description: 'The icon of the action item',
      control: { type: 'object' },
    },
    size: {
      description: 'The size of the component',
      control: { type: 'select' },
      defaultValue: {
        summary: 'md',
      },
    },
    label: {
      description: 'The label of the action item',
      control: { type: 'text' },
    },
    labelAlign: {
      description: 'The alignment of the label',
      control: { type: 'radio' },
      defaultValue: {
        summary: 'left',
      },
    },
    ...templateThemeType('notTransparent', 'primary', 0),
    isActive: {
      description: 'The active state of the action item',
      control: { type: 'boolean' },
    },
    isClickable: {
      description: 'The clickable state of the action item',
      control: { type: 'boolean' },
    },
    themeTypeActiveHover: {
      description: 'The theme type of the action item when it is active or hovered',
      control: { type: 'select' },
    },
    onClick: {
      description: 'The click event of the action item',
      action: 'clicked',
    },
  },
} satisfies Meta<typeof ActionItem>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    layer: 0,
    themeType: 'primary',
    themeTypeActiveHover: 'accent',
    labelAlign: 'left',
    size: 'md',
    isActive: false,
    isClickable: true,
    onClick: () => console.log('clicked'),
    label: 'This is a label',
    icon: <SVGPlus />,
  },
  render: (args) => <ActionItem {...args}>{'This is a label'}</ActionItem>,
};
