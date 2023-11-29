// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawSlider from './RawSlider';

// Define metadata for the story
const meta = {
  component: RawSlider,
  parameters: {
    docs: {
      description: {
        component:
          'RawSlider is a simple component to display the slider. <br> - It has a themeType prop to define the theme type of the slider <br> - It has a value prop to define the value of the slider <br> - It has a onChange prop to define the onChange function <br> - It has a id prop to define the id of the slider <br> - It has a min prop to define the min of the slider',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    themeType: {
      control: {
        type: 'select',
      },
    },
    value: {
      control: {
        type: 'number',
      },
    },
    onChange: {
      control: {
        type: 'function',
      },
    },
    id: {
      control: {
        type: 'text',
      },
    },
    min: {
      control: {
        type: 'number',
      },
    },
    activeHandler: {
      description: 'Active handler is when the slider focused active or not',
      control: {
        type: 'function',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof RawSlider>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawSlider {...args} />,
  args: {
    min: 0,
    themeType: 'secondary',
    value: 0,
    activeHandler: (boolean: boolean) => console.log(boolean),
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => console.log(event.target.value),
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
