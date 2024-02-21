import type { Meta, StoryObj } from '@storybook/react';

import { FancyVirtualScroll } from '@/components/shared/FancyVirtualScroll';

const meta = {
  component: FancyVirtualScroll,
  parameters: {
    docs: {
      description: {
        component: 'The FancyVirtualScroll is a component to render a list of items with a virtual scroll.',
      },
    },
  },
  argTypes: {
    preRenderCount: {
      description: 'The amount of items to pre render.',
      type: { name: 'number', required: false },
      control: {
        type: 'number',
      },
      defaultValue: { summary: 1 },
    },
    containerHeight: {
      description: 'The height of the container.',
      type: { name: 'string', required: false },
      control: {
        type: 'text',
      },
      defaultValue: { summary: '300px' },
    },
    itemHeight: {
      description: 'The height of each item.',
      type: { name: 'number', required: false },
      control: {
        type: 'number',
      },
      defaultValue: { summary: 300 },
    },
    itemGap: {
      description: 'The gap between each item. It only adds spacte to the bottom of the item.',
      type: { name: 'number', required: false },
      control: {
        type: 'number',
      },
      defaultValue: { summary: 0 },
    },
    firstItemIndexInView: {
      description: 'The index of the first item to render.',
      type: { name: 'number', required: false },
      control: {
        type: 'number',
      },
      defaultValue: { summary: 0 },
    },
    scrollSnap: {
      description: 'The scroll snap type.',
      type: { name: 'string', required: false },
      control: {
        type: 'select',
        options: ['mandatory', 'proximity', 'none', undefined],
      },
      defaultValue: { summary: 'none' },
    },
    onScrollingStateChange: {
      type: { name: 'function', required: false },
      description: 'The handler to give back the scrolling state.',
    },
    currentFirstItemsInViewHandler: {
      type: { name: 'function', required: false },
      description: 'The handler to give back the index of the first item in view.',
    },
    attributesContainer: {
      description: 'The attributes for the container the HTML NativeProps its has too a $externalStyle .',
    },
    attributesItems: {
      description: 'The attributes for the items.',
    },
  },
} satisfies Meta<typeof FancyVirtualScroll>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyVirtualScroll {...args} />,
  args: {
    children: Array.from({ length: 1000 }, (_, i) => <div key={i}>{i}</div>),
    scrollSnap: 'mandatory',
    itemGap: 0,
    preRenderCount: 10,
    containerHeight: '300px',
    itemHeight: 300,
    firstItemIndexInView: 0,
    currentFirstItemsInViewHandler: (index) => console.log(index),
    onScrollingStateChange: (isScrolling) => console.log(isScrolling),
    attributesContainer: { $externalStyle: {} },
    attributesItems: { $externalStyle: {} },
  },
};
