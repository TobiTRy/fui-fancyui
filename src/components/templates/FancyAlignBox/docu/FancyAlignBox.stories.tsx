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
        component:
          '`FancyAlignBox` is a composite React component that combines spacing and flexbox layout functionalities. It uses `SpacingsContainer` for applying margin, padding, and external styles, and `FancyFlexBox` for flexbox properties like alignment, direction, and gap. This component is designed to facilitate the creation of layouts with specific spacing and alignment needs.',
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
    gap: {
      description: 'The gap between the children',
      control: {
        type: 'text',
      },
    },
    fitBox: {
      description: 'The container will fit the content',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
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
  render: (args) => (
    <FancyAlignBox {...args}>
      <div>Content1</div>
      <div>Content2</div>
      <div>Content3</div>
    </FancyAlignBox>
  ),
  args: {
    padding: '12px',
    margin: '12px',
    gap: '12px',
    externalStyle: {
      border: '1px solid white',
      backgroundColor: 'coral',
      height: '300px',
    },
  },
};
