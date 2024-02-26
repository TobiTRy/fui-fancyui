import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

import FancyLine from '../FancyLine';

const meta = {
  component: FancyLine,
  title: 'components/atoms/FancyLine',
  parameters: {
    docs: {
      description: {
        component: 'Only a Line thats sperate something from something else.',
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
      defaultValue: {
        summary: 'horizontal',
      },
    },
    thickness: {
      description:
        'Specifies the thickness of the line. Accepts CSS size units. Default is `1px` for the respective orientation',
      defaultValue: {
        summary: '1px',
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
      defaultValue: {
        summary: '100%',
      },
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
