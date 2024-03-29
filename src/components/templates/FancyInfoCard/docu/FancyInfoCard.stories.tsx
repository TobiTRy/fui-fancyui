import type { Meta, StoryObj } from '@storybook/react';

import FancyInfoCard from '../FancyInfoCard';

const meta = {
  component: FancyInfoCard,
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyInfoCard` component is designed to display an information card with optional icon, title, and description. It integrates `FancyBox` for styling and layout purposes and allows for customizable alignment, sizing, and background options. This component is ideal for displaying concise information in a visually appealing manner.',
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
        defaultValue: { summary: 10 },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyInfoCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyInfoCard {...args} />,
  args: {
    icon: <> 🌇 </>,
    title: 'This is a InfoCard',
    description: 'This is a InfoCard',
    themeType: 'primary',
    layer: 1,
  },
};
