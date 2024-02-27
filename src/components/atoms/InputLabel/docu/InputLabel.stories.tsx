// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Import the component to be tested
import InputLabel from '@/components/atoms/InputLabel/InputLabel';

// Define metadata for the story
const meta = {
  component: InputLabel,
  title: 'components/atoms/InputLabel',
  parameters: {
    docs: {
      description: {
        component:
          'Is simply a label for the input. It is used to describe the input. The Parents are the Aligned and AnimatedInputLabel. <br> Its only used for grounding the design',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    isActive: {
      description:
        'Indicates whether the label is in an active state, typically used to highlight when the associated input is focused.',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    systemMessageType: {
      description: ' Specifies the system message type for styling, such as error, warning, or success messages.',
      control: { type: 'select' },
      defaultValue: undefined,
      options: ['error', 'warning', 'success', 'info', undefined],
    },
    lableVariant: {
      description:
        'Chooses between a static or animated label variant, with animated offering dynamic styling changes based on the active state.',
      control: { type: 'select' },
      defaultValue: {
        summary: 'animated',
      },
      options: ['static', 'animated'],
    },
    align: {
      description: 'Sets the text alignment within the label. Can be left, right, or center',
      control: { type: 'radio' },
      defaultValue: {
        summary: 'left',
      },
      options: ['left', 'right', 'center'],
    },
    externalStyle: {
      description: 'Allows for additional external styling to be applied to the label.',
    },
  },
} satisfies Meta<typeof InputLabel>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <InputLabel {...args}>Label</InputLabel>,
  args: {
    themeType: 'secondary',
    isActive: false,
    systemMessageType: undefined,
    lableVariant: 'animated',
    align: 'left',
    externalStyle: '',
  },
};
