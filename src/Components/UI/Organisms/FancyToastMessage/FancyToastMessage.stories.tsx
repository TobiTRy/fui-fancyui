// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyToastMessage from './FancyToastMessage';
import { useFancyToastMessageStore } from './FancyToastMessage.state';
import { FancyButton } from '../../Molecules/FancyButton';

// Define metadata for the story
const meta = {
  component: FancyToastMessage,
  parameters: {
    docs: {
      description: {
        component: 'Smart-Comonent: The FancyToastMessage Component is a smart component to handle all toast messages in the application. It should be used as overlay in the application to make sure the toast messages are always displaey on top. To use this component in the application you have to add this component to the dom (Main Component) of the application. To add the toast messages you have to import the useToastMessageStore and addToast function  const addToast = useToastMessageStore((state) => state.addToast); addToast({ title: "My Title of the titel ", message: "This is my toast message hjsadhjgdshjag.", time: 50500, type: "error", });',
      },
    },
  },
  // Define arguments for the story
  argTypes: {},
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyToastMessage>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;



const clickHandler = () => {
  useFancyToastMessageStore.getState().addToast({
    title: 'My Title of the titel ',
    message: 'This is my toast message hjsadhjgdshjag.',
    time: 50500,
    type: 'error',
  });
}

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <>
      <FancyToastMessage {...args} />
      <FancyButton label='Open' onClick={clickHandler}/>
    </>
  ),
  args: {},
};
