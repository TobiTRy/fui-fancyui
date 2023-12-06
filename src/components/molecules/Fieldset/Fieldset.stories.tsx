// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Fieldset from './Fieldset';

// Define metadata for the story
const meta = {
  component: Fieldset,
  parameters: {
    docs: {
      description: {
        component: 'Fieldset is only   a wrapper for a group of elements. It is used to group elements in a form.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof Fieldset>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <p>Some text</p>
      <p>Iam the Content of the Fieldset</p>
    </Fieldset>
  ),
  args: {
    alignLabel: 'left',
    label: 'This is a label',
    fontVariantLegend: 'h3',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
