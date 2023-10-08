import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyVideoText from './FancyVideoText';

const meta = {
  component: FancyVideoText,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Dumb-Comonent: A FancyVideoText component. <br> It is a video with text on top.',    
      },
    },
  },
  argTypes: {
    aspectRatio: {
      description: 'The aspect ratio of the component.',
    },
    position: {
      description: 'The position of the component.',
      control: {
        type: 'select',
      },
    },
    src: {
      description: 'The video source.',
    },
    autoPlay: {
      description: 'If true, the video will start playing automatically.',
      type: { name: 'boolean' },
    },
    muted: {
      description: 'If true, the video will be muted.',
      type: { name: 'boolean' },
    },
    loop: {
      description: 'If true, the video will loop.',
      type: { name: 'boolean' },
    },
    controls: {
      description: 'If true, the video will have controls.',
      type: { name: 'boolean' },
    },
    poster: {
      description: 'The video poster.',
      type: { name: 'string' },
    },
    darken: {
      description: 'If true, the image will be darkened.',
      type: { name: 'boolean' },
    },


  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyVideoText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyVideoText {...args}/>,
  args: {
    src: 'https://www.w3schools.com/html/mov_bbb.mp4',
    autoPlay: true,
    aspectRatio: '16/9',
    position: 'top-left',
    children: [
        <p>Top Right</p>,
    ],

  }
};

