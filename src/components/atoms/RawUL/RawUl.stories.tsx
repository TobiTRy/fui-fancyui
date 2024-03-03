// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawUL from './RawUL';

// Define metadata for the story
const meta = {
  component: RawUL,
  title: 'components/atoms/RawUL',
  parameters: {
    docs: {
      description: {
        component:
          'The `RawUL` component is a customizable unordered list for React applications. It is designed to be flexible and easily integrated into any React project with styled-components for styling. It can be styled with `styled(RawUL)`',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof RawUL>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawUL {...args}>Hi iam completly blank</RawUL>,
  args: {},
};

export const List: Story = {
  render: () => (
    <RawUL>
      <li>Hi iam completly blank</li>
      <li>Hi iam completly blank</li>
      <li>Hi iam completly blank</li>
    </RawUL>
  ),
  args: {},
};
