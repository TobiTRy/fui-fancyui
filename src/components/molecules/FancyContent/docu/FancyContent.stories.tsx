import React from 'react';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import SVGInfoSign from '../../../icons/SVGInfoSign/SVGInfoSign';

import type { Meta, StoryObj } from '@storybook/react';

import { FancyContent } from '../index';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyContent,
  title: 'components/molecules/FancyContent',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyContent` component is a flexible and reusable component designed for displaying content such as titles, descriptions, and icons together using CSS Grid layout. It supports six main layout modes: normal (2x2 grid), stack (single column), row (horizontal), span (icon spans rows), inline (icon and title on same line), and auto (smart detection). The component emphasizes ease of use, aesthetic flexibility, and seamless integration into various UI elements like buttons, chips, and more.',
      },
    },
  },
  argTypes: {
    layoutMode: {
      description:
        'Layout mode for the grid: normal = 2x2 grid, stack = single column, row = horizontal row, span = icon spans rows, inline = icon and title on same line, auto = determines based on content',
      control: {
        type: 'select' as const,
      },
      options: ['normal', 'stack', 'row', 'span', 'inline', 'auto'],
    },
    alignIcon: {
      description: 'Position of the icon relative to content',
      control: {
        type: 'radio' as const,
      },
      options: ['left', 'right'],
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
    justify: {
      description: 'Horizontal alignment of all content',
      control: {
        type: 'select' as const,
      },
      options: ['left', 'center', 'right'],
    },
    align: {
      description: 'Vertical alignment of all content',
      control: {
        type: 'select' as const,
      },
      options: ['flex-start', 'center', 'flex-end', 'stretch'],
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
  },
};

export const RowLayout: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Row Layout</FancyContent.Title>
        <FancyContent.Description>Everything arranged horizontally in a row</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGInfoSign />
        </FancyContent.Icon>
        <FancyContent.Title>Row without Description</FancyContent.Title>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'row',
  },
};

export const InlineLayout: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Inline Layout</FancyContent.Title>
        <FancyContent.Description>Icon and title on same line, description spans below</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGInfoSign />
        </FancyContent.Icon>
        <FancyContent.Title>Inline without Description</FancyContent.Title>
      </FancyContent>

      <FancyContent {...args} alignIcon="right">
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Right-aligned Inline</FancyContent.Title>
        <FancyContent.Description>Icon aligned to the right in inline layout</FancyContent.Description>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'inline',
    gapBetweenIcon: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Inline layout places the icon and title side-by-side on the same row, with the description spanning the full width below. Perfect for compact headers with supporting text.',
      },
    },
  },
};

export const SpanLayout: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Span Layout</FancyContent.Title>
        <FancyContent.Description>Icon spans both title and description rows vertically</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGInfoSign />
        </FancyContent.Icon>
        <FancyContent.Title>Span without Description</FancyContent.Title>
      </FancyContent>

      <FancyContent {...args} alignIcon="right">
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Right-aligned Span</FancyContent.Title>
        <FancyContent.Description>Icon spans vertically on the right side</FancyContent.Description>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'span',
    gapBetweenIcon: 'sm',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Span layout makes the icon span across both title and description rows, creating a vertical alignment that works well for larger icons or when emphasizing the visual element.',
      },
    },
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
    gapBetweenText: 'xs',
    gapBetweenIcon: 'md',
  },
};

export const OnlyIconAndDescription: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGInfoSign />
      </FancyContent.Icon>
      <FancyContent.Description>
        This description takes the title position since there's no title
      </FancyContent.Description>
    </FancyContent>
  ),
  args: {
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

export const OnlyIconAndDescriptionRightAligned: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGCheckMark />
      </FancyContent.Icon>
      <FancyContent.Description>Success message with right-aligned icon</FancyContent.Description>
    </FancyContent>
  ),
  args: {
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

export const OnlyIconAndDescriptionStack: Story = {
  render: (args) => (
    <FancyContent {...args}>
      <FancyContent.Icon>
        <SVGInfoSign />
      </FancyContent.Icon>
      <FancyContent.Description>
        This is a longer description that should be centered below the icon in stack mode
      </FancyContent.Description>
    </FancyContent>
  ),
  args: {
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

export const AlignmentVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args} justify="left">
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Left Aligned</FancyContent.Title>
        <FancyContent.Description>Content aligned to the left</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args} justify="center">
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Center Aligned</FancyContent.Title>
        <FancyContent.Description>Content centered horizontally</FancyContent.Description>
      </FancyContent>

      <FancyContent {...args} justify="right">
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
        <FancyContent.Title>Right Aligned</FancyContent.Title>
        <FancyContent.Description>Content aligned to the right</FancyContent.Description>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'normal',
  },
};

export const SingleElements: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FancyContent {...args}>
        <FancyContent.Icon>
          <SVGCheckMark />
        </FancyContent.Icon>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Title>Only Title</FancyContent.Title>
      </FancyContent>

      <FancyContent {...args}>
        <FancyContent.Description>Only Description</FancyContent.Description>
      </FancyContent>
    </div>
  ),
  args: {
    layoutMode: 'auto',
  },
  parameters: {
    docs: {
      description: {
        story: 'Examples showing single elements - these automatically use simplified layout without grid structure.',
      },
    },
  },
};
