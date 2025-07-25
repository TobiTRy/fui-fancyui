import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

import FancyLine from '../FancyLine';

const meta = {
  component: FancyLine,
  title: 'components/atoms/FancyLine',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyLine` component is a versatile and dynamic line component designed to enhance the user experience and interface design. It supports both vertical and horizontal orientations and allows customization of thickness, length, margin, theme type, and more. This component is ideal for adding visually appealing separators or decorative elements to your web application while maintaining consistency with your design theme.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'accent', 0),
    direction: {
      description: 'Determines the orientation of the line. "horizontal" or "vertical"',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    thickness: {
      description:
        'Specifies the thickness of the line. Accepts CSS size units. Default is `1px` for the respective orientation',
      table: {
        defaultValue: { summary: '1px' },
      },
      control: {
        type: 'text',
      },
    },
    margin: {
      description:
        'This prop works like the margin in css. you can use a array with values like ["sm", "md"]. or an normal spacing like "xs"',
      control: {
        type: 'text',
      },
    },
    length: {
      description:
        'Specifies the length of the line. Accepts CSS size units. Default is `auto`, allowing the line to fill its container.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    isActive: {
      description: 'Is the Line active, gives it the accent color',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    systemMessageType: {
      description: 'Optional prop to specify system message color theming',
      control: {
        type: 'select',
      },
      defaultValue: undefined,
      options: ['error', 'warning', 'success', 'info', undefined],
    },
  },
} satisfies Meta<typeof FancyLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyLine {...args} />,
  args: {
    themeType: 'accent',
    layer: 0,
    direction: 'horizontal',
    thickness: '1px',
    margin: 'sm',
    length: '100%',
  },
};
