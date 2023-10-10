import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyA from './FancyA';
import SVGChevronRight from '../../SVGIcons/SVGChevronRight';


const meta = {
  component: FancyA,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: This component shows a button with a label and an icon.   ',
      },
    },
  },
  argTypes: {
    wide: {
      description: 'This prop will make the as wide as the parent container',
      control: {
        type: 'boolean',
      },
    },
    align: {
      description: 'This prop will align the text and icon inside the button',
      control: {
        type: 'select',
      },
    },
    themeType: {
      description: 'This prop will change the color of the button',
      control: {
        type: 'select',
      },
    },
    textColor: {
      description: 'This prop will change the color of the text',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'This prop will change the layer of the button',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
    },
    outlined: {
      description: 'This prop will make the button outlined',
      control: {
        type: 'boolean',
      },
    },
    hoverColor: {
      description: 'This prop will change the color of the button when hovered',
      control: {
        type: 'select',
      },
    },
    disabled: {
      description: 'This prop will disable the button',
      control: {
        type: 'boolean',
      },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyA>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyA {...args} />,
  args: {
    label: 'Fancy A',
    icon: SVGChevronRight,
    align: 'right',
    wide: true,
    


  },
};
