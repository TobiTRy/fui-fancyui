// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import SingleInput from '../SingleInput';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Import the component to be tested

// fix for building ... because storybook is not able to handle the default export
const HelperComponent = (props: React.ComponentProps<typeof SingleInput>) => <SingleInput {...props} />;
HelperComponent.displayName = 'SingleInputAtom';

// Define metadata for the story
const meta = {
  component: HelperComponent,
  title: 'components/atoms/SingleInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `SingleInput` component is designed for inputting a single letter or number, typically used within a verification process. It utilizes a styled input field to allow for a customized appearance and behavior, including theme and focus states. The component is offering a controlled component approach with a focus on accessibility and ease of integration into forms.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'secondary', 0),
    value: {
      description: 'The value of the input, with a maximum length of 1',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'External styling for the input field',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof HelperComponent>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    value: '1',
    themeType: 'secondary',
    layer: 0,
  },
};
