// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyColorPicker from './FancyColorPicker';

// Define metadata for the story
const meta = {
  component: FancyColorPicker,
  parameters: {
    docs: {
      description: {
        component:
          'Smart-Comonent: A Color Picker component to pick a color from a color area, hue slider, opacity slider and color output',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    colorArea: {
      description: 'Show the color area',
      control: { type: 'boolean' },
    },
    hueSlider: {
      description: 'Show the hue slider',
      control: { type: 'boolean' },
    },
    opacitySlider: {
      description: 'Show the opacity slider',
      control: { type: 'boolean' },
    },
    colorOutput: {
      description: 'Show the color output',
      control: { type: 'boolean' },
    },
    displayColor: {
      description: 'Show the color display',
      control: { type: 'boolean' },
    },
    inputColor: {
      description: 'The initial color',
      control: { type: 'text' },
    },
    outputFormat: {
      description: 'The output color format',
      control: { type: 'radio' },
      options: ['hsl', 'hex', 'rgb', 'rgba', 'hsla', 'hexa'],
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
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
    displayColor: true,
    inputColor: 'hsl(0, 100%, 50%)',
    outputFormat: 'hsl',
  },
};
