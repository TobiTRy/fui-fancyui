import type { Meta, StoryObj } from '@storybook/react';

import FancySystemMessageBox from '../FancySystemMessageBox';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancySystemMessageBox,
  title: 'components/templates/FancySystemMessageBox',
  parameters: {
    docs: {
      description: {
        component:
          'FancySystemMessageBox is a composite React component designed to display system messages with a customizable icon, title, and description. This component combines visual elements and text in a flexible layout to enhance the presentation of system messages across various themes and sizes.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'error', 0),
    sizeC: {
      description: 'The size of the component.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    icon: {
      description: 'The icon to be displayed in the system message box.',
      control: {
        type: 'object',
      },
    },
    title: {
      description: 'The title of the system message box.',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'The description of the system message box.',
      control: {
        type: 'text',
      },
    },
    direction: {
      description: 'The flex direction of the component',
      control: {
        type: 'select',
      },
    },
    justify: {
      description: 'The flex justify of the component',
      control: {
        type: 'select',
      },
    },
    align: {
      description: 'The flex align of the component',
      control: {
        type: 'select',
      },
    },
    gapBetweenIcon: {
      description: 'The gap between the icon and the content',
      control: {
        type: 'text',
      },
    },
    gapBetweenText: {
      description: 'The gap between the content',
      control: {
        type: 'text',
      },
    },
    alignIcon: {
      description: 'The align of the icon',
      control: {
        type: 'radio',
      },
    },
    alignTextGroup: {
      description: 'The align of the text group',
      control: {
        type: 'radio',
      },
    },
    directionTextGroup: {
      description: 'The direction of the text group',
      control: {
        type: 'radio',
      },
    },
  },
} satisfies Meta<typeof FancySystemMessageBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Error: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> 🌇 </>,
    title: 'This is a InfoCard',
    description: 'This is a InfoCard',
    themeType: 'error',
    layer: 0,
    sizeC: 'sm',
    direction: 'row',
    directionTextGroup: 'column',
    alignTextGroup: 'flex-start',
    justify: 'flex-start',
    align: 'center',
    gapBetweenText: '0px',
    alignIcon: 'left',
  },
};

export const Info: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> 🌇 </>,
    title: 'This is a InfoCard',
    description: 'This is a InfoCard',
    themeType: 'info',
    layer: 0,
    sizeC: 'sm',
    direction: 'row',
    directionTextGroup: 'column',
    alignTextGroup: 'flex-start',
    justify: 'flex-start',
    align: 'center',
    gapBetweenText: '0px',
    alignIcon: 'left',
  },
};
export const Success: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> 🌇 </>,
    title: 'This is a InfoCard',
    description: 'This is a InfoCard',
    themeType: 'success',
    layer: 0,
    sizeC: 'sm',
    direction: 'row',
    directionTextGroup: 'column',
    alignTextGroup: 'flex-start',
    justify: 'flex-start',
    align: 'center',
    gapBetweenText: '0px',
    alignIcon: 'left',
  },
};

export const Warning: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> 🌇 </>,
    title: 'This is a InfoCard',
    description: 'This is a InfoCard',
    themeType: 'warning',
    layer: 0,
    sizeC: 'sm',
    direction: 'row',
    directionTextGroup: 'column',
    alignTextGroup: 'flex-start',
    justify: 'flex-start',
    align: 'center',
    gapBetweenText: '0px',
    alignIcon: 'left',
  },
};
