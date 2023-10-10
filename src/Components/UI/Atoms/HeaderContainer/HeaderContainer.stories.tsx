// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import HeaderContainer from './HeaderContainer';

// Define metadata for the story
const meta = {
  component: HeaderContainer,
  parameters: {
    docs: {
      description: {
        component: 'The HeaderContainer is a wrapper for the Header. It handles the color and the place inside the header. <br> - This is simply only for the Design ',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    layer: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    themeType: {
      control: { type: 'select' },
    },
    

  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderContainer>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <HeaderContainer {...args}/>,
  args: {
    slotsInFR: ['1fr', '1fr', '1fr'],
    themeType: 'primary',
    layer: 1,
    height: '3rem',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
