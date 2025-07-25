import type { Meta, StoryObj } from '@storybook/react';

import SideBar from '../SideBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SideBarItem } from '@/components/molecules/SideBarItem';
import { SVGCheckMark } from '@/components/icons';

const meta = {
  component: SideBar,
  title: 'components/molecules/SideBar',
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
} satisfies Meta<typeof SideBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <div style={{ height: '400px' }}>
      <SideBar {...args}>
        <SideBarItem sizeC="sm" direction="left" justify="left" wide={false} noMargin={false}>
          <SideBarItem.Icon sizeC={'sm'}>
            <SVGCheckMark />
          </SideBarItem.Icon>
          <SideBarItem.Label sizeC={'sm'}>Home</SideBarItem.Label>
        </SideBarItem>
        <SideBarItem sizeC="sm" direction="left" justify="left" wide={false} noMargin={false}>
          <SideBarItem.Icon sizeC={'sm'}>
            <SVGCheckMark />
          </SideBarItem.Icon>
          <SideBarItem.Label sizeC={'sm'}>Home</SideBarItem.Label>
        </SideBarItem>
      </SideBar>
    </div>
  ),
  args: {
    themeType: 'primary',
    sizeC: 'sm',
    isOpen: false,
    openWidth: '40%',
    gapBetweenItems: 'sm',
  },
};
