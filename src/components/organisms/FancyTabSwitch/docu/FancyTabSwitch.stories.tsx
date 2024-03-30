import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import FancyTabSwitch from '../FancyTabSwitch';

const meta = {
  component: FancyTabSwitch,
  title: 'components/organisms/FancyTabSwitch',
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'The `FancyTabSwitch` component is a customizable tab switcher that supports advanced features such as labels, theming, and layout configurations. It leverages the `TabSwitch` component for tab functionalities and enhances it with a `FancyBox` wrapper for additional styling capabilities. This component is designed to provide a versatile tab-switching UI component with enhanced visual features.',
      },
    },
  },
  argTypes: {
    wide: {
      description: 'If true, the component will take up the full width of its container.',
      type: { name: 'boolean' },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      type: { name: 'boolean' },
    },
    sizeC: {
      description: 'The sizeC of the component.',
      control: {
        type: 'select',
      },
    },
    iconAlign: {
      description: 'The icon alignment.',
      control: {
        type: 'radio',
      },
    },
    textColor: {
      description: 'The color of the component.',
      control: {
        type: 'select',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 0),
    currentSelect: {
      description: 'The currently selected tab.',
    },
    activeColor: {
      description: 'The active color of the component.',
      control: {
        type: 'select',
      },
    },
    outlined: {
      description: 'If true, the component will be outlined.',
      type: { name: 'boolean' },
    },
    borderRadius: {
      description: 'The rounded of the component.',
      control: {
        type: 'select',
      },
    },
    label: {
      description: 'The label of the component.',
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    textLayer: {
      description: 'The text layer of the component.',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
  },
} satisfies Meta<typeof FancyTabSwitch>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyTabSwitch {...args} />,
  args: {
    values: [
      { itemKey: '1', label: 'Tab 1' },
      { itemKey: '2', label: 'Tab 2' },
      { itemKey: '3', label: 'Tab 3' },
    ],

    label: 'FancyTabSwitch',
    currentSelect: '2',
    handler: () => {
      console.log('onChange');
    },
    themeType: 'primary',
    wide: true,
    layer: 4,
    disabled: false,
  },
};
