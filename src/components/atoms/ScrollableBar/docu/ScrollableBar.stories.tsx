// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import SVGEyeCrossed from '../../../icons/SVGEyeCrossed/SVGEyeCrossed';

// Import the component to be tested
import { FancyBottomBarIcon } from '../../../templates/FancyBottomBarIcon';
import ScrollableBar from '../ScrollableBar';

// Define metadata for the story
const meta = {
  component: ScrollableBar,
  title: 'components/atoms/ScrollableBar',
  parameters: {
    docs: {
      description: {
        component:
          'The ScrollableBar component is designed to facilitate horizontal scrolling within a container, specifically targeting environments where a traditional scrollbar might not be ideal, such as touch interfaces or when a cleaner UI is desired. It includes a mechanism to handle horizontal scrolling via mouse wheel events, offering an enhanced user experience especially on non-Mac devices where horizontal scrolling isn`t natively supported by the mouse wheel.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},
} satisfies Meta<typeof ScrollableBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <ScrollableBar {...args}>
      <FancyBottomBarIcon icon={<SVGEyeCrossed />} label="Test" />
      <FancyBottomBarIcon icon={<SVGEyeCrossed />} label="Test" />
      <FancyBottomBarIcon icon={<SVGEyeCrossed />} label="Test" />
      <FancyBottomBarIcon icon={<SVGEyeCrossed />} label="Test" />
      <FancyBottomBarIcon icon={<SVGEyeCrossed />} label="Test" />
      <FancyBottomBarIcon icon={<SVGEyeCrossed />} label="Test" />
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
