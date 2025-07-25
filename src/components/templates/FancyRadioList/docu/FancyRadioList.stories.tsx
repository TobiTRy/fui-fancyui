import type { Meta, StoryObj } from '@storybook/react';

import FancyRadioList from '../FancyRadioList';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyRadioList,
  title: 'components/templates/FancyRadioList',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyRadioList` is a React component designed to render a dynamic list of radio buttons, allowing users to select a single option from multiple choices. It incorporates a keyboard navigation feature, enabling users to navigate through options using arrow keys. The component is styled and organized within a `Fieldset` and `FancyListBox`, providing a structured and visually appealing interface.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 1),
    outlined: {
      description: 'The component has a outline style',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outline',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.01,
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
  },
} satisfies Meta<typeof FancyRadioList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyRadioList {...args} />,
  args: {
    legend: 'FancyRadioList',
    alignLegend: 'left',
    disabled: false,
    themeType: 'primary',
    layer: 1,
    outlined: false,
    outlinedBackgroundStrength: 0.5,

    items: [
      {
        title: 'Item 1',
        itemKey: '1',
      },
      {
        title: 'Item 2',
        description: 'Description 2',
        itemKey: '2',
      },
      {
        title: 'Item 3',
        description: 'Description 3',
        itemKey: '3',
      },
    ],
    name: 'radio',
  },
};
