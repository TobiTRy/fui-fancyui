// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SwipeUpContainer from '../SwipeUpContainer';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: SwipeUpContainer,
  title: 'components/atoms/SwipeUpContainer',
  parameters: {
    docs: {
      description: {
        component:
          'The SwipeUpContainer serves as a container that can encapsulate other components or content, making it ideal for presenting information in a modal format on mobile devices. It offers flexibility in styling, theming, and layout, with options for scalability, theming, and layering.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    isScalable: {
      description: 'Determines if the container`s style can be scaled.',
      type: { name: 'boolean' },
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    children: {
      description: 'The children of the container',
    },
  },
} satisfies Meta<typeof SwipeUpContainer>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SwipeUpContainer {...args} />,
  args: {
    style: { height: '100px' },
    isScalable: true,
    themeType: 'primary',
    layer: 2,
    children: <div>Swipe Up Container</div>,
  },
};
