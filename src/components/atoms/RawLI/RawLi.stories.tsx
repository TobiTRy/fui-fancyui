// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawLI from './RawLI';

// Define metadata for the story
const meta = {
  component: RawLI,
  title: 'components/atoms/RawLI',
  parameters: {
    docs: {
      description: {
        component:
          'The `RawLI` component is a customizable list item for React applications. It is designed to be flexible and easily integrated into any React project with styled-components for styling. It can be styled with `styled(RawLi)` ',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof RawLI>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawLI {...args}>Hi iam completly blank</RawLI>,
  args: {},
};

export const List: Story = {
  render: (args) => (
    <ul>
      <RawLI {...args}>Hi iam completly blank</RawLI>
      <RawLI {...args}>Hi iam completly blank</RawLI>
      <RawLI {...args}>Hi iam completly blank</RawLI>
    </ul>
  ),
  args: {},
};
