// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { DescriptionPreview } from '@/components/atoms/DescriptionPreview';
// Define metadata for the story
const meta = {
  component: DescriptionPreview,
  title: 'components/atoms/DescriptionPreview',
  parameters: {
    docs: {
      description: {
        component: 'The DescriptionPreview component is for displaying a description preview or the full description',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    description: {
      description: 'The description to be displayed',
      type: { required: true, name: 'string' },
      control: { type: 'text' },
    },
    letterLimit: {
      description: 'The letter limit for the preview',
      type: {
        name: 'number',
        required: false,
      },
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 150 },
      },
    },
    buttonText: {
      description: 'The text for the button',
      control: { type: 'object' },
      defaultValue: {
        typographyVariant: 'interactiveMd',
        showLess: 'Show less',
        showMore: 'Show more',
        themeType: 'secondary',
        layer: 0,
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof DescriptionPreview>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <DescriptionPreview {...args} />,
  args: {
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, elit sed ornare dapibus',
    letterLimit: 20,
    buttonText: {
      themeType: 'secondary',
      layer: 0,
      showLess: 'Show less',
      showMore: 'Show more',
    },
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
