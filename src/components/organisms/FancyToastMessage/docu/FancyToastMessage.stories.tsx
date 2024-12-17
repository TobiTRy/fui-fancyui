// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyToastMessage from '../FancyToastMessage';
import { createFancyToastMessageStore } from '../createFancyToastMessageStore.state';
import { FancyButton } from '../../FancyButton';
import { TFancyToastMessage } from '@/components/organisms/FancyToastMessage';
import { TFancyToastMessages } from '@/components/organisms/FancyToastMessage/TFancyToastMessage.model';

// Define metadata for the story
const meta = {
  component: FancyToastMessage,
  title: 'components/organisms/FancyToastMessage',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyToastMessage` component is a sophisticated toast notification system. It provides an overlay for displaying multiple toast messages with animations. This component uses a queue to manage toast messages, allowing for the addition and automatic removal of toasts based on user interaction or time expiration.',
      },
      story: {
        height: '300px',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    toastMessages: {
      description: 'Queue of toast messages to be displayed',
      control: { type: 'object' },
      table: {
        type: { summary: 'TFancyToastMessage[]' },
        defaultValue: { summary: '[]' },
      },
    },
    closeToast: {
      description: 'Function to close a specific toast message',
      control: { type: 'function' },
      table: {
        type: { summary: '(id: string) => void' },
        defaultValue: { summary: 'undefined' },
      },
    },
  },
} satisfies Meta<TFancyToastMessages>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

const useFancyToastMessageStore = createFancyToastMessageStore();

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const HelperComponent = (props: any) => {
  const addToast = useFancyToastMessageStore((state) => state.addToast);
  const toastMessages = useFancyToastMessageStore((state) => state.toastQueue);
  const { title, message, time, themeType } = props as TFancyToastMessage;

  const hanldeAddToast = () => {
    addToast({
      title: title ?? 'My Title of the titel ',
      message: message ?? 'This is my toast message hjsadhjgdshjag.',
      time: time ?? 50500,
      themeType: themeType ?? 'error',
    });
  };

  return (
    <>
      <FancyToastMessage toastMessages={toastMessages} {...props} />
      <FancyButton label="Open" onClick={hanldeAddToast} />
    </>
  );
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    closeToast: (id) => useFancyToastMessageStore.getState().removeToast(id),
    toastMessages: useFancyToastMessageStore.getState().toastQueue,
  },
};
