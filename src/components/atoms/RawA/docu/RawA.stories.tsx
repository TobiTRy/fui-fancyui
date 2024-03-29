// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawA from '../RawA';

// Define metadata for the story
const meta = {
  component: RawA,
  title: 'components/atoms/RawA',
  parameters: {
    docs: {
      description: {
        component:
          'The RawA component is a with non default styles for anchor tag. It is designed to be flexible and easily integrated into any React project with styled-components for styling. It can be styled with `styled(RawA)`',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof RawA>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawA {...args}>Hi iam completly blank</RawA>,
  args: {
    href: 'https://fui.cool',
  },
};
