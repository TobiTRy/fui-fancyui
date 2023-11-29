import React from 'react';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark/SVGCheckMark';

import type { Meta, StoryObj } from '@storybook/react';

import FancyContent from './FancyContent';

const meta = {
  component: FancyContent,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: It handles the simple Conentent of a component. Like for a Button or Chip etc.',
      },
    },
  },
  argTypes: {
    flexDirection: {
      description: 'The flex direction of the component',
      control: {
        type: 'select',
      },
    },
    flexJustify: {
      description: 'The flex justify of the component',
      control: {
        type: 'select',
      },
    },
    flexAlign: {
      description: 'The flex align of the component',
      control: {
        type: 'select',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGCheckMark />
      </FancyContent.Icon>
      <FancyContent.Title>Text</FancyContent.Title>
    </FancyContent>
  ),
  args: {},
};
