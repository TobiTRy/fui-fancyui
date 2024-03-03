// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawButton from './RawButton';

// Define metadata for the story
const meta = {
  component: RawButton,
  title: 'components/atoms/RawButton',
  parameters: {
    docs: {
      description: {
        component:
          'The `RawButton` component is a customizable button for React applications. It is designed to be flexible and easily integrated into any React project with styled-components for styling. It can be styled with `styled(RawNav)`',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof RawButton>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawButton {...args}>Hi iam completly blank</RawButton>,
  args: {},
};
