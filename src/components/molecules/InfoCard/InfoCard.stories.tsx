import type { Meta, StoryObj } from '@storybook/react';

import InfoCard from './InfoCard';

const meta = {
  component: InfoCard,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: Thats only the Style of the InfoCard, it accepts all kind of children.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
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
        summary: 10,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof InfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <InfoCard {...args} />,
  args: {
    children: 'This is a InfoCard',
    themeType: 'primary',
    layer: 1,
  },
};
