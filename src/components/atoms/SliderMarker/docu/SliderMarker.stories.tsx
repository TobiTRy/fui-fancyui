// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SliderMarker from '../SliderMarker';

// Define metadata for the story
const meta = {
  component: SliderMarker,
  title: 'components/atoms/SliderMarker',
  parameters: {
    docs: {
      description: {
        component:
          'The `SliderMarker` component is designed to visually represent a marker on a slider control. It is a customizable component that allows developers to indicate a specific position on a slider through a visual cue. This marker can be used to display additional information, such as color indicators, through its children props. It leverages styled-components for styling, ensuring it can be easily themed and integrated into projects with varying design requirements.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    position: {
      description: 'The position of the marker on the slider',
      control: {
        type: 'text',
      },
    },
    children: {
      description:
        'the children can use to display something in the marker like the color indicator that moves with the marker',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof SliderMarker>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <div style={{ width: '100%', height: '20px', position: 'relative' }}>
      <SliderMarker {...args} />
    </div>
  ),
  args: {
    position: '50%',
  },
};
