// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import SVGXCircle from '../../SVGIcons/SVGXCircle';

// Import the component to be tested
import FancySVGAtom from './FancySVGAtom';
// Define metadata for the story
const meta = {
  component: FancySVGAtom,

  parameters: {
    docs: {
      description: {
        component: 'Fancy SVG Atom that can be dynamicly adjusted in size and alignment. It can also be used to display error messages.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    size: {
      control: { type: 'select' },
    },
    themeType: {
      control: { type: 'select' },
    },
    layer: {
      control: { type: 'range', min: 1, max: 10, step: 1 },
    },
    errorMessage: {
      control: { type: 'text' },
    },
    isActive: {
      control: { type: 'boolean' },
    },
    isPassive: {
      control: { type: 'boolean' },
    },



  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancySVGAtom>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancySVGAtom {...args}>
    <SVGXCircle />
  </FancySVGAtom>,
  args: {
    isPassive: false,
    size: 'md',
    themeType: 'secondary',
    errorMessage: '',
    layer: 1,
    isActive: true,

  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
