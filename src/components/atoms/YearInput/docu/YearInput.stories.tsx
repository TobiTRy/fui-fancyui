// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import YearInput from '../YearInput';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: YearInput,
  title: 'components/atoms/YearInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `YearInput` component is a specialized React component designed for inputting year values. It extends from a `NumberInput` atom, tailored specifically for handling year values efficiently. The component incorporates focused input behavior, theme, layering, and size customization, making it versatile for various UI contexts.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'secondary', 0),
    sizeC: {
      description: 'The size of the week days',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'md',
      },
    },
    year: {
      description: 'The year value to be inputted',
      control: {
        type: 'number',
      },
      defaultValue: {
        summary: '2024',
      },
    },
    placeholder: {
      description: 'The placeholder text for the input',
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof YearInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <YearInput {...args} />,
  args: {
    sizeC: 'md',
    year: 2024,
    themeType: 'secondary',
    layer: 0,
  },
};
