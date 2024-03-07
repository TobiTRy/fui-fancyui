// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
// Import the component to be tested
import BottomBarIcon from '../BottomBarIcon';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: BottomBarIcon,
  title: 'components/molecules/BottomBarIcon',
  parameters: {
    docs: {
      description: {
        component:
          'The BottomBarIcon component is designed to display an icon with an optional label in a bottom bar, commonly used in navigation structures. It supports various states such as active, disabled, and theme customization.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    disabled: {
      description: 'If true, the component will be disabled.',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    label: {
      control: { type: 'text' },
      defaultValue: {
        summary: 'Label',
      },
    },
    icon: {
      description: 'The icon to be displayed.',
      control: { type: 'object' },
    },
    isActive: {
      description: 'If true, the component will be active.',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    hideLabel: {
      description: 'If true, the label will be hidden.',
      control: { type: 'boolean' },
    },
    sizeC: {
      description: 'The size of the component.',
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      defaultValue: {
        summary: 'sm',
      },
    },
    externalStyle: {
      description: 'External style for the component.',
      control: { type: 'object' },
    },
    ...templateThemeType('notTransparent', 'secondary'),
  },
} satisfies Meta<typeof BottomBarIcon>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <BottomBarIcon {...args} />,
  args: {
    label: 'Label',
    disabled: false,
    themeType: 'secondary',
    layer: 0,
    sizeC: 'sm',
    icon: <SVGCheckMark />,
  },
};
