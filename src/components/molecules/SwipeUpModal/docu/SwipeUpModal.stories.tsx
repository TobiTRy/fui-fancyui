import type { Meta, StoryObj } from '@storybook/react';

import SwipeUpModal from '../SwipeUpModal';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: SwipeUpModal,
  title: 'components/molecules/SwipeUpModal',
  parameters: {
    docs: {
      description: {
        component:
          'The SwipeUpModal component is a versatile and interactive modal molecule designed for React applications. It utilizes a combination of atoms and molecules such as Delay, SwipeUpContainer, BackDrop, and ScalingSection to provide a feature-rich modal experience. This modal supports functionalities like dynamic scaling, swipe to close, and customizable theming.',
      },
    },
  },

  argTypes: {
    isOpen: {
      description: 'Determines whether the modal is open or closed.',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: false },
      },
    },
    isCloseAble: {
      description: 'If `true`, allows the modal to be closed by user interaction.',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: true },
      },
    },
    isScalable: {
      description: 'Determines if the modal supports scaling (resizing) based on user interaction.',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: true },
      },
    },
    onClose: {
      description: 'A function that is called when the modal should be closed.',
      type: { name: 'function' },
    },
    ...templateThemeType('allThemeTypes', 'primary', 1),
    backdrop: {
      description: 'Callback function that is called when the modal is requested to be closed.',
      type: { name: 'boolean' },
      table: {
        defaultValue: { summary: true },
      },
    },
  },
} satisfies Meta<typeof SwipeUpModal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SwipeUpModal {...args} />,
  args: {
    isOpen: true,
    isCloseAble: true,
    isScalable: true,
    themeType: 'primary',
    layer: 1,
  },
};
