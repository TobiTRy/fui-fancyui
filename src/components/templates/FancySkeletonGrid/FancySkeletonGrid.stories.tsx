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
      defaultValue: {
        summary: 'primary',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: 1,
      },
    },
    borderRadius: {
      description: 'The border radius of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'xs',
      },
    },
    gapColumn: {
      description: 'The gap column of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'sm',
      },
    },
    gapRow: {
      description: 'The gap row of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'sm',
      },
    },
    gridAreas: {
      description: 'The grid areas of the component',
      control: {
        type: 'object',
      },
      defaultValue: {
        summary: [''],
      },
    },
    height: {
      description: 'The height of the component',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '100%',
      },
    },
    width: {
      description: 'The width of the component',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '100%',
      },
    },
    sizeH: {
      description: 'The height of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'fit',
      },
    },
    sizeW: {
      description: 'The width of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'fit',
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
    gridAreas: ['a a b b b b', 'a a c c c c', 'd d d d d d', 'e e e e e e', 'f f f f f f', 'g g g g g g'],
    height: '100%',
    width: '100%',
    sizeH: 'fit',
    sizeW: 'fit',
  },
};
