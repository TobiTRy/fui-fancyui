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
        type: 'range', min: 0, max: 10, step: 1,
      },
    },
    size: {
      description: 'The size of the component',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    headingText: {
      description: 'The heading text of the component',
      control: {
        type: 'text',
      },
    },
    subHeadingText: {
      description: 'The sub heading text of the component',
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyMiniProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyMiniProfile {...args}/>,
  args: {
    alignText: 'right',
    headingText: 'Hans',
    subHeadingText: 'Hans',
    imageURL: 'https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg',
    size: 'sm',
    themeType: 'primary',
    layer: 0,
    shadow: true,
  },
};

