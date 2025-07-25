import React from 'react';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';

import type { Meta, StoryObj } from '@storybook/react';

import FancyContent from '../FancyContent';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyContent,
  title: 'components/molecules/FancyContent',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyContent` component is a flexible and reusable component designed for displaying content such as titles, descriptions, and icons together in a cohesive layout. It supports customization of alignment, direction, and spacing, making it suitable for various UI elements like buttons, chips, and more. This component is part of a larger system that emphasizes ease of use, aesthetic flexibility, and the ability to integrate seamlessly into different parts of an application´s UI.',
      },
    },
  },
  argTypes: {
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
    ...templateThemeType('notTransparent', 'secondary', 0),
  },
} satisfies Meta<typeof FancyContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGCheckMark />
      </FancyContent.Icon>
      <FancyContent.Title>Text</FancyContent.Title>
    </FancyContent>
  ),
  args: {},
};

export const WithAllProps: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGCheckMark />
      </FancyContent.Icon>
      <FancyContent.Title>Text</FancyContent.Title>
    </FancyContent>
  ),
  args: {
    direction: 'row',
    justify: 'flex-start',
    align: 'flex-start',
    gapBetweenIcon: 'sm',
    gapBetweenText: 'sm',
    alignIcon: 'left',
    alignTextGroup: 'flex-start',
    directionTextGroup: 'column',
  },
};

export const WithImage: Story = {
  render: (args) => (
    <FancyContent {...args} align="center" justify="center">
      <FancyContent.Image>
        <img src="https://via.placeholder.com/150" alt="placeholder" />
      </FancyContent.Image>
      <FancyContent.Title>Text</FancyContent.Title>
    </FancyContent>
  ),
  args: {},
};
