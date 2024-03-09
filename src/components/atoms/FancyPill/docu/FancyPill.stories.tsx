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
          'In an era where user interaction and response cues are pivotal in UI/UX design, the FancyPill component serves as a dynamic and versatile tool. Its primary purpose is to enhance user interaction through various states like focus and hover, catering to a wide range of actions and responses in an application`s interface.',
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
