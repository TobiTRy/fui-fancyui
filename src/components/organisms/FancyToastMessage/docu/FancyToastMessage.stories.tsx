// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyToastMessage from '../FancyToastMessage';
import { useFancyToastMessageStore } from '../FancyToastMessage.state';
import { FancyButton } from '../../FancyButton';
import { TFancyToastMessage } from '@/components/organisms/FancyToastMessage';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

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
    ...templateThemeType('systemMessage', 'success', 0),
    title: {
      description: 'The title of the toast.',
      control: { type: 'text' },
    },
    message: {
      description: 'The message to be displayed in the toast.',
      control: { type: 'text' },
    },
    time: {
      description: 'The time in milliseconds the toast will be displayed.',
      control: { type: 'number' },
      table: {
        defaultValue: { summary: '5000' },
      },
    },
  },
} satisfies Meta<TFancyToastMessage>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

const HelperComponent = (props: any) => {
  const addToast = useFancyToastMessageStore((state) => state.addToast);
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
      <FancyToastMessage {...props} />
      <FancyButton label="Open" onClick={hanldeAddToast} />
    </>
  );
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    title: 'My Title of the titel ',
    message: 'This is my toast message hjsadhjgdshjag.',
    time: 50500,
    themeType: 'error',
  },
};
