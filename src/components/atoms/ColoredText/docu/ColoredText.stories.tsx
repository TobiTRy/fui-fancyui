// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ColoredText from '../ColoredText';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  title: 'components/atoms/ColoredText',
  component: ColoredText,
  parameters: {
    docs: {
      description: {
        component: ' A component that displays text with a color based on the themeType and layer properties.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    hoverLayer: {
      description: 'The active state of the color indicator',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      table: {
        defaultValue: { summary: 2 },
      },
    },
    ...templateThemeType('allThemeTypes', 'secondary', 0),
    externalStyle: {
      description: 'External style for the component',
      control: {
        type: 'object',
      },
    },
    as: {
      description: 'The element type to render (all types)',
      control: {
        type: 'select',
        options: ['span', 'div', 'p', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      },
      table: {
        defaultValue: { summary: 'span' },
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof ColoredText>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <ColoredText {...args}>
      <span>Moooiin</span>
    </ColoredText>
  ),
  args: {
    themeType: 'primary',
    layer: 0,
    as: 'span',
  },
};
