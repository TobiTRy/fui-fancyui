import type { Meta, StoryObj } from '@storybook/react';

import FancySideBar from '../FancySideBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGCheckMark } from '@/components/icons';
import { FancySideBarItem } from '@/components/templates/FancySideBarItem';

const meta = {
  component: FancySideBar,
  title: 'components/organisms/FancySideBar',
  parameters: {
    docs: {
      description: {
        component:
          'The SideBar component provides a versatile side navigation panel that can be opened or closed. It is designed to be highly customizable in terms of size, appearance, and content.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 2),
    sizeC: {
      description: 'The size of the search bar.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    isOpen: {
      description: 'The state of the sidebar.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    openWidth: {
      description: 'The width of the sidebar when it is open.',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '400px' },
      },
    },
    gapBetweenItems: {
      description: 'The gap between items in the sidebar.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
  },
} satisfies Meta<typeof FancySideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <FancySideBar {...args}></FancySideBar>
    </div>
  ),
  args: {
    themeType: 'primary',
    sizeC: 'sm',
    isOpen: false,
    openWidth: '40%',
    gapBetweenItems: 'sm',
    slotContent: [
      <FancySideBarItem sizeC="sm" noMargin icon={<SVGCheckMark />} label="Hello" />,
      <FancySideBarItem sizeC="sm" noMargin icon={<SVGCheckMark />} label="Hello" />,
      <FancySideBarItem sizeC="sm" noMargin icon={<SVGCheckMark />} label="Hello" />,
    ],
  },
};
