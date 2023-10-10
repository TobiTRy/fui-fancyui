// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';
// Import the component to be tested
import FancyBottomBarIcon from './FancyBottomBarIcon';
// Define metadata for the story
const meta = {
  component: FancyBottomBarIcon,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyBottomBarIcon component is for displaying a fancy bottom bar icon, it can be used for displaying a navivation button in da navigation bar<br> - active: is the icon active <br> - label: the label of the icon <br> - layer: the layer of the icon <br> - onClick: function to be called when the icon is clicked <br> - secondBar: is the icon in the second bar <br> - disabled: is the icon disabled <br> - themeType: the theme type of the icon <br> - icon: the icon to be displayed',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    active: {
      control: { type: 'boolean' },
    },
    label: {
      control: { type: 'text' },
    },
    layer: {
      control: { type: 'range', min: 0, max: 10, step: 1}
    },
    onClick: {
      control: { type: 'function' },
    },
    secondBar: {
      control: { type: 'boolean' },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    themeType: {
      control: { type: 'select', options: ['primary', 'secondary', 'accent'] },
    },

  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyBottomBarIcon>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyBottomBarIcon {...args} />,
  args: {
    active: true,
    label: 'Label',
    secondBar: false,
    disabled: false,
    themeType: 'secondary',
    layer: 4,
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
