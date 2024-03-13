import type { Meta, StoryObj } from '@storybook/react';

import { FancyVirtualScroll } from '@/components/shared/FancyVirtualScroll';

const meta = {
  component: FancyVirtualScroll,
  title: 'components/shared/FancyVirtualScroll',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyVirtualScroll` component is a highly customizable and performant virtual scrolling list for React applications. It allows for the rendering of only a subset of a large list of items, improving the performance of your application by reducing the number of DOM elements rendered and managed at any given time.',
      },
    },
  },
  argTypes: {
    preRenderCount: {
      description: 'The number of items to render outside the visible area, above and below. Defaults to `1`',
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
      description: 'Controls the scroll snapping behavior. Defaults to `none`.',
      type: { name: 'string', required: false },
      control: {
        type: 'select',
        options: ['mandatory', 'proximity', 'none', undefined],
      },
      defaultValue: { summary: 'none' },
    },
    onScrollingStateChange: {
      type: { name: 'function', required: false },
      description: 'A callback function that is called when the scrolling state changes.',
    },
    currentFirstItemsInViewHandler: {
      type: { name: 'function', required: false },
      description: 'The handler to give back the index of the first item in view.',
    },
    attributesContainer: {
      description: 'The attributes for the container the HTML NativeProps its has too a $externalStyle .',
    },
    attributesItems: {
      description: 'Additional attributes to be passed to each item`s',
    },
  },
} satisfies Meta<typeof FancyVirtualScroll>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyVirtualScroll {...args} />,
  args: {
    children: Array.from({ length: 20 }, (_, i) => <div key={i}>{i}</div>),
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
