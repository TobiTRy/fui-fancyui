import type { Meta, StoryObj } from '@storybook/react';

import Paginator from '../Paginator';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: Paginator,
  title: 'components/molecules/Paginator',
  parameters: {
    docs: {
      description: {
        component:
          'The Paginator is a React component designed to facilitate navigation between pages within a list or collection. It utilizes a `FancyButton` organism for next and previous page controls, and a custom `PageNumberList` atom for displaying a range of page numbers. This component is highly customizable, allowing for various styling and functional configurations through props.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'accent', 0),
    currentPage: {
      description: ' Specifies the current active page. Defaults to 1 if not provided.',
      type: { name: 'number' },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    showPages: {
      description: 'Determines the number of page numbers to display.',
      type: { name: 'number' },
      table: {
        defaultValue: { summary: 3 },
      },
    },
    onPageChange: {
      description: 'Callback function to handle page changes.',
      type: { name: 'function' },
    },
    outlinedButton: {
      description: 'If true, the buttons will be outlined.',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    numberButtonStyle: {
      description: 'The style of the number buttons.',
      type: { name: 'string' },
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    pageLimits: {
      description: 'The limit of the pages Numbers.',
      type: { name: 'number' },
      table: {
        defaultValue: { summary: 3 },
      },
    },
  },
} satisfies Meta<typeof Paginator>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Paginator {...args} />,
  args: {
    showPages: 3,
    currentPage: 1,
    outlinedButton: false,
    pageLimits: 3,
  },
};
