// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Import the component to be tested
import MenuList from '../MenuList';

// Define metadata for the story
const meta = {
  title: 'components/atoms/MenuList',
  component: MenuList,
  parameters: {
    docs: {
      description: {
        component:
          'The MenuList component is a flexible and customizable container designed to display a list of items or options. It supports any children components, making it highly versatile for various use cases. ',
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
} satisfies Meta<typeof MenuList>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <MenuList {...args}>
      <p>Some Content</p>
      {args.children}
    </MenuList>
  ),
  args: {
    themeType: 'primary',
    layer: 2,
    outlinedBackgroundStrength: 1,
  },
};
