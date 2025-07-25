// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { TextAvatar } from '@/components/molecules/TextAvatar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: TextAvatar,
  title: 'components/molecules/TextAvatar',

  parameters: {
    docs: {
      description: {
        component:
          'The `TextAvatar` component is designed to display an avatar with customizable background color, size, and text. This component is useful for showing user initials or short names within a stylized avatar circle or shape. It supports customization of the avatar´s appearance through various props, such as size, color, rounding of edges, and text content.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    borderRadius: {
      description: 'Determines the border-radius of the avatar',
      control: { type: 'select' },
    },
    casing: {
      description: 'Determines the casing of the text inside the avatar.',
      control: { type: 'select' },
    },
    sizeC: {
      description: 'The size of the image.',
      control: { type: 'select' },
    },
    text: {
      control: { type: 'text' },
      description: 'The text to display inside the avatar. Usually initials.',
    },
    letterLength: {
      control: { type: 'number' },
      description: 'The amount of letters to be displayed.',
    },
    fontSizes: {
      control: { type: 'select' },
      description: 'Variant for the text font size. It overrides the default size determined by the avatar size.',
    },
    externalStyle: {
      control: { type: 'text' },
      description: 'External styles to be applied to the avatar.',
    },
    color: {
      control: { type: 'color' },
      description: 'Color of the text inside the avatar.',
    },
    backgroundColor: {
      control: { type: 'color' },
      description: 'Background color of the avatar.',
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
  },
} satisfies Meta<typeof TextAvatar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <TextAvatar {...args} />,
  args: {
    text: 'Tobias',
    borderRadius: 'complete',
    sizeC: 'md',
    layer: 2,
    themeType: 'primary',
  },
};
