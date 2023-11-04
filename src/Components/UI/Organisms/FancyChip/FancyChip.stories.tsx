import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import FancyChip from './FancyChip';
import SVGChevronLeft from '../../SVGIcons/SVGChevronLeft';

const meta = {
  component: FancyChip,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent:  A chip is a component that displays a label and optionally an icon / image and delete button. ',    
      },
    },
  },
  argTypes: {
    size: {
      description: 'The size of the button.',
      control: {
        type: 'select',
      },
    }, 
    themeType: {
      description: 'The theme type of the button.',
      control: {
        type: 'select',
      },
    },
    isActive: {
      description: 'The active state of the button.',
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      description: 'The outlined state of the button.',
      control: {
        type: 'boolean',
      },
    },
    onDelete: {
      description: 'The onDelete event of the button.',
      control: {
        type: 'function',
      },
    },
    onClick: {
      description: 'The onClick event of the button.',
      control: {
        type: 'function',
      },
    },
    textColor: {
      description: 'The text color of the button.',
      control: {
        type: 'select',
      },
    },
    textLayer: {
      description: 'The text layer of the button.',
      control: {
        type: 'range', min: 1, max: 10, step: 1,
      },
    },
    layer: {
      description: 'The layer of the button.',
      control: {
        type: 'range', min: 1, max: 10, step: 1,
      },
    },
    image: {
      description: 'The image of the button.',
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    label: 'Chip',
    layer: 3,
    icon: false,
    size: 'sm',
    outlined: false,
    onDelete: undefined,
    themeType: 'primary',
    isActive: false,
  },
};

export const WithDelete: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    label: 'Chip',
    layer: 3,
    icon: false,
    size: 'sm',
    outlined: false,
    onDelete: undefined,
    themeType: 'primary',
    isActive: false,
  },
};


export const WithImage: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    label: 'Chip',
    layer: 3,
    icon: false,
    size: 'sm',
    outlined: false,
    themeType: 'primary',
    isActive: false,
    image: "https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg",
    onDelete: () =>{console.log('DELETE')},
  },
};

export const WithIcon: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    label: 'Chip',
    layer: 3,
    size: 'sm',
    outlined: false,
    themeType: 'primary',
    isActive: false,
    icon: SVGChevronLeft,
    onDelete: () =>{console.log('DELETE')},
  },
};