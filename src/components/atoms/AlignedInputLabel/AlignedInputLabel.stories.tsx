import { HTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { AlignedInputLabel } from './AlignedInputLabel';
import { IAlignedInputLabel } from './TalignedInputLabel.model';
import Typography from '../Typography/Typography';

//This is a helper component to show the styled component in the story
const HelperComponent = (props: IAlignedInputLabel & HTMLAttributes<HTMLLabelElement>) => (
  <AlignedInputLabel {...props}>
    <Typography type="label">Hello World</Typography>
  </AlignedInputLabel>
);

// Give the component a more meaningful name in the storybook
HelperComponent.displayName = 'AlignedInputLabel';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: HelperComponent,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component:
          'The input label wich is aligned left or centered. <br> - the alignment is set by the $align prop. <br> - the color changes depending on the $isActive prop',
      },
    },
  },
  argTypes: {
    $align: {
      options: ['left', 'center'],
      control: { type: 'radio' },
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
    $align: 'left',
    $colorState: 'default',
    $themeType: 'secondary',
    $layer: 4,
  },
  render: (args: IAlignedInputLabel) => <HelperComponent {...args} />,
};
