// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import BottomBar from './BottomBar';

// Define metadata for the story
const meta = {
  component: BottomBar,
  parameters: {
    docs: {
      description: {
        component:
          'The Bottombar is a container for the bottom navigation. <br> <br> **Note:** The Bottombar is not a navigation component itself. It is just a container for the navigation. <br> It can adjusted in width, roundedness, spacing and layer. <br> It can be fixed to the bottom of the screen. <br> It can be themed.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    bottomFixed: {
      description: 'If true, the bottom bar is fixed to the bottom of the screen.',
      control: {
        type: 'boolean',
      },
    },
    width: {
      description: 'The width of the bottom bar.',
      control: {
        type: 'text',
      },
    },
    spacingLeftRight: {
      description: 'The left and right spacing of the bottom bar.',
      control: {
        type: 'text',
      },
    },
    roundedness: {
      description: 'The roundedness of the bottom bar.',
      control: {
        type: 'select',
      },
    },
    themeType: {
      description: 'The theme type of the bottom bar.',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the bottom bar.',
      control: {
        type: 'select',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof BottomBar>;

// Export the metadata
export default meta;

// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <BottomBar {...args} />,
  args: {
    bottomFixed: true,
    width: '100%',
    spacingLeftRight: '0px',
    themeType: 'primary',
    layer: 1,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
