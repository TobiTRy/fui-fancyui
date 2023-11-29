import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyModalHeadLine from './FancyModalHeadLine';

const meta = {
  component: FancyModalHeadLine,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The main HeadLineComponent for the heading for the modals and other components',
      },
    },
  },
  argTypes: {
    alignCenter: {
      description: 'Aligns the text in the center',
      control: {
        type: 'boolean',
      },
    },
    title: {
      description: 'The title of the HeadLine',
      control: {
        type: 'text',
      },
    },
    subTitle: {
      description: 'The subTitle of the HeadLine',
      control: {
        type: 'text',
      },
    },
    hr: {
      description: 'Adds a horizontal line after the HeadLine',
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyModalHeadLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyModalHeadLine {...args} />,
  args: {
    alignCenter: true,
    title: 'Title',
    subTitle: 'SubTitle',
    hr: true,
  },
};
