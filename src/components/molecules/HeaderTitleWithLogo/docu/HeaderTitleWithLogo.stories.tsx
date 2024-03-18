import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import HeaderTitleWithLogo from '../HeaderTitleWithLogo';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: HeaderTitleWithLogo,
  parameters: {
    docs: {
      description: {
        component:
          'The HeaderTitleWithLogo component creates a header layout that includes a logo and a title. It is highly customizable through properties that control its appearance and behavior, such as theme type and layout layer.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'secondary', 1),
  },
} satisfies Meta<typeof HeaderTitleWithLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <HeaderTitleWithLogo {...args} />,
  args: {
    title: 'Title',
    logo: <SVGCheckMark />,
  },
};
