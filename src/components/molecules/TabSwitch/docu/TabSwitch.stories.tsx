import type { Meta, StoryObj } from '@storybook/react';

import TabSwitch from '../TabSwitch';

const meta = {
  component: TabSwitch,
  title: 'components/molecules/TabSwitch',
  parameters: {
    docs: {
      description: {
        component:
          'The `TabSwitch` component is a customizable switch selector, allowing users to select from multiple options presented as tabs. This component is built using the `FancyTabSwitchButton` molecule and the `SwitchActiveIndicator` atom, enabling rich styling and functionality, including customizable tab sizes, colors, orientation, and an active state indicator.',
      },
    },
  },

  argTypes: {
    wide: {
      description: 'If true, the component will be wide, using the full width of the parent container.',
      control: { type: 'boolean' as const },
    },
    sizeC: {
      description: 'The size of the component.',
      control: { type: 'select' as const, options: ['sm', 'md', 'lg'] },
    },
    textColor: {
      description: 'The color of the text.',
      control: { type: 'select' as const },
    },
    textLayer: {
      description: 'The layer of the text.',
      control: { type: 'number' as const, min: 0, max: 9 },
    },
    tabSpacing: {
      description: 'The spacing between tabs.',
      control: { type: 'select' as const },
    },
    values: {
      description: 'The list of tabs.',
      control: { type: 'object' as const },
    },
    borderRadius: {
      description: 'If true, the component will be rounded.',
      control: { type: 'select' as const },
    },
    direction: {
      description: 'The direction of the component.',
      control: { type: 'select' as const },
    },
    indicatorType: {
      description: 'The type of indicator.',
      control: { type: 'select' as const },
    },
    outlined: {
      description: 'If true, the component will be outlined.',
      control: { type: 'boolean' as const },
    },
    currentSelect: {
      description: 'The current selected tab.',
      control: { type: 'text' as const },
    },
    iconAlign: {
      description: 'The alignment of the icon.',
      control: { type: 'select' as const },
    },
    activeTextThemeType: {
      description: 'The color of the active tab.',
      control: { type: 'select' as const },
    },
    handler: {
      description: 'The handler of the component.',
      control: { type: 'object' as const },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      control: { type: 'boolean' as const },
    },
  },
} satisfies Meta<typeof TabSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <TabSwitch {...args} />,
  args: {
    values: [
      { label: 'Tab 1', itemKey: 'tab1' },
      { label: 'Tab 2', itemKey: 'tab2' },
      { label: 'Tab 3', itemKey: 'tab3' },
    ],
    currentSelect: 'tab1',
  },
};
