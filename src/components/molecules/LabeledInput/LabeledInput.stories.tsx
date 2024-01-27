import type { Meta, StoryObj } from '@storybook/react';

import { LabeledInput } from '@/components/molecules/LabeledInput';
import { TextInput } from '@/components/atoms/TextInput';

const meta = {
  component: LabeledInput,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The LabeledInput is a component that wraps an input with a label and an underline. ',
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
        max: 10,
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
    placeholder: {
      description: 'The placeholder of the component',
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof LabeledInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <LabeledInput {...args} />,
  args: {
    id: 'id',
    label: 'Label',
    align: 'left',
    themeType: 'primary',
    layer: 2,
    inputElement: <TextInput />,
  },
};
