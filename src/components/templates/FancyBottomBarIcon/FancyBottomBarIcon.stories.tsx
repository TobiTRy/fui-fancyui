// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';
// Import the component to be tested
import FancyBottomBarIcon from './FancyBottomBarIcon';
// Define metadata for the story
const meta = {
  component: FancyBottomBarIcon,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyBottomBarIcon component is for displaying a fancy bottom bar icon, it can be used for displaying a navivation button in da navigation bar. <br/> It´s only the content wrapped in a ComponentAndActionWrapper component, so it can be used as a link or button or wrapped with the WrapperComponent prop in a e.g. NextJS Link Component . ',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    type: {
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'a' },
      },
    },
    href: {
      control: { type: 'text' },
    },
    isActive: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      control: { type: 'text' },
    },
    layer: {
      control: { type: 'range', min: 0, max: 10, step: 1 },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    onClick: {
      control: { type: 'function' },
    },
    disabled: {
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    themeType: {
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'secondary' },
      },
    },
    icon: {
      control: { type: 'object' },
    },
    WrapperComponent: {
      control: { type: 'object' },
      description: 'Provide a wrapper component like NextJS Link Component or a Custom component.  ',
    },
    hideLabel: {
      control: { type: 'boolean' },
      description:
        'Hide the label text. When The label is hidden, the icon will get bigger and the aria-label is putted to the icon.',
      table: {
        defaultValue: { summary: false },
      },
    },
  },
  // Add tags to the story
} satisfies Meta<typeof FancyBottomBarIcon>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyBottomBarIcon {...args} />,
  args: {
    type: 'a',
    href: 'https://www.google.com',
    isActive: false,
    label: 'Label',
    disabled: false,
    themeType: 'secondary',
    layer: 1,
    icon: <SVGCheckMark />,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
