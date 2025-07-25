import type { Meta, StoryObj } from '@storybook/react';

import FancyPageList from '../FancyPageList';

const meta = {
  component: FancyPageList,
  title: 'components/molecules/FancyPageList',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyPageList component is designed to render a list of items along with pagination functionality. It integrates a Paginator component to navigate through pages of items. This component is highly configurable, allowing customization of the number of items per page, the spacing between items, and the design of pagination buttons. It is particularly useful for organizing large datasets into manageable chunks, enhancing the user experience by providing a streamlined way to browse through items.',
      },
    },
  },
  argTypes: {
    itemsPerPage: {
      type: { name: 'number', required: false },
      description: 'Specifies the number of items to display per page.',
    },
    elements: {
      description: 'An array of React nodes representing the items to be displayed.',
    },
    spacingBetweenItems: {
      type: { name: 'string', required: false },
      description: 'Specifies the spacing between individual items.',
    },
    showPages: {
      type: { name: 'number', required: false },
      description: 'Determines the number of page numbers to show in the paginator.',
    },
    buttonDesign: {
      control: {
        type: 'select',
      },
      description: 'Defines the design theme for pagination buttons.',
    },
    outlinedButton: {
      type: { name: 'boolean', required: false },
      description: 'Specifies whether the pagination buttons should be outlined.',
    },
  },
} satisfies Meta<typeof FancyPageList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyPageList {...args} />,
  args: {
    elements: [
      <p>Test</p>,
      <p>Test</p>,
      <p>Test</p>,
      <p>Test2</p>,
      <p>Test2</p>,
      <p>Test2</p>,
      <p>Test3</p>,
      <p>Test3</p>,
      <p>Test3</p>,
      <p>Test4</p>,
    ],
    itemsPerPage: 3,
  },
};
