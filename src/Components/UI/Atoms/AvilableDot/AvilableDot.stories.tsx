// AvailableDot.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';

import AvailableDot from './AvailableDot';

const meta = {
  component: AvailableDot,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
  },
  argTypes: {
    $available: {
      options: ['completly', 'partially', 'not', 'transparent'],
      control: { type: 'radio' },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AvailableDot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    $available: 'completly',

  },
};
