// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawNav from './RawNav';

// Define metadata for the story
const meta = {
  component: RawNav,
  title: 'components/atoms/RawNav',
  parameters: {
    docs: {
      description: {
        component:
          'The `RawNav` component is a customizable navigation bar. It is designed to be flexible and easily integrated into any React project with styled-components for styling. It can be styled with `styled(RawNav)` .',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},
  tags: ['autodocs'],
} satisfies Meta<typeof RawNav>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawNav {...args}>Hi iam completly blank</RawNav>,
  args: {},
};

export const List: Story = {
  render: (args) => (
    <RawNav {...args}>
      <ul style={{ display: 'flex', gap: '12px' }}>
        <li>Hi iam completly blank</li>
        <li>Hi iam completly blank</li>
      </ul>
    </RawNav>
  ),
  args: {},
};
