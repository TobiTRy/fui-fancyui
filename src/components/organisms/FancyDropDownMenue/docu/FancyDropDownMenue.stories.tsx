// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDropDownMenue from '../FancyDropDownMenue';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyDropDownMenue,
  title: 'components/organisms/FancyDropDownMenue',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyDropDownMenue component is a customizable dropdown menu that leverages React hooks for state management and conditional rendering. It integrates a delay effect upon mounting or state changes, ensuring a smooth user experience. The component utilizes props to control its open state and customize its appearance, adhering to the provided theme and layering properties.',
      },
      story: {
        height: '200px',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    isOpen: {
      description: 'Determines if the dropdown is open or closed',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    width: {
      description: 'Width of the dropdown',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '50%' },
      },
    },
    alignHorizontal: {
      description: 'Horizontal alignment of the dropdown',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'center' },
      },
    },
    alignVertical: {
      description: 'Vertical alignment of the dropdown',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'top' },
      },
    },
  },
} satisfies Meta<typeof FancyDropDownMenue>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDropDownMenue {...args} />,
  args: {
    isOpen: true,
    themeType: 'primary',
    layer: 1,
    width: '50%',
    alignHorizontal: 'center',
    alignVertical: 'top',
    children: (
      <>
        <p>test</p>
        <p>test</p>
      </>
    ),
  },
};
