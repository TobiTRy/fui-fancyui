// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

// Import the component to be tested
import SpeedDailMenueItem from './SpeedDailMenueItem';
// Define metadata for the story
const meta = {
  title: 'components/ui/Atoms/SpeedDailMenueItem',
  component: SpeedDailMenueItem,
  parameters: {
    docs: {
      description: {
        component: 'A SpeedDailMenueItem or better a Button with a label and an icon',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    isOpen: {
      description: 'Is the menue open or closed',
      type: { name: 'boolean' },
    },
    label: {
      description: 'The label for the button',
      type: { name: 'string' },
    },
    icon: {
      description: 'The value for the button',
    },
    hideLabel: {
      description: 'Hide the label',
      type: { name: 'boolean' },
    },
    labelAlign: {
      description: 'Align the label left or right',
    },

  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof SpeedDailMenueItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SpeedDailMenueItem {...args} />,
  args: {
    label: 'Iam only a dummy',
    icon: <SVGCheckMark/>,
    isOpen: true,
    hideLabel: false,
    labelAlign: 'left',
    index: 0,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
