// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

import SideBarItem from '../SideBarItem';
import { SVGCheckMark } from '@/components/icons';

// Define metadata for the story
const meta = {
  title: 'components/molecules/SideBarItem',
  component: SideBarItem,
  parameters: {
    docs: {
      description: {
        component:
          'The SideBarItem component is a versatile building block for creating navigation menus, sidebars, or any list-like UI element where items can be visually grouped and organized. It provides flexibility in layout, styling, and content options.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 2),
    outlined: {
      description: 'The SideBarItem is outlined.',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The strength of the background color when the SideBarItem is outlined.',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    externalStyle: {
      description: 'External style for the SideBarItem list.',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the SideBarItem.',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    direction: {
      description: 'The direction of the SideBarItem.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    justify: {
      description: 'The justify of the SideBarItem.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    noMargin: {
      description: 'The SideBarItem has no margin.',
      control: {
        type: 'boolean',
      },
    },
    wide: {
      description: 'The SideBarItem is wide.',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof SideBarItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <SideBarItem {...args}>
      <SideBarItem.Icon sizeC={'sm'}>
        <SVGCheckMark />
      </SideBarItem.Icon>
      <SideBarItem.Label sizeC={'sm'}>Home</SideBarItem.Label>
    </SideBarItem>
  ),
  args: {
    themeType: 'primary',
    layer: 2,
    outlined: false,
    outlinedBackgroundStrength: 0.5,
    sizeC: 'sm',
    direction: 'left',
    justify: 'left',
  },
};
