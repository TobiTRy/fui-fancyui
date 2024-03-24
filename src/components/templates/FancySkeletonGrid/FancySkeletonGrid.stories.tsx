import type { Meta, StoryObj } from '@storybook/react';

import FancySkeletonGrid from './FancySkeletonGrid';

const meta = {
  component: FancySkeletonGrid,
  parameters: {
    docs: {
      description: {
        component:
          'The FancySkeletonGrid Component generates Skeletonboxes based on the GridArea prop <br/> You can create a Skeleton grid with provide gridAreas prop <br/> The gridAreas prop is an array of strings, each string represents a row in the grid <br/> Each string is a space separated list of names, which defines the cells of that row <br/> The names refer to the grid-template-areas property',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    borderRadius: {
      description: 'The border radius of the component',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'xs' },
      },
    },
    gapColumn: {
      description: 'The gap column of the component',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    gapRow: {
      description: 'The gap row of the component',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    gridAreas: {
      description: 'The grid areas of the component',
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: [''] },
      },
    },
    gridAreasBreakPoints: {
      description:
        'The grid areas breakpoints of the component uses the breakpoints from the theme like sm, md, lg...)',
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: {} },
      },
    },
    height: {
      description: 'The height of the component',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    width: {
      description: 'The width of the component',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '100%' },
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancySkeletonGrid>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div style={{ height: '100vh' }}>
      <FancySkeletonGrid {...args} />
    </div>
  ),
  args: {
    themeType: 'primary',
    layer: 0,
    borderRadius: 'xs',
    gapColumn: 'sm',
    gapRow: 'sm',
    gridAreas: ['a a b b b b', 'a a c c c c', 'd d d d d d'],
    gridAreasBreakPoints: {
      sm: ['a a b b b d', 'a a c c c d', 'e e e e e e'],
      md: ['a a c c b b', 'a a c c b b', 'd d d d d d'],
      lg: ['a a b d d c', 'a a b d d c', 'e e e e e e'],
    },
    height: '100%',
    width: '100%',
  },
};
