// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ColorDisplay from '../ColorDisplay';
// Define metadata for the story
const meta = {
  component: ColorDisplay,
  title: 'components/molecules/ColorDisplay',
  parameters: {
    docs: {
      description: {
        component:
          'The `ColorDisplay` component is a flexible and customizable React component designed for displaying a color within a box. It supports various features such as opacity adjustment, size variation, border radius customization, and transparency visualization with a checkerboard pattern. This component is ideal for applications requiring a visual representation of colors, such as design tools, color pickers, or theme customization interfaces. `ColorDisplay` also includes subcomponents for additional functionality, such as copying the color to the clipboard and displaying the color value as text.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    colorValue: {
      description: 'The color to be displayed. Accepts a Color object or a color string.',
      type: { name: 'string', required: true },
      control: { type: 'color' },
    },
    opacity: {
      description: 'The opacity level of the color, with `1` being fully opaque and `0` being fully transparent.',
      control: { type: 'range', min: 0, max: 1, step: 0.1 },
    },
    fullHeight: {
      description: 'When `true`, the component fills the height of its parent container.',
      control: { type: 'boolean' },
    },
    borderRadius: {
      description: 'Specifies the border radius of the color display, accepting predefined size values.',
      control: { type: 'object' },
    },
    sizeC: {
      description:
        'Determines the size of the component, affecting its height and potentially other size-related properties.',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
    },
    children: {
      description:
        'The children of the component, typically used for displaying additional components such as the color value.',
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof ColorDisplay>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <ColorDisplay {...args}>
      <ColorDisplay.ColorValue colorValue={'red'} />
      <ColorDisplay.ClipBoardIcon />
    </ColorDisplay>
  ),
  args: {
    colorValue: '#ffff',
    opacity: 1,
    fullHeight: false,
    sizeC: 'sm',
  },
};

export const WithAllProps: Story = {
  render: (args) => <ColorDisplay {...args} />,
  args: {
    colorValue: 'red',
    opacity: 1,
    fullHeight: false,
    borderRadius: ['sm', 'sm', 0, 0],
    sizeC: 'sm',
    children: (
      <>
        <ColorDisplay.ColorValue colorValue={'red'} />
        <ColorDisplay.ClipBoardIcon />
      </>
    ),
  },
};
