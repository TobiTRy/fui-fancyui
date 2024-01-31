import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyMiniProfile from './FancyMiniProfile';

const meta = {
  component: FancyMiniProfile,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: A MiniProfile component is show a small profile with a picture, name and a short description.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The color theme of the component',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
    },
    sizeC: {
      description: 'The sizeC of the component',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    title: {
      description: 'The heading text of the component',
      control: {
        type: 'text',
      },
    },
    subTitle: {
      description: 'The sub heading text of the component',
      control: {
        type: 'text',
      },
    },
    alignImage: {
      description: 'The alignment of the image',
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyMiniProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyMiniProfile {...args} />,
  args: {
    alignImage: 'right',
    title: 'Hans',
    subTitle: 'Hans',
    src: 'https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg',
    sizeC: 'sm',
    themeType: 'primary',
    layer: 0,
    shadow: true,
  },
};
