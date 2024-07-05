// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

import FancySideBarItem from '../FancySideBarItem';
import { SVGCheckMark } from '@/components/icons';

// Define metadata for the story
const meta = {
  title: 'components/templates/FancySideBarItem',
  component: FancySideBarItem,
  parameters: {
    docs: {
      description: {
        component:
          '`FancySideBarItem` is a template version of the `SideBarItem` component, designed to display an item with an icon and a label within a sidebar. It enhances the `SideBarItem` by integrating specific properties for icons and labels, maintaining a consistent size.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 2),
    outlined: {
      description: 'The FancySideBarItem is outlined.',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The strength of the background color when the FancySideBarItem is outlined.',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    externalStyle: {
      description: 'External style for the FancySideBarItem list.',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the FancySideBarItem.',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    direction: {
      description: 'The direction of the FancySideBarItem.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    justify: {
      description: 'The justify of the FancySideBarItem.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    noMargin: {
      description: 'Deactivates the margin of the FancySideBarItem. (Is needed for the FancySideBar too look good.)',
      control: {
        type: 'boolean',
      },
    },
    wide: {
      description: 'The FancySideBarItem is wide.',
      control: {
        type: 'boolean',
      },
    },
    hoverLayer: {
      description: 'The layer of the hover effect.',
      control: {
        type: 'number',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    typographySettings: {
      description: 'Typography settings for the label inherit from the typography component.',
      control: {
        type: 'object',
      },
    },
    iconSettings: {
      description: 'Icon settings inherit from the FancySVGAtom component.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancySideBarItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancySideBarItem {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Home',
    themeType: 'primary',
    layer: 2,
    outlined: false,
    noMargin: false,
    outlinedBackgroundStrength: 0.5,
    sizeC: 'sm',
    direction: 'left',
    justify: 'left',
  },
};

export const BarFormat: Story = {
  render: (args) => <FancySideBarItem {...args} />,
  args: {
    icon: <SVGCheckMark />,
    label: 'Home',
    themeType: 'primary',
    layer: 2,
    hoverLayer: 4,
    outlined: false,
    noMargin: true,
    wide: true,
    outlinedBackgroundStrength: 0.5,
    sizeC: 'sm',
    direction: 'left',
    justify: 'left',
    borderRadius: '0',
  },
};
