import type { Meta, StoryObj } from '@storybook/react';

import ScalingSection from './ScalingSection';

const meta = {
  component: ScalingSection,
  title: 'components/atoms/ScalingSection',
  parameters: {
    docs: {
      description: {
        component: 'This is the top of a swipeupmodal that is used to control the swipe up modal.',
      },
    },
  },
  argTypes: {
    handleScaling: {
      description: 'This is the function that is used to control the scaling of the modal.',
    },
    onClick: {
      description: 'This is the function that is used to control the click event of the modal.',
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ScalingSection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <ScalingSection {...args} />,
  args: {
    handleScaling(state: 'move' | 'end', currentPos: number) {
      console.log(state, currentPos);
    },
    onClick() {
      console.log('click');
    },
  },
};
