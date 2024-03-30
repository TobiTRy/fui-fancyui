// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyAlignBox from '../FancyAlignBox';

// Define metadata for the story
const meta = {
  component: FancyAlignBox,
  title: 'components/organisms/FancyAlignBox',
  parameters: {
    docs: {
      description: {
        component: '',
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
} satisfies Meta<typeof FancyAlignBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyAlignBox {...args} />,
  args: {},
};
