import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyCard from './FancyCard';

const meta = {
  component: FancyCard,
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
} satisfies Meta<typeof FancyCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyCard {...args} />,
  args: {
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    image: 'https://picsum.photos/300/300',
    subtitle: 'FancyCard',
    title: 'My Fancy Product',
  },
};
