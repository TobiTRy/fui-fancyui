// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

import FancySideBarOpenButton from '../FancySideBarOpenButton';

// Define metadata for the story
const meta = {
  title: 'components/molecules/FancySideBarOpenButton',
  component: FancySideBarOpenButton,
  parameters: {
    docs: {
      description: {
        component: '',
      },
    },
  },
  argTypes: {
    isOpen: {
      description: 'The FancySideBarOpenButton is open.',
      control: {
        type: 'boolean',
      },
    },
    arrowDirectionClosed: {
      description: 'The direction of the FancySideBarOpenButton when it is closed.',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    ...templateThemeType('notTransparent', 'primary', 2),
    outlined: {
      description: 'The FancySideBarOpenButton is outlined.',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The strength of the background color when the FancySideBarOpenButton is outlined.',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    externalStyle: {
      description: 'External style for the FancySideBarOpenButton list.',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the FancySideBarOpenButton.',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    direction: {
      description: 'The direction of the FancySideBarOpenButton.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    justify: {
      description: 'The justify of the FancySideBarOpenButton.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    noMargin: {
      description: 'Deactivates the margin of the FancySideBarOpenButton (Is needed turned on the FancySideBar.)',
      control: {
        type: 'boolean',
      },
    },
    wide: {
      description: 'The FancySideBarOpenButton is wide.',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FancySideBarOpenButton>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancySideBarOpenButton {...args} />,
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

export const BarFormat: Story = {
  render: (args) => <FancySideBarOpenButton {...args} />,
  args: {
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
