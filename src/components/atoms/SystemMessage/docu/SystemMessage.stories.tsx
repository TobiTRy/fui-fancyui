// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SystemMessage from '../SystemMessage';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: SystemMessage,
  title: 'components/atoms/SystemMessage',

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
    ...templateThemeType('notTransparent', 'primary', 0),
    systemMessageState: {
      description: 'The system message type',
      type: { name: 'string', required: false },
      options: ['error', 'warning', 'info', 'success', undefined],
      control: { type: 'select' },
    },
    textSettings: {
      description: 'The props for the typography component.',
      control: {
        type: 'object',
      },
    },
    ownTypographyComponent: {
      description: 'The flag to use own typography component.',
      control: {
        type: 'boolean',
      },
    },
    externalStyle: {
      description: 'The external style for the component.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof SystemMessage>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SystemMessage {...args} />,
  args: {
    children: 'This is a system message',
    systemMessageState: 'error',
    themeType: 'secondary',
    layer: 0,
    textSettings: {
      variant: 'subTextFootnote',
      lineHeight: 1,
    },
    ownTypographyComponent: false,
    externalStyle: {
      marginTop: '10px',
    },
  },
};
