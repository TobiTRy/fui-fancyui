// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Typography from './Typography';

// Define metadata for the story
const meta = {
  component: Typography,
  parameters: {
    docs: {
      description: {
        component:
          'The Typography component can render differnet elements with different styles <br/> Its variant driven, so wehen you choose a variant, the component will render the element with the style of the variant. <br/> When you choose a type and a variant, the component will render the element with the style of the variant.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    variant: {
      description: 'The variant how the typography should look like',
      control: {
        type: 'select',
      },
    },
    elType: {
      description: 'The element type of the typography',
      control: {
        type: 'select',
      },
    },
    fontWeight: {
      description: 'The fontWeight for the typography',
      control: {
        type: 'text',
      },
    },
    lineHeight: {
      description: 'The lineHeight for the typography',
      control: {
        type: 'text',
      },
    },
    letterSpacing: {
      description: 'The letterSpacing for the typography',
      control: {
        type: 'text',
      },
    },
    className: {
      description: 'The className for the typography',
      control: {
        type: 'text',
      },
    },
    themeType: {
      description: 'The theme type for the typography',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer for the typography',
      control: {
        type: 'select',
      },
    },
  },
  // Add tags to the story
} satisfies Meta<typeof Typography>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'bodytextMd',
    children: 'I need something to eat, i think i will eat a pizza',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
