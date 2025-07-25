import type { Meta, StoryObj } from '@storybook/react';

import DynamicBottomScrollBar from '../DynamicScrollBar';
import { SVGCheckMark } from '@/components/icons';
import { FancyBottomBarIcon } from '@/components/templates/FancyBottomBarIcon';

const meta = {
  title: 'components/molecules/DynamicScrollBar',
  component: DynamicBottomScrollBar,
  parameters: {
    docs: {
      description: {
        component:
          'The `DynamicScrollBar` component is designed to dynamically enable or disable a custom scrollbar based on specific props. It wraps its children within the `ScrollableBar` component if scrolling is enabled and the activation condition for the scrollbar is met. This component is particularly useful for creating flexible UI layouts where the overflow of content needs to be managed conditionally, providing a cleaner user experience especially in web applications where varying amounts of content need to be displayed.',
      },
    },
  },
  argTypes: {
    scrollable: {
      description: 'If true, the bar will be scrollable.',
      control: {
        type: 'boolean',
      },
    },
    activateScrollbar: {
      description: 'If true, the scrollbar will be activated.',
      control: {
        type: 'boolean',
      },
    },
    children: {
      description: 'The children of the DynamicBottomScrollBar.',
    },
  },
} satisfies Meta<typeof DynamicBottomScrollBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DynamicBottomScrollBar {...args} />,
  args: {
    scrollable: true,
    activateScrollbar: true,
    children: (
      <>
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
        <FancyBottomBarIcon icon={<SVGCheckMark />} label="Hiii" />
      </>
    ),
  },
};
