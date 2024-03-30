import type { Meta, StoryObj } from '@storybook/react';

import FancyNavBar from '../FancyNavBar';

const meta = {
  component: FancyNavBar,
  title: 'components/molecules/FancyNavBar',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyNavBar component is a flexible navigation bar built on top of the RawNav atomic component, designed to be used across various parts of a React application. This component accepts children, which means any React component or HTML element can be nested inside it, providing a straightforward way to create a navigational structure that fits the needs of different UIs. Additionally, it inherits HTML attributes, offering further customization and accessibility options.',
      },
    },
  },
  argTypes: {
    externalStyle: {
      description: 'The external style of the component',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancyNavBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyNavBar {...args} />,
  args: {},
};
