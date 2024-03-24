import type { Meta, StoryObj } from '@storybook/react';

import NumberInput from '../NumberInput';

const meta = {
  component: NumberInput,
  title: 'components/atoms/NumberInput',
  parameters: {
    docs: {
      description: {
        component:
          'The PageNumberList component dynamically generates and displays a list of page numbers based on the total number of pages, the current page, and optional page limits. It is designed to provide a user-friendly pagination interface that can be easily integrated into projects requiring navigational support through multiple pages. This component utilizes the FancyButton component to render each page number as an interactive button. Additionally, it supports custom click behavior through a callback function.',
      },
    },
  },
  argTypes: {
    autoWidth: {
      description: 'If true, automatically adjusts the width of the input based on its value.',
      type: { name: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    align: {
      description: 'Aligns the text within the input.',
      type: { name: 'string' },
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'left',
      },
    },
    step: {
      description: 'The step size for the input´s value, used when incrementing or decrementing with arrow keys.',
      type: { name: 'number' },
      defaultValue: {
        summary: 1,
      },
    },
    value: {
      description: 'The current value of the input.',
      type: { name: 'number' },
    },
    decimalPlaces: {
      description: 'The maximum number of decimal places allowed in the input',
      type: { name: 'number' },
      defaultValue: {
        summary: 0,
      },
    },
    min: {
      description: 'The minimum value allowed in the input.',
      type: { name: 'number' },
    },
    max: {
      description: 'The maximum value allowed in the input.',
      type: { name: 'number' },
    },
    externalStyle: {
      description: 'An object containing additional styles to apply to the input.',
    },
  },
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <NumberInput {...args} />,
  args: {
    autoWidth: false,
    align: 'left',
    step: 1,
    value: 0,
    decimalPlaces: 2,
    min: 0,
    max: 100,
  },
};
