import type { Meta, StoryObj } from '@storybook/react';

import SystemMessageBox from '../SystemMessageBox';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: SystemMessageBox,
  title: 'components/atoms/SystemMessageBox',
  parameters: {
    docs: {
      description: {
        component:
          'The SystemMessageBox component is designed to display alerts or informational messages within an application. It supports various styling options based on themes, sizes, and layers to cater to different UI requirements.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'error', 0),
    externalStyle: {
      description:
        'The style of the card can porvieed with the styled-component css and react style={{width: "100px"}}',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the component.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    borderRadius: {
      description: 'The border radius of the component.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
    padding: {
      description: 'The padding of the component.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
    margin: {
      description: 'The margin of the component.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: undefined },
      },
    },
  },
} satisfies Meta<typeof SystemMessageBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SystemMessageBox {...args}>Moooiin</SystemMessageBox>,
  args: {
    themeType: 'error',
    sizeC: 'sm',
  },
};
