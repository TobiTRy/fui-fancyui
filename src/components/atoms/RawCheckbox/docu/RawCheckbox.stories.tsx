// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawCheckbox from '../RawCheckbox';

// Define metadata for the story
const meta = {
  component: RawCheckbox,
  title: 'components/atoms/RawCheckbox',
  parameters: {
    docs: {
      description: {
        component:
          'The `RawCheckbox` component is a customizable checkbox input for React applications that combines aesthetics with functionality. It implements a visually appealing checkbox through a "FakeCheckbox" while ensuring accessibility and form compatibility with a hidden actual checkbox input. This component supports custom change handlers, default checked state, and standard HTML input attributes, allowing for seamless integration into forms and user interfaces.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},
} satisfies Meta<typeof RawCheckbox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawCheckbox {...args} />,
  args: {
    defaultChecked: true,
    onClick: () => console.log('click'),
  },
};
