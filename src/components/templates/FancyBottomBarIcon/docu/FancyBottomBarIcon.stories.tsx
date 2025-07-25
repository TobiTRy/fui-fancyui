// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
// Import the component to be tested
import FancyBottomBarIcon from '../FancyBottomBarIcon';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: FancyBottomBarIcon,
  title: 'components/templates/FancyBottomBarIcon',
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
    disabled: {
      description: 'If true, the component will be disabled.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    label: {
      control: { type: 'text' },
      table: {
        defaultValue: { summary: 'Label' },
      },
    },
    icon: {
      description: 'The icon to be displayed.',
      control: { type: 'object' },
    },
    isActive: {
      description: 'If true, the component will be active.',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    hideLabel: {
      description: 'If true, the label will be hidden.',
      control: { type: 'boolean' },
    },
    sizeC: {
      description: 'The size of the component.',
      control: { type: 'select', options: ['sm', 'md', 'lg'] },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    hoverStyle: {
      description: 'If true, the component will have hover style.',
      control: { type: 'boolean' },
    },
    externalStyle: {
      description: 'External style for the component.',
      control: { type: 'object' },
    },
    ...templateThemeType('notTransparent', 'secondary'),
    type: {
      description: 'The type of the component.',
      options: ['a', 'button'],
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'a' },
      },
    },
    href: {
      description: 'The href of the component.',
      control: { type: 'text' },
    },
    onClick: {
      description: 'The function to be called when the component is clicked.',
      control: { type: 'function' },
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
};
