import React from 'react';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import SVGInfoSign from '../../../icons/SVGInfoSign/SVGInfoSign';

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
          'The `FancyContent` component is a flexible and reusable component designed for displaying content such as titles, descriptions, and icons together using CSS Grid layout. It supports three main layout modes: normal (2x2 grid), stack (single column), and auto (smart detection). The component emphasizes ease of use, aesthetic flexibility, and seamless integration into various UI elements like buttons, chips, and more.',
      },
    },
  },
  argTypes: {
    layoutMode: {
      description:
        'Layout mode for the grid: normal = 2x2 grid, stack = single column, auto = determines based on content',
      control: {
        type: 'select' as const,
      },
      options: ['normal', 'stack', 'auto'],
    },
    alignIcon: {
      description: 'Position of the icon relative to content',
      control: {
        type: 'radio' as const,
      },
      options: ['left', 'right'],
    },
    gap: {
      description: 'Overall gap for the grid layout',
      control: {
        type: 'text' as const,
      },
    },
    gapBetweenIcon: {
      description: 'Gap between the icon and content',
      control: {
        type: 'text' as const,
      },
    },
    gapBetweenText: {
      description: 'Gap between text elements (title and description)',
      control: {
        type: 'text' as const,
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
      <FancyContent.Title>Success Title</FancyContent.Title>
      <FancyContent.Description>This is a description text</FancyContent.Description>
    </FancyContent>
  ),
  args: {
    layoutMode: 'normal',
  },
};

export const NormalLayout: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Normal Grid Layout</FancyContent.Title>
        <FancyContent.Description>Icon and title on top row, description below</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>No Description</FancyContent.Title>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'normal',
    gapBetweenIcon: 'sm',
  },
};

export const StackLayout: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Stacked Layout</FancyContent.Title>
        <FancyContent.Description>Everything is centered and stacked vertically</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Stack without Description</FancyContent.Title>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'stack',
    gap: 'xs',
  },
};

export const RightAlignedIcon: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Right-aligned Icon</FancyContent.Title>
        <FancyContent.Description>Icon appears on the right side</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Right Icon, No Description</FancyContent.Title>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'normal',
    alignIcon: 'right',
    gapBetweenIcon: 'sm',
  },
};

export const AutoLayout: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Auto Layout Mode</FancyContent.Title>
        <FancyContent.Description>Smart detection chooses the best layout</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Title>Title Only</FancyContent.Title>
        <FancyContent.Description>No icon, auto layout</FancyContent.Description>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'auto',
  },
};

export const WithImage: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Image>
          <img src="https://via.placeholder.com/64" alt="placeholder" />
        </FancyContent.Image>
        <FancyContent.Title>With Image</FancyContent.Title>
        <FancyContent.Description>Using image instead of icon</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args} layoutMode="stack">
        <FancyContent.Image>
          <img src="https://via.placeholder.com/64" alt="placeholder" />
        </FancyContent.Image>
        <FancyContent.Title>Stacked Image</FancyContent.Title>
        <FancyContent.Description>Image in stack layout</FancyContent.Description>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'normal',
  },
};

export const CustomSpacing: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGCheckMark />
      </FancyContent.Icon>
      <FancyContent.Title>Custom Spacing</FancyContent.Title>
      <FancyContent.Description>Demonstrates custom gap controls</FancyContent.Description>
    </FancyContent>
  ),
  args: {
    layoutMode: 'normal',
    gap: 'lg',
    gapBetweenText: 'xs',
    gapBetweenIcon: 'md',
  },
};

export const OnlyIconAndDescription: StoryObj<typeof FancyContent> = {
  args: {
    children: [
      <FancyContent.Icon key="icon" className="icon">
        <SVGInfoSign />
      </FancyContent.Icon>,
      <FancyContent.Description key="description" className="description">
        This description takes the title position since there's no title
      </FancyContent.Description>,
    ],
    layoutMode: 'normal',
    themeType: 'primary',
  },
  parameters: {
    docs: {
      description: {
        story:
          'When only an icon and description are provided (no title), the description automatically moves to the title position in the grid layout.',
      },
    },
  },
};

export const OnlyIconAndDescriptionRightAligned: StoryObj<typeof FancyContent> = {
  args: {
    children: [
      <FancyContent.Icon key="icon" className="icon">
        <SVGCheckMark />
      </FancyContent.Icon>,
      <FancyContent.Description key="description" className="description">
        Success message with right-aligned icon
      </FancyContent.Description>,
    ],
    layoutMode: 'normal',
    alignIcon: 'right',
    themeType: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'Example showing description in title position with a right-aligned icon.',
      },
    },
  },
};

export const OnlyIconAndDescriptionStack: StoryObj<typeof FancyContent> = {
  args: {
    children: [
      <FancyContent.Icon key="icon" className="icon">
        <SVGInfoSign />
      </FancyContent.Icon>,
      <FancyContent.Description key="description" className="description">
        This is a longer description that should be centered below the icon in stack mode
      </FancyContent.Description>,
    ],
    layoutMode: 'stack',
    themeType: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story: 'Stack layout with only icon and description - description takes the title position and gets centered.',
      },
    },
  },
};
