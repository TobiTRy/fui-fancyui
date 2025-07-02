import type { Meta, StoryObj } from '@storybook/react';

import FancyInfoText from '../FancyInfoText';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGCheckMark } from '@/components/icons';

const meta = {
  component: FancyInfoText,
  title: 'components/molecules/FancyInfoText',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyInfoText` component is a flexible and reusable component designed for displaying content such as titles, descriptions, and icons together in a cohesive layout. It supports customization of alignment, direction, and spacing, making it suitable for various UI elements like buttons, chips, and more. This component is part of a larger system that emphasizes ease of use, aesthetic flexibility, and the ability to integrate seamlessly into different parts of an application´s UI.',
      },
    },
  },
  argTypes: {
    direction: {
      description: 'Layout direction: row = normal grid, column = stack layout',
      control: {
        type: 'select' as const,
      },
      options: ['row', 'column'],
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
    ...templateThemeType('notTransparent', 'secondary', 0),
  },
} satisfies Meta<typeof FancyInfoText>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyInfoText {...args} />,
  args: {
    title: 'Title',
    description: 'Description',
    icon: <SVGCheckMark />,
  },
};

export const StackLayout: Story = {
  render: (args) => <FancyInfoText {...args} />,
  args: {
    icon: <SVGCheckMark />,
    direction: 'column',
    title: 'Stacked Layout',
    description: 'Text and icon are stacked vertically',
    gapBetweenIcon: 'sm',
    gapBetweenText: 'sm',
  },
};
