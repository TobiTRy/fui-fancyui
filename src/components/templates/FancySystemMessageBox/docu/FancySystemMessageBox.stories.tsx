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
        type: 'select' as const,
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    icon: {
      description: 'The icon to be displayed in the system message box.',
      control: {
        type: 'object' as const,
      },
    },
    title: {
      description: 'The title of the system message box.',
      control: {
        type: 'text' as const,
      },
    },
    description: {
      description: 'The description of the system message box.',
      control: {
        type: 'text' as const,
      },
    },
    gapBetweenIcon: {
      description: 'The gap between the icon and the content',
      control: {
        type: 'text' as const,
      },
    },
    gapBetweenText: {
      description: 'The gap between the content',
      control: {
        type: 'text' as const,
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
    title: 'This is a Error Message',
    description: 'Something went wrong, please try again',
    themeType: 'error',
    layer: 0,
    sizeC: 'sm',
    gapBetweenText: '0px',
  },
};

export const Info: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> ℹ️ </>,
    title: 'Information Message',
    description: 'Here is some helpful information',
    themeType: 'info',
    layer: 0,
    sizeC: 'sm',
    gapBetweenText: '0px',
  },
};

export const Success: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> ✅ </>,
    title: 'Success Message',
    description: 'Operation completed successfully',
    themeType: 'success',
    layer: 0,
    sizeC: 'sm',
    gapBetweenText: '0px',
  },
};

export const Warning: Story = {
  render: (args) => <FancySystemMessageBox {...args} />,
  args: {
    icon: <> ⚠️ </>,
    title: 'Warning Message',
    description: 'Please pay attention to this warning',
    themeType: 'warning',
    layer: 0,
    sizeC: 'sm',
    gapBetweenText: '0px',
  },
};
