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
    textLayer: {
      description: 'The layer of the text.',
      control: { type: 'number', min: 0, max: 9 },
    },
    tabSpacing: {
      description: 'The spacing between tabs.',
      control: { type: 'select' },
    },
    values: {
      description: 'The list of tabs.',
      control: { type: 'object' },
    },
    borderRadius: {
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
    disabled: {
      description: 'If true, the component will be disabled.',
      control: { type: 'boolean' },
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
