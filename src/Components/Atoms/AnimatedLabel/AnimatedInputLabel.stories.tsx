import React, { HTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AnimatedInputLabel } from './AnimatedInputLabel';
import { IAnimatedInputLabel } from './TAnimatedInputLabel.model';
import Typography from '../Typography/Typography';

// This is a helper component to show the styled component in the story
const HelperComponent = (props: IAnimatedInputLabel & HTMLAttributes<HTMLLabelElement>) => (
  <AnimatedInputLabel {...props}>
    <Typography type="label">Hello World</Typography>
  </AnimatedInputLabel>
);

// Give the component a more meaningful name in the storybook
HelperComponent.displayName = 'AnimatedInputLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  title: 'components/ui/Atoms/AnimatedInputLabel',
  component: HelperComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'centered',
    docs: {
      description: {
        component:
          'The input label wich hase some colors and an animation. <br> - the color changes depending on the $colorState prop. <br> - the animation is triggered by the $moveUp prop',
      },
    },
  },
  argTypes: {
    $moveUp: {
      control: { type: 'boolean' },
    },
    $colorState: {
      control: { type: 'radio' },
      options: ['error', 'active', 'default'],
    },
    $layer: {
      control: { type: 'range', min: 1, max: 10 },
    },
    $themeType: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof HelperComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    $moveUp: false,
    $colorState: 'default',
    $themeType: 'secondary',
    $layer: 4,
  },
  render: (args) => <HelperComponent {...args} />,
};
