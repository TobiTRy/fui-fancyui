import type { Meta, StoryObj } from '@storybook/react';

import FancyLine from './FancyLine';

const meta = {
  component: FancyLine,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: Only a Line thats sperate something from something else.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'accent',
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
      defaultValue: {
        summary: 0,
      },
    },
    direction: {
      description: 'The direction of the line',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'horizontal',
      },
    },
    thickness: {
      description: 'The thickness of the line',
      control: {
        type: 'text',
      },
    },
    margin: {
      description: 'The margin from the line to the edge',
      control: {
        type: 'text',
      },
    },
    length: {
      description: 'The length of the line',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '100%',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyLine {...args} />,
  args: {
    themeType: 'accent',
    layer: 0,
    direction: 'horizontal',
    thickness: '1px',
    margin: 'sm',
    length: '100%',
  },
};
