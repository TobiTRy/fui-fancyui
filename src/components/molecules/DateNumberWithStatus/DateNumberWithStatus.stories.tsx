import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DateNumberWithStatus from './DateNumberWithStatus';

const meta = {
  component: DateNumberWithStatus,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: The DateNumberWithStatus is a component that is a mix of DateNumberAtom and AvailableDot. <br> It is used in the calendar. (FancyDatepicker)',
      },
    },
  },
  argTypes: {
    dateNumber: {
      description: 'The number of the day.',
      control: {
        type: 'number',
      },
    },
    isAvailable: {
      description: 'The availability of the day.',
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'The disabled state of the day.',
      control: {
        type: 'boolean',
      },
    },
    isSelected: {
      description: 'The selected state of the day.',
      control: {
        type: 'boolean',
      },
    },
    isCurrentDay: {
      description: 'The current day state of the day.',
      control: {
        type: 'boolean',
      },
    },
    range: {
      description: 'The range state of the day.',
      control: {
        type: 'object',
      },
    },
    onClick: {
      description: 'The onClick function of the day.',
      control: {
        type: 'function',
      },
    },
    themeType: {
      description: 'The theme type of the day.',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the day.',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DateNumberWithStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateNumberWithStatus {...args} />,
  args: {
    isAvailable: 'completly',
    disabled: false,
    dateNumber: 1,
    isSelected: false,
    isCurrentDay: false,
    range: { start: true, inRange: false, end: false },
    onClick: () => console.log('click'),
    themeType: 'primary',
    layer: 1,
  },
};
