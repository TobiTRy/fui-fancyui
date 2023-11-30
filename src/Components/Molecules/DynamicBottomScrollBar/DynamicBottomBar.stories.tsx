import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DynamicBottomScrollBar from './DynamicBottomScrollBar';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark/SVGCheckMark';
import { FancyBottomBarIcon } from '../../Templates/FancyBottomBarIcon';

const meta = {
  title: 'components/Molecules/DynamicBottomScrollBar',
  component: DynamicBottomScrollBar,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: This component renders only a wrapper that handles a scrollable bottom bar without style',
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
    children: {
      description: 'The children of the DynamicBottomScrollBar.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicBottomScrollBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DynamicBottomScrollBar {...args} />,
  args: {
    scrollable: true,
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
