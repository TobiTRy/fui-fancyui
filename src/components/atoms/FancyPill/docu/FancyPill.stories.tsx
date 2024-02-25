// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyPill from '../FancyPill';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: FancyPill,
  title: 'components/atoms/FancyPill',

  parameters: {
    docs: {
      description: {
        component:
          'The FancyPill component is for displaying a pill that can fill with somthing, it can be used for displaying content in a pill <br> - height: the height of the pill <br> - width: the width of the pill <br> - themeType: the theme type of the pill <br> - layer: the layer of the pill <br> - textLayer: the layer of the text <br> - borderRadius: the rounded edges of the pill <br> - shadow: is the pill shadowed',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('allThemeTypes', 'primary', 0),
    isActive: {
      description: 'Is the component active.',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    isHoverable: {
      description: 'Enables hover effects on the pill.',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    outlined: {
      description: 'A boolean that styles the pill with an outline.',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outlined component.',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
      defaultValue: {
        summary: 0.5,
      },
    },
    externalStyle: {
      description: 'The external style of the component.',
      control: {
        type: 'object',
      },
    },
    children: {
      description: 'The content of the pill.',
    },
  },
} satisfies Meta<typeof FancyPill>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyPill {...args} />,
  args: {
    children: 'Hiii',
    themeType: 'primary',
    layer: 3,
    isActive: false,
    isHoverable: false,
    outlined: false,
    outlinedBackgroundStrength: 0.5,
    externalStyle: '',
  },
};
