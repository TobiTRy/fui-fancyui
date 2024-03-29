// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Import the component to be tested
import Menue from '../Menue';

// Define metadata for the story
const meta = {
  title: 'components/atoms/Menue',
  component: Menue,
  parameters: {
    docs: {
      description: {
        component:
          'The Menue component is a flexible and customizable container designed to display a list of items or options. It supports any children components, making it highly versatile for various use cases. ',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 2),
    outlined: {
      description: 'If true, the menu list will have an outline',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The strength of the background color when the menu list is outlined.',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    externalStyle: {
      description: 'External style for the menu list.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Menue>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <Menue {...args}>
      <Menue.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <Menue.Divider label="Moooiin" />
      <Menue.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <Menue.Divider />
      <Menue.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <Menue.Item label="Muuusettingshhh" icon={<>⚙️</>} />
      <Menue.Divider />
      <Menue.Item label="Logout" icon={<>🚪</>} />
    </Menue>
  ),
  args: {
    themeType: 'primary',
    layer: 2,
    outlinedBackgroundStrength: 1,
  },
};
