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
      description: 'The flex direction of the component',
      control: {
        type: 'select' as const,
      },
    },
    justify: {
      description: 'The flex justify of the component',
      control: {
        type: 'select' as const,
      },
    },
    align: {
      description: 'The flex align of the component',
      control: {
        type: 'select' as const,
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
    alignIcon: {
      description: 'The align of the icon',
      control: {
        type: 'radio' as const,
      },
    },
    alignTextGroup: {
      description: 'The align of the text',
      control: {
        type: 'radio' as const,
      },
    },
    directionTextGroup: {
      description: 'The direction of the text',
      control: {
        type: 'radio' as const,
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

export const WithAllProps: Story = {
  render: (args) => <FancyInfoText {...args} />,
  args: {
    icon: <SVGCheckMark />,
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    gapBetweenIcon: 'sm',
    gapBetweenText: 'sm',
    alignIcon: 'left',
  },
};
