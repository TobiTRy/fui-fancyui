import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import FancyTabSwitch from '../FancyTabSwitch';

const meta = {
  component: FancyTabSwitch,
  title: 'components/organisms/FancyTabSwitch',
  parameters: {
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
    switchIndicatorThemeType: {
      description: 'The active color of the component.',
      control: {
        type: 'select',
      },
    },
    activeTextThemeType: {
      description: 'The active text color of the component.',
      control: {
        type: 'select',
      },
      table: {
        summary: 'secondary',
      },
    },
    outlined: {
      description: 'If true, the component will be outlined.',
      type: { name: 'boolean' },
    },
    borderRadius: {
      description: 'The rounded of the component.',
      control: {
        type: 'object',
      },
    },
    label: {
      description: 'The label of the component.',
      type: { name: 'string' },
      control: {
        type: 'text',
      },
    },
    spacingToEdge: {
      description: 'The spacing to the edge of the component.',
      control: {
        type: 'select',
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
    sizeC: 'sm',
    indicatorType: 'bolb',
    label: 'FancyTabSwitch',
    currentSelect: '2',
    handler: () => {
      console.log('onChange');
    },
    themeType: 'primary',
    wide: true,
    layer: 2,
    disabled: false,
  },
};

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);
const switchValues2 = [
  { itemKey: '1', value: 'Tab 1', icon: Icon },
  { itemKey: '2', value: 'Tab 2', icon: Icon },
  { itemKey: '3', value: 'Tab 3', icon: Icon },
  { itemKey: '4', value: 'Tab 1', icon: Icon },
  { itemKey: '5', value: 'Tab 2', icon: Icon },
  { itemKey: '6', value: 'Tab 3', icon: Icon },
];

export const Secondary: Story = {
  render: (args) => <FancyTabSwitch {...args} />,
  args: {
    values: switchValues2,
    sizeC: 'sm',
    label: 'FancyTabSwitch',
    currentSelect: '2',
    handler: () => {
      console.log('onChange');
    },
    themeType: 'primary',
    wide: true,
    layer: 2,
    disabled: false,
  },
};
