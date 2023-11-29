// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import SVGEyeCrossed from '../../../SVGIcons/SVGEyeCrossed/SVGEyeCrossed';

// Import the component to be tested
import ScrollableBar from './ScrollableBar';
import { FancyBottomBarIcon } from '../../Templates/FancyBottomBarIcon';

// Define metadata for the story
const meta = {
  component: ScrollableBar,
  parameters: {
    docs: {
      description: {
        component: 'A ScrollableBar component, when the content is too wide to fit in the screen, it will be scrollable',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ScrollableBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <ScrollableBar {...args}>
      <FancyBottomBarIcon icon={SVGEyeCrossed} label="Test" />
      <FancyBottomBarIcon icon={SVGEyeCrossed} label="Test" />
      <FancyBottomBarIcon icon={SVGEyeCrossed} label="Test" />
      <FancyBottomBarIcon icon={SVGEyeCrossed} label="Test" />
      <FancyBottomBarIcon icon={SVGEyeCrossed} label="Test" />
      <FancyBottomBarIcon icon={SVGEyeCrossed} label="Test" />
    </ScrollableBar>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
