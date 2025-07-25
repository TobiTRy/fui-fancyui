import type { Meta, StoryObj } from '@storybook/react';

import { LabeledInput } from '@/components/molecules/LabeledInput';
import { TextInput } from '@/components/atoms/TextInput';
import React from 'react';

const meta = {
  component: LabeledInput,
  title: 'components/molecules/LabeledInput',
  parameters: {
    docs: {
      description: {
        component:
          'The `LabeledInput` component is a customizable input field designed for React applications. It wraps an input element with additional styling and functionality, including a label, placeholder behaviors, and an optional underline feature. The component is highly configurable, supporting various themes, alignment options, and input states to fit different UI designs.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    isActive: {
      description: 'The state of the component',
      control: {
        type: 'boolean',
      },
    },
    align: {
      description: 'The align of the component',
      control: {
        type: 'select',
      },
    },
    label: {
      description: 'The label of the component',
      control: {
        type: 'text',
      },
    },
    systemMessageType: {
      description: 'The systemMessage of the component',
      control: {
        type: 'object',
      },
    },
    hasValue: {
      description: 'The hasValue of the component',
      control: {
        type: 'boolean',
      },
    },
    underline: {
      description: 'The underline of the component',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof LabeledInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const LabledInputWithState = (props: Story['args']) => {
  const [value, setValue] = React.useState('');

  return (
    <LabeledInput
      {...props}
      hasValue={!!value}
      inputElement={<TextInput value={value} onChange={(e) => setValue(e.target.value)} />}
    />
  );
};

export const Primary: Story = {
  render: (args) => <LabledInputWithState {...args} />,
  args: {
    id: 'id',
    label: 'Label',
    align: 'left',
    themeType: 'primary',
    layer: 2,
    inputElement: <TextInput />,
  },
};
