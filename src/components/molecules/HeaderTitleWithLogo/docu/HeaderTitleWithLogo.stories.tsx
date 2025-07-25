import type { Meta, StoryObj } from '@storybook/react';

import HeaderTitleWithLogo from '../HeaderTitleWithLogo';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGFui } from '@/components/icons';

const meta = {
  component: HeaderTitleWithLogo,
  title: 'components/molecules/HeaderTitleWithLogo',
  parameters: {
    docs: {
      description: {
        component:
          'The HeaderTitleWithLogo component is designed to integrate a logo and a title into a header, providing a unified and visually appealing presentation. It is highly customizable, allowing the adjustment of themes, layers, and additional HTML attributes to fit the needs of various UI designs.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 1),
    title: {
      description: 'The title text to be displayed.',
      control: {
        type: 'text',
      },
    },
    logo: {
      description: 'The logo to be displayed.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof HeaderTitleWithLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <HeaderTitleWithLogo {...args} />,
  args: {
    title: 'Title',
    logo: <SVGFui />,
    layer: 0,
    themeType: 'secondary',
  },
};
