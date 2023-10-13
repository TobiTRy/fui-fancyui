// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyCodeVerificationInput from './FancyCodeVerificationInput';
import React, { useEffect } from 'react';

// Define metadata for the story
const meta = {
  component: FancyCodeVerificationInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    handler: {
      description: 'Callback function for the search value',
      control: {
        type: 'function',
      },
    },
    length: {
      description: 'The length of the input',
      control: {
        type: 'number',
      },
      defaultValue: {
        summary: '6',
      },
    },
    automaticCase: {
      description: 'If the input should be upper or lower case',
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
      description: 'If the input is success',
      control: {
        type: 'boolean',
      },
      defaultValue: {
        summary: false,
      },
    },
    errorMessage: {
      description: 'The error message',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancyCodeVerificationInput>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;



type PropsType = React.ComponentProps<typeof FancyCodeVerificationInput>;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
