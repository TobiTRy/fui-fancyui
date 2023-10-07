import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyImageText from './FancyImageText';

const meta = {
  component: FancyImageText,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: A FancyImageText component is a combination of a FancyImage and a ImageVideoOverlay component.<br> - It is used to display an image with text on top of it.',    
      },
    },
  },
  argTypes: {
    darken: {
      description: 'Darken the image',
      type: { name: 'boolean'},
    },
    link: {
      description: 'Link when the image is clicked',
      type: { name: 'string'},
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyImageText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyImageText {...args}>
    <h1>Hiii</h1>
    <p>Test ohne Test</p>
  </FancyImageText>,
  args: {
    imageUrl: 'https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg',
    aspectRatio: '1/1', // e.g. "16/9"
    darken: false,
    link: 'https://www.google.com',
    alt: 'This is an image',
  },
};

