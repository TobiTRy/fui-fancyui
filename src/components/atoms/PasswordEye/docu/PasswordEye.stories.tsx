// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import PasswordEye from '../PasswordEye';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: PasswordEye,
  title: 'components/atoms/PasswordEye',
  parameters: {
    docs: {
      description: {
        component:
          'The `PasswordEye` component is a React component designed to toggle the visibility of a password input field. It switches between two states: an "open eye" icon representing password visibility and a "crossed-out eye" icon representing hidden password text. This component is flexible, allowing customization of the icons used for the open and crossed states, as well as the styling and behavior of the icon through various properties.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    isShow: {
      description: 'Define if the password is shown',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    onClick: {
      description: 'Define the onClick event',
      action: 'clicked',
    },
    customEyeOpen: {
      description: 'Define the custom eye open icon',
      control: {
        type: 'object',
      },
    },
    customEyeCrossed: {
      description: 'Define the custom eye crossed icon',
      control: {
        type: 'object',
      },
    },
    ...templateThemeType('notTransparent', 'secondary', 0),
    externalStyle: {
      description: 'Define the external style',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'Define the size of the icon',
      control: {
        type: 'select',
        options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      },
      table: {
        defaultValue: { summary: 'xxs' },
      },
    },
    systemMessage: {
      description: 'Define the system message',
      control: {
        type: 'select',
        options: ['success', 'error', 'warning', 'info'],
      },
    },
  },
} satisfies Meta<typeof PasswordEye>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <PasswordEye {...args} />,
  args: {
    isShow: false,
    onClick: () => console.log('click'),
    customEyeOpen: null,
    customEyeCrossed: null,
    themeType: 'secondary',
    layer: 0,
    externalStyle: {},
    sizeC: 'xxs',
  },
};
