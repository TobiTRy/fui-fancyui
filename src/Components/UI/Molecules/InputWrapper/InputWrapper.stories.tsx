import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import InputWrapper from './InputWrapper';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

const meta = {
  component: InputWrapper,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The InputWrapper component that can be used to wrap a input component via the InputElement. <br> ',
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
    disabled: {
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
    errorMessage: {
      description: 'The errorMessage of the component',
      control: {
        type: 'text',
      },
    },
    value: {
      description: 'The value of the component',
      control: {
        type: 'text',
      },
    },
    autoWidth: {
      description: 'The autoWidth of the component',
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
} satisfies Meta<typeof InputWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <InputWrapper {...args} />,
  args: {
    id: 'id',
    label: 'Label',
    align: 'left',
    icon: <SVGCheckMark />,
  },
};
