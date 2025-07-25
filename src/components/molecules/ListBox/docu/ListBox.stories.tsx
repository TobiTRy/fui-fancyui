import type { Meta, StoryObj } from '@storybook/react';

import ListBox from '../ListBox';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: ListBox,
  title: 'components/molecules/ListBox',
  parameters: {
    docs: {
      description: {
        component:
          '`ListBox` is a simple, styled list component designed to be used in React applications. It utilizes a `FancyBox` component to render a list (`ul`) and accepts `ListBoxItem` components as children.',
      },
    },
  },

  argTypes: {
    ...templateThemeType('allThemeTypes', 'primary', 1),
    sizeC: {
      description: 'The size of the component.',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    externalStyle: {
      description: 'The external style of the component.',
      control: {
        type: 'object',
      },
    },
    borderRadius: {
      description: 'The border radius of the component.',
      control: {
        type: 'object',
      },
    },
    boxShadow: {
      description: 'The box shadow of the component.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    outlined: {
      description: 'The outlined style of the component.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outlined component.',
      control: {
        type: 'number',
        min: 0,
        max: 1,
        step: 0.01,
      },
      table: {
        defaultValue: { summary: 0.5 },
      },
    },
  },
} satisfies Meta<typeof ListBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <ListBox {...args}>
      <ListBox.Item>Item 1</ListBox.Item>
      <ListBox.Item>Item 2</ListBox.Item>
      <ListBox.Item>Item 3</ListBox.Item>
    </ListBox>
  ),
  args: {
    themeType: 'primary',
    layer: 1,
    sizeC: 'md',
    externalStyle: {},
    boxShadow: false,
  },
};
