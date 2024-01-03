import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SwitchList from './SwitchList';
import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';
import { FancyBottomBarIcon } from '../../templates/FancyBottomBarIcon';

const meta = {
  component: SwitchList,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A SwitchList that used to indicate which item is active',
      },
    },
  },

  argTypes: {
    children: {
      description: 'The children of the SwitchList.',
    },
    whichIndexIsSelected: {
      description: 'The index of the selected item.',
      type: { name: 'number' },
    },
    activeItemHandler: {
      description: 'A function that is called when the active item is changed.',
      type: { name: 'function' },
    },
    externalStyle: {
      description: 'The external style of the SwitchList.',
      type: { name: 'string' },
    },
    switchIndicator: {
      description: 'The switch indicator of the SwitchList. The Props of the SwitchActiveIndicator.',
    },
    flexBoxProps: {
      description: 'The flex box props of the SwitchList. The Props of the FancyFlexBox.',
    },
  },

  tags: ['autodocs'],
} satisfies Meta<typeof SwitchList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <SwitchList {...args}>
      <FancyBottomBarIcon label="Test" icon={<SVGCheckMark />} />
      <FancyBottomBarIcon label="Test" icon={<SVGCheckMark />} />
      <FancyBottomBarIcon label="Test" icon={<SVGCheckMark />} />
    </SwitchList>
  ),
  args: {
    flexBoxProps: {
      justify: 'space-between',
      align: 'center',
    },
    switchIndicator: {
      direction: 'horizontal',
    },

    children: <></>,
  },
};
