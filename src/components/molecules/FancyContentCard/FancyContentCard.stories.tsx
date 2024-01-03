import type { Meta, StoryObj } from '@storybook/react';

import { FancyContentCard } from '@/components/molecules/FancyContentCard';

const meta = {
  component: FancyContentCard,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The Color area that is uses for picking a color. <br> - The ColorIndicator works wehen the color is provides again',
      },
    },
  },
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof FancyContentCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyContentCard {...args} />,
  args: {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: 'https://picsum.photos/300/300',
    subtitle: 'FancyCard',
    title: 'My Fancy Product',
  },
};
