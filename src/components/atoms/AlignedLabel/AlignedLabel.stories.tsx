import { HTMLAttributes } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import Typography from '../Typography/Typography';
import { IAlignedLabel } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';
import AlignedLabel from '@/components/atoms/AlignedLabel/AlignedLabel';

//This is a helper component to show the styled component in the story
const HelperComponent = (props: IAlignedLabel & HTMLAttributes<HTMLLabelElement>) => (
  <AlignedLabel {...props}>
    <Typography variant="interactiveMd">Hello World</Typography>
  </AlignedLabel>
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
    $systemMessageType: {
      description: 'The system message type',
      control: { type: 'radio' },
    },
    $layer: {
      description: 'The layer of the component',
      control: { type: 'range', min: 1, max: 10 },
    },
    $themeType: {
      description: 'The theme type of the component',
      control: { type: 'select' },
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
    $themeType: 'secondary',
    $layer: 4,
  },
  render: (args: IAlignedLabel) => <HelperComponent {...args} />,
};
