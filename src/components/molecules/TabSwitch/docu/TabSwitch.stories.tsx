import type { Meta, StoryObj } from '@storybook/react';

import TabSwitch from '../TabSwitch';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: TabSwitch,
  title: 'components/molecules/TabSwitch',
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },

  argTypes: {
    wide: {
      description: 'If true, the component will be wide, using the full width of the parent container.',
      control: { type: 'boolean' },
    },
    sizeC: {
      description: 'The size of the component.',
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
    },
    textColor: {
      description: 'The color of the text.',
      control: { type: 'select' },
    },
    ...templateThemeType('allThemeTypes', 'primary', 1),
    tabSpacing: {
      description: 'The spacing between tabs.',
      control: { type: 'select' },
    },
    values: {
      description: 'The list of tabs.',
      control: { type: 'object' },
    },
    rounded: {
      description: 'If true, the component will be rounded.',
      control: { type: 'select' },
    },
    direction: {
      description: 'The direction of the component.',
      control: { type: 'select' },
    },
    indicatorType: {
      description: 'The type of indicator.',
      control: { type: 'select' },
    },
    outlined: {
      description: 'If true, the component will be outlined.',
      control: { type: 'boolean' },
    },
    id: {
      description: 'The id of the component.',
      control: { type: 'text' },
    },
    currentSelect: {
      description: 'The current selected tab.',
      control: { type: 'text' },
    },
    iconAlign: {
      description: 'The alignment of the icon.',
      control: { type: 'select' },
    },
    activeColor: {
      description: 'The color of the active tab.',
      control: { type: 'select' },
    },
    handler: {
      description: 'The handler of the component.',
      control: { type: 'function' },
    },
  },
} satisfies Meta<typeof TabSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <TabSwitch {...args} />,
  args: {},
};
