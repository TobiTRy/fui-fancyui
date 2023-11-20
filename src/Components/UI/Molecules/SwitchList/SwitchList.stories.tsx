import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SwitchList from './SwitchList';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';
import { FancyBottomBarIcon } from '../../Templates/FancyBottomBarIcon';

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
    indicatorType: {
      description: 'The type of the active indicator.',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'underline',
      },
    },
    externalStyle: {
      description: 'The external style of the SwitchList.',
      type: { name: 'string' },
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
    children: <></>,
  },
};
