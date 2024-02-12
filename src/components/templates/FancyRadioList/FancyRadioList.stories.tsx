import type { Meta, StoryObj } from '@storybook/react';

import FancyRadioList from './FancyRadioList';

const meta = {
  component: FancyRadioList,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyRadioList Renders a Styled Box with a list of RadioButtons and a label.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      defaultValue: {
        summary: 1,
      },
    },
    outlined: {
      description: 'The component has a outline style',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
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
      defaultValue: {
        summary: 1,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyRadioList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyRadioList {...args} />,
  args: {
    label: 'FancyRadioList',
    alignLabel: 'left',
    fontVariantLegend: 'h3',
    disabled: false,
    themeType: 'primary',
    layer: 1,
    outlined: false,
    outlinedBackgroundStrength: 1,

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
