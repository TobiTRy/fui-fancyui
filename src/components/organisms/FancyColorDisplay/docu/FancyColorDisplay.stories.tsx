import type { Meta, StoryObj } from '@storybook/react';

import FancyColorDisplay from '../FancyColorDisplay';

const meta = {
  component: FancyColorDisplay,
  title: 'components/organisms/FancyColorDisplay',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyColorDisplay component is an enhanced version of the ColorDisplay component, offering additional features like the ability to copy the displayed color value to the clipboard, and options to display the color value and a clipboard icon. It accepts various props for customization, such as color value, opacity, size, etc., and is designed to provide a more interactive and user-friendly way to present color information in UIs.',
      },
    },
  },
  argTypes: {
    borderRadius: {
      description: 'The border radius of the color display.',
      control: {
        type: 'object',
      },
    },
    colorValue: {
      description: 'The color to be displayed. Accepts a Color object or a color string.',
      type: { name: 'string', required: true },
      control: { type: 'color' },
    },
    fullHeight: {
      description: 'Whether the chip should take up the full height.',
      control: {
        type: 'boolean',
      },
    },
    opacity: {
      description: 'The opacity of the chip.',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
    showClipboard: {
      description: 'Whether to display the clipboard icon.',
      control: {
        type: 'boolean',
      },
    },
    showText: {
      description: 'Whether to display the color value text.',
      control: {
        type: 'boolean',
      },
    },
    sizeC: {
      description: 'The size of the color display.',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyColorDisplay>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyColorDisplay {...args} />,
  args: {
    colorValue: '#ff0000',
    fullHeight: false,
    opacity: 1,
    showClipboard: true,
    showText: true,
    sizeC: 'sm',
  },
};
