import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import Modal from './Modal';
import { ModalStatus } from '../../Interface/ModalStatus';


const meta = {
  component: Modal,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: A Modal component to show a Dialog with a Backdrop',
      },
    },
  },
  argTypes: {
    id: {
      description: 'The id of the component',
      control: {
        type: 'text',
      },
    },
    status: {
      description: 'The status of the component',
      control: {
        type: 'select',
      },
    },
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
    },
    closeModal: {
      description: 'The closeModal of the component',
      control: {
        type: 'function',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    status: ModalStatus.Open,
    themeType: 'primary',
    layer: 0,
    id: 'Modal',
    closeModal: () => {console.log('closeModal')},
  },
};
