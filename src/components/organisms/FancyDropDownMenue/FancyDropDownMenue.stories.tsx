// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDropDownMenue from './FancyDropDownMenue';

// Define metadata for the story
const meta = {
  component: FancyDropDownMenue,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: A fancy date picker with a range calendar and more',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    isOpen: {
      description: 'Is the dropdown open',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    themeType: {
      description: 'Theme type of the datepicker',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'Layer of the datepicker',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      defaultValue: {
        summary: 1,
      },
    },
    width: {
      description: 'Width of the dropdown',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '50%',
      },
    },
    alignHorizontal: {
      description: 'Horizontal alignment of the dropdown',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'center',
      },
    },
    alignVertical: {
      description: 'Vertical alignment of the dropdown',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'top',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyDropDownMenue>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDropDownMenue {...args} />,
  args: {
    isOpen: false,
    themeType: 'primary',
    layer: 1,
    width: '50%',
    alignHorizontal: 'center',
    alignVertical: 'top',
    children: (
      <>
        <p>test</p>
        <p>test</p>
      </>
    ),
  },
};
