// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTabSwitchButton from './FancyTabSwitchButton';

import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

// Define metadata for the story
const meta = {
  component: FancyTabSwitchButton,
  parameters: {
    docs: {
      description: {
        component: 'SwipeUpDash is a simple horizontal line',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    disabled: {
      description: 'If true, the button will be disabled.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    itemObject: {
      description: 'The object of the item.',
      control: { type: 'object' },
    },
    selected: {
      description: 'If true, the button will be selected.',
      type: { name: 'boolean' },
    },
    onClick: {
      description: 'A function that is called when the button is clicked.',
      type: { name: 'function' },
    },
    wide: {
      description: 'If true, the button will be wide.',
      type: { name: 'boolean' },
    },
    textColor: {
      description: 'The text color of the button.',
      control: { type: 'select' },
    },
    iconAlign: {
      description: 'The alignment of the icon.',
      control: { type: 'radio' },
    },
    size: {
      description: 'The size of the button.',
      control: { type: 'select' },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyTabSwitchButton>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyTabSwitchButton {...args} />,
  args: {
    itemObject: { key: '1', label: 'label', icon: <SVGCheckMark /> },
    selected: false,
    wide: false,
    textColor: 'secondary',
    iconAlign: 'left',
    size: 'sm',
  },
};
