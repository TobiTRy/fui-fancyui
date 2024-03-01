// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SimpleDialog from '../SimpleDialog';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: SimpleDialog,
  title: 'components/atoms/SimpleDialog',
  parameters: {
    docs: {
      description: {
        component:
          'The SimpleDialog component is a versatile dialog container, designed to display content in a modal-like overlay. It leverages @react-spring/web for smooth opening and closing animations, enhancing user experience with a visually appealing fade effect. This component supports customization through theme types, layering, and additional HTML attributes, making it a flexible solution for various UI requirements.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 1),
    isOpen: {
      description: 'Define if the dialog is open or not',
      control: {
        type: 'boolean',
      },
      defaultValue: false,
    },
  },
} satisfies Meta<typeof SimpleDialog>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SimpleDialog {...args} />,
  args: {
    isOpen: true,
    children: 'Test',
    layer: 1,
    themeType: 'primary',
  },
};
