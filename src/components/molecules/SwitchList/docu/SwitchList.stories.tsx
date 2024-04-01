import type { Meta, StoryObj } from '@storybook/react';

import SwitchList from '../SwitchList';
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import { FancyBottomBarIcon } from '../../../templates/FancyBottomBarIcon';

const meta = {
  component: SwitchList,
  title: 'components/molecules/SwitchList',
  parameters: {
    docs: {
      description: {
        component:
          'The `SwitchList` component is designed to render a list of items, with functionality to indicate which item is currently active. This component is highly customizable, allowing for different styles and behaviors to be applied to the active and hover states of the list items. It leverages the `FancyFlexBox` component for layout and `SwitchActiveIndicator` for displaying the active item indicator. The component also supports external styling and custom gap sizes between items, making it versatile for various UI needs.',
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
      control: { type: 'object' },
    },
    switchIndicator: {
      description: 'The switch indicator of the SwitchList. The Props of the SwitchActiveIndicator.',
      control: { type: 'object' },
    },
    flexBoxProps: {
      description: 'The flex box props of the SwitchList. The Props of the FancyFlexBox.',
      control: { type: 'object' },
    },
    gap: {
      description: 'The gap of the SwitchList.',
      control: { type: 'select' },
    },
  },
} satisfies Meta<typeof SwitchList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <SwitchList {...args}>
      <FancyBottomBarIcon externalStyle={{ zIndex: 1 }} label="Test" icon={<SVGCheckMark />} />
      <FancyBottomBarIcon externalStyle={{ zIndex: 1 }} label="Test" icon={<SVGCheckMark />} />
      <FancyBottomBarIcon externalStyle={{ zIndex: 1 }} label="Test" icon={<SVGCheckMark />} />
    </SwitchList>
  ),
  args: {
    flexBoxProps: {
      justify: 'space-between',
      align: 'center',
    },
    switchIndicator: {
      type: 'bolb',
      direction: 'horizontal',
      indicatorWidth: '100%',
      borderRadius: 'sm',
      outlined: true,
      externalStyle: {},
      layer: 0,
      tabSpacing: 'sm',
      themeType: 'accent',
    },
    activeItemHandler: (index: number) => {
      console.log('Active Item: ', index);
    },
    gap: 'sm',
    externalStyle: {},
    whichIndexIsSelected: 1,
  },
};
