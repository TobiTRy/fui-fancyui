// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SpacingContainer from '../SpacingsContainer';

// Define metadata for the story
const meta = {
  component: SpacingContainer,
  title: 'components/atoms/SpacingContainer',
  parameters: {
    docs: {
      description: {
        component:
          'The `SpacingContainer` component is a versatile wrapper designed to apply consistent spacing around its children through padding and margin properties. It supports dynamic element rendering using the `as` prop, allowing it to adapt to different semantic HTML elements as needed. This component is part of a design system aimed at providing flexible, consistent spacing utilities across an application.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    padding: {
      description:
        'The padding of the container, can be defined as a string or an array of strings, like `["12px2, "24px"] or only 12px` you can use too the types like `["sm", "md"]`.',
      control: {
        type: 'text',
      },
    },
    margin: {
      description:
        'The margin of the container, can be defined as a string or an array of strings, like `["12px2, "24px"] or only 12px` you can use too the types like `["sm", "md"]`.',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'The external style of the container',
      control: {
        type: 'object',
      },
    },
    as: {
      description: 'The tag of the container',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'div' },
      },
    },
  },
} satisfies Meta<typeof SpacingContainer>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <SpacingContainer {...args}>
      <p>Some content</p>
    </SpacingContainer>
  ),
  args: {
    padding: '24px',
    margin: '12px',
    externalStyle: { backgroundColor: 'red' },
  },
};
