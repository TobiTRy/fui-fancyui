// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTabSwitchButton from './FancyTabSwitchButton';

import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';

// fix for building ... because storybook is not able to handle the default export
const HelperComponent = (props: React.ComponentProps<typeof FancyTabSwitchButton>) => (
  <FancyTabSwitchButton {...props} />
);
HelperComponent.displayName = 'FancyTabSwitchButton';

// Define metadata for the story
const meta = {
  component: HelperComponent,
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
    label: {
      description: 'The text to be displayed in the button.',
      type: { name: 'string' },
    },
    icon: {
      description: 'The icon to be displayed in the button.',
      type: { name: 'string' },
    },
    children: {
      description: 'The children of the button.',
      type: { name: 'string' },
    },
    itemKey: {
      description: 'The key of the button.',
      type: { name: 'string' },
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
    themeType: {
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
} satisfies Meta<typeof HelperComponent>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    itemKey: '1',
    label: 'label',
    icon: <SVGCheckMark />,
    selected: false,
    wide: false,
    themeType: 'secondary',
    iconAlign: 'left',
    size: 'sm',
  },
};
