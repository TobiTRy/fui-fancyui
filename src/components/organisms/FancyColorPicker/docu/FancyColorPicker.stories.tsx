// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyColorPicker from '../FancyColorPicker';

// Define metadata for the story
const meta = {
  component: FancyColorPicker,
  title: 'components/organisms/FancyColorPicker',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyColorPicker` is a comprehensive React component designed for selecting and displaying colors. It offers a highly customizable interface for users to pick colors through different UI elements like color area, hue slider, opacity slider, and input fields. The component supports various color formats and provides real-time feedback on color changes.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    colorArea: {
      description: 'Enables or disables the color area component.',
      control: { type: 'boolean' },
    },
    hueSlider: {
      description: 'Enables or disables the hue slider component.',
      control: { type: 'boolean' },
    },
    opacitySlider: {
      description: 'Enables or disables the opacity slider component.',
      control: { type: 'boolean' },
    },
    colorOutput: {
      description: 'Enables or disables the color output component.',
      control: { type: 'boolean' },
    },
    colorDisplay: {
      description: 'Enables or disables the display color component.',
      control: { type: 'boolean' },
    },
    inputColor: {
      description: 'The initial color value for the color picker.',
      control: { type: 'text' },
    },
    outputFormat: {
      description: 'The output color format',
      control: { type: 'radio' },
      options: ['hsl', 'hex', 'rgb', 'rgba', 'hsla', 'hexa'],
    },
    handler: {
      description: 'A callback function that is invoked when the color value changes.',
      control: { type: 'function' },
    },
  },
} satisfies Meta<typeof FancyColorPicker>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyColorPicker {...args} />,
  args: {
    colorArea: true,
    hueSlider: true,
    opacitySlider: true,
    colorOutput: true,
    colorDisplay: true,
    inputColor: 'hsl(0, 100%, 50%)',
    outputFormat: 'hsl',
  },
};
