// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import RawSlider from '../RawSlider';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: RawSlider,
  title: 'components/atoms/RawSlider',
  parameters: {
    docs: {
      description: {
        component:
          'The `RawSlider` component is a stylized range slider for React applications, providing a sleek and customizable user interface for inputting numerical values within a defined range. This component encapsulates functionality for touch and mouse interactions, dynamic value updates, and visual feedback on user interaction. It is designed to be integrated into modern web applications, offering both aesthetic appeal and functional depth.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 0),
    value: {
      description: 'Define the value of the slider',
      control: {
        type: 'number',
      },
    },
    sizeC: {
      description: 'Define the size of the slider',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'sm',
      },
    },
    ref: {
      description: 'A ref object for accessing the DOM element',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof RawSlider>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <RawSlider {...args} />,
  args: {
    themeType: 'primary',
    value: 0,
    layer: 3,
  },
};
