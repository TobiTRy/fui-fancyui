// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import InputUnderline from './InputUnderline';

// Define metadata for the story
const meta = {
  component: InputUnderline,
  parameters: {
    docs: {
      description: {
        component:
          'The InputUnderline is a simple underline for the input. <br> - It has a colorState prop to define the color of the underline <br> - It has a isActive prop to define if the underline is active <br> - It has a themeType prop to define the theme of the underline <br> - It has a layer prop to define the layer of the underline',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    colorState: {
      description: 'Define the color state of the underline',
      control: {
        type: 'select',
      },
      options: ['error', 'active', 'default'],
    },
    isActive: {
      description: 'Define if the underline is active',
      control: {
        type: 'boolean',
      },
    },
    themeType: {
      description: 'Define the theme of the underline',
      control: {
        type: 'select',
      },
      options: ['primary', 'secondary', 'accent'],
    },
    layer: {
      description: 'Define the layer of the underline',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof InputUnderline>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <InputUnderline {...args} />,
  args: {
    colorState: 'active',
    isActive: false,
    themeType: 'secondary',
    layer: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
