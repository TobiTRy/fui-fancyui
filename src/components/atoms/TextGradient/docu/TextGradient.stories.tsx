// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { TextGradient } from '@/components/atoms/TextGradient';
import { Typography } from '@/components/atoms/Typography';

// Define metadata for the story
const meta = {
  component: TextGradient,
  title: 'components/atoms/TextGradient',
  parameters: {
    docs: {
      description: {
        component:
          'The `TextGradient` component is a React component designed to apply a gradient effect to text. It allows for the customization of the gradient`s colors, orientation, and the specific angle or position of the gradient, making it a versatile tool for creating visually appealing text effects.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    colors: {
      description: 'An array of colors or objects defining the gradient colors and their respective stop positions.',
      control: { type: 'object' },
    },
    orientation: {
      description: 'Specifies the type of gradient (linear, radial, etc.).',
      control: { type: 'select' },
    },
    position: {
      description:
        'he position of the gradient for radial or elliptical gradients. This prop is mutually exclusive with `degree`',
      control: { type: 'select' },
    },
    degree: {
      description: 'The degree angle for linear gradients. Only wehn `orientation` is not set.',
      control: { type: 'number' },
    },
    children: {
      description: 'The children to be wrapped by the gradient.',
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof TextGradient>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <TextGradient {...args}>
      <Typography variant="displayHeadline">FUIIIIII</Typography>
    </TextGradient>
  ),
  args: {
    colors: [
      {
        color: 'red',
        stop: '15%',
      },
      {
        color: 'blue',
        stop: '50%',
      },
    ],
    orientation: 'linear',
    position: 'top-left',
    children: '',
  },
};
