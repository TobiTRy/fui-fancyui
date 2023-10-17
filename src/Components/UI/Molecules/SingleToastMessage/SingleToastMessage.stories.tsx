import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import SingleToastMessage from './SingleToastMessage';

const HelperComponent = (props: React.ComponentProps<typeof SingleToastMessage>) => <SingleToastMessage {...props} />;
HelperComponent.displayName = 'SingleToastMessage';

const meta = {
  component: HelperComponent,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: A toast message to display a message to the user',
      },
    },
  },

  argTypes: {
    remove: {
      description: 'A function that is called from the toast when the it should be removed.',
      type: { name: 'function' },
    },
    toast: {
      description: 'The toast message to display.',
    },
  },

} satisfies Meta<typeof HelperComponent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Success: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    toast: {
      id: 1,
      title: 'Success',
      message: 'This is a success message',
      time: 5000,
      themeType: 'success',
    },
  },
};
export const Error: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    toast: {
      id: 2,
      title: 'warning',
      message: 'this is a warning message',
      time: 5000,
      themeType: 'warning',
    },
  },
};
export const Warning: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    toast: {
      id: 3,
      title: 'error',
      message: 'this is an error message',
      time: 5000,
      themeType: 'error',
    },
  },
};
