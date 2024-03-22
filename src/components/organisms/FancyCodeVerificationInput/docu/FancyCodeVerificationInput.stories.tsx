// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyCodeVerificationInput from '../FancyCodeVerificationInput';
import React, { useEffect } from 'react';

// Define metadata for the story
const meta = {
  title: 'FancyCodeVerificationInput',
  component: FancyCodeVerificationInput,
  // Define arguments for the story
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyCodeVerificationInput` component is designed to handle user input for code verification purposes. It leverages a combination of React hooks and styled-components to manage input values, perform validation through an API call (handled externally), and display validation messages. The component allows for customization through props like input length, error messages, success state, automatic case conversion, and debounce time for the API call handler.',
      },
    },
  },

  argTypes: {
    handler: {
      description: 'Callback function for the search value',
      control: {
        type: 'function',
      },
    },
    length: {
      description: 'The expected length of the verification code.',
      control: {
        type: 'number',
      },
      defaultValue: {
        summary: '6',
      },
    },
    automaticCase: {
      description: 'If the input should automaticly inputed in upper or lower case',
      control: {
        type: 'radio',
        options: ['upper', 'lower', undefined],
      },
      defaultValue: {
        summary: undefined,
      },
    },
    debounceTime: {
      description: 'The debounce time for the handler',
      control: {
        type: 'number',
      },
      defaultValue: {
        summary: 700,
      },
    },
    isSuccess: {
      description: 'A flag indicating whether the code verification was successful.',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    errorMessage: {
      description: 'The message to display if the code verification fails.',
      control: {
        type: 'text',
      },
    },
  },
  // Add tags to the story
} satisfies Meta<typeof FancyCodeVerificationInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

type PropsType = React.ComponentProps<typeof FancyCodeVerificationInput>;

function HelperComponent(props: PropsType) {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isSuccess, setIsSuccess] = React.useState(false);

  useEffect(() => {
    setIsSuccess(Boolean(props.isSuccess));
    setErrorMessage(props.errorMessage || '');
  }, [props.isSuccess, props.errorMessage]);

  return (
    <FancyCodeVerificationInput
      {...props}
      isSuccess={isSuccess}
      errorMessage={errorMessage}
      handler={(value: string) => {
        console.log(value);
        if (value === '123456') {
          setIsSuccess(true);
          setErrorMessage('');
        } else {
          setIsSuccess(false);
        }
      }}
    />
  );
}

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    length: 6,
    isSuccess: false,
    errorMessage: '',
    automaticCase: undefined,
    debounceTime: 700,
  },
};
