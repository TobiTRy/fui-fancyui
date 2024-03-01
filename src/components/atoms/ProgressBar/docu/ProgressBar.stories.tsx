// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ProgressBar from '../ProgressBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  title: 'components/atoms/ProgressBar',
  component: ProgressBar,
  parameters: {
    docs: {
      description: {
        component:
          'The `ProgressBar` component is a customizable progress bar for React applications. It visually represents the progress of an operation, such as a file upload or a loading process. The component allows for customization through various props, including progress percentage, maximum value, ID, theme type, and layer. It´s designed to be flexible and easily integrated into any React project with styled-components for styling.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    maxValue: {
      description: 'Define the max value of the progress bar',
      control: {
        type: 'number',
      },
    },
    progress: {
      description: 'Define the progress of the progress bar',
      control: {
        type: 'number',
      },
    },
    ...templateThemeType('notTransparent', 'primary', 3),
  },
} satisfies Meta<typeof ProgressBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ProgressBar {...args} />,
  args: {
    maxValue: 100,
    progress: 50,
    themeType: 'primary',
    layer: 3,
  },
};
