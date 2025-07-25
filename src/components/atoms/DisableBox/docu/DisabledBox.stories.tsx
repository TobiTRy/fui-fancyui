// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import DisabledBox from '../DisabledBox';

// Define metadata for the story
const meta = {
  component: DisabledBox,
  title: 'components/atoms/DisabledBox',
  parameters: {
    docs: {
      description: {
        component:
          'The `DisabledBox` component is a versatile wrapper that allows you to easily apply disabled styles and control pointer events on its child elements. It´s designed to streamline the process of disabling interactions within your React applications.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    disabled: {
      description: 'Disables the child elements within the `DisabledBox` component.',
      type: 'boolean',
    },
  },
} satisfies Meta<typeof DisabledBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <DisabledBox {...args}>
      <button>This button will be disabled</button>
    </DisabledBox>
  ),
  args: {
    disabled: true,
  },
};
