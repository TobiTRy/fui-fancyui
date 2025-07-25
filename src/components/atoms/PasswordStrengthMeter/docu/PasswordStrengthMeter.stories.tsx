// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import PasswordStrengthMeter from '../PasswordStrengthMeter';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  title: 'components/atoms/PasswordStrengthMeter',
  component: PasswordStrengthMeter,
  parameters: {
    docs: {
      description: {
        component:
          'The `PasswordStrengthMeter` is a React component designed to visually display the strength of a password. It offers flexibility by presenting the strength in two distinct styles:',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    compareWith: {
      description: 'Compare the password with other strings',
      control: {
        // controll array
        type: 'object',
      },
    },
    password: {
      description: 'The password to be checked',
      control: {
        type: 'text',
      },
    },
    borderRadius: {
      description: 'The border radius of the component',
      control: {
        type: 'select',
      },
    },
    borderRadiusBar: {
      description: 'The border radius of the progress bar',
      control: {
        type: 'select',
      },
    },
    notABar: {
      description: 'If true, the component will not be a bar',
      control: {
        type: 'boolean',
      },
    },
    ...templateThemeType('notTransparent', 'primary', 3),
  },
} satisfies Meta<typeof PasswordStrengthMeter>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <PasswordStrengthMeter {...args} />,
  args: {
    password: 'password',
    compareWith: ['password'],
  },
};
