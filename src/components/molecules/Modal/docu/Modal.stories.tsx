import type { Meta, StoryObj } from '@storybook/react';

import Modal from '../Modal';

const meta = {
  component: Modal,
  title: 'components/molecules/Modal',
  parameters: {
    docs: {
      description: {
        component:
          'The `Modal` component serves as a customizable container for modal dialogues in React applications, leveraging the fundamental `SimpleDialog` and `BackDrop` atoms. It´s designed to provide developers with a flexible way to display content in a modal window, with options for customizing the appearance, behavior, and structure of the modal. The component allows for controlled visibility, an optional backdrop for dismissing the modal, and customizable themes and layers.',
      },
    },
  },
  argTypes: {
    id: {
      description:
        ' A unique identifier for the modal, useful for handling closures or any specific identification needs.',
      control: {
        type: 'text',
      },
    },
    isOpen: {
      description: 'ontrols the visibility of the modal. `true` to show the modal, `false` to hide it.',
      control: {
        type: 'select',
      },
    },
    onClose: {
      description:
        'A callback function that gets called when the modal is requested to be closed. Receives the `id` of the modal as an argument if provided.',
      control: {
        type: 'function',
      },
    },
    backDrop: {
      description:
        ' Whether to show a backdrop behind the modal. Clicking on the backdrop will close the modal if `isCloseable` is `true`. Defaults to `true`',
      control: {
        type: 'boolean',
      },
    },
    isCloseable: {
      description:
        'Determines whether the modal can be closed by the user (e.g., clicking the backdrop). Defaults to `true` if not specified.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
  },
} satisfies Meta<typeof Modal>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Modal {...args} />,
  args: {
    isOpen: true,
    themeType: 'primary',
    layer: 1,
    id: 'Modal',
    onClose: (id) => {
      console.log('closeModal', id);
    },
  },
};
