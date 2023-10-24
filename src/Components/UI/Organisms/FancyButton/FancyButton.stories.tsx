import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyButton from './FancyButton';
import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';

const meta = {
  component: FancyButton,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent:  This component is a button with a lot of props to change the style.',
          
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'This prop will change the color of the bar',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'This prop will change the layer of the bar',
      control: {
        type: 'range', min: 0, max: 10, step: 1,
      },
    },
    outlined: {
      description: 'This prop will change the Nutton to outlined',
      control: {
        type: 'boolean',
      },
    },
    iconAlign: {
      description: 'This prop will align the icon inside the button to the left or right from the text',
      control: {
        type: 'radio',
      },
      defaultValue: {
        summary: 'left',
      }
    },
    borderRadius: {
      description: 'This prop will change the borderRadius of the button',
      control: {
        type: 'select',
      },
    },
    isLoading: {
      description: 'This prop will change the button to loading',
      control: {
        type: 'boolean',
      },
    },
    textColor: {
      description: 'This prop will change the color of the text',
      control: {
        type: 'select',
      },
    },
    hoverColor: {
      description: 'This prop will change the color of the hover',
      control: {
        type: 'select',
      },
    },
    wide: {
      description: 'This prop will change the width of the button',
      control: {
        type: 'boolean',
      },
    },

  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: SVGChevronLeft,
    themeType: 'accent',
    label: 'Button',
    size: 'md',
    align: 'center',
    layer: 0,
    outlined: false,
    borderRadius: 'md',
    isLoading: false,
    wide: false,
    iconSize: 'sm',
  },
};

export const Outlined: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: SVGChevronLeft,
    themeType: 'accent',
    label: 'Button',
    size: 'md',
    align: 'center',
    layer: 0,
    outlined: true,
    borderRadius: 'md',
    isLoading: false,
    wide: false,
    iconSize: 'sm',
  },
};

export const onetoone: Story = {
  render: (args) => <FancyButton {...args} />,
  args: {
    icon: SVGChevronLeft,
    themeType: 'accent',
    size: 'md',
    align: 'center',
    layer: 0,
    outlined: true,
    borderRadius: 'md',
    isLoading: false,
    wide: false,
    iconSize: 'sm',
  },
};