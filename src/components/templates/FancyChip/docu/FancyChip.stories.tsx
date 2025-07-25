import type { Meta, StoryObj } from '@storybook/react';

import FancyChip from '../FancyChip';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGFui } from '@/components/icons';

const meta = {
  component: FancyChip,
  title: 'components/templates/FancyChip',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyChip component is a customizable UI element that combines an image, icon, and label within a chip. It supports deletion functionality and various styling options including size, color, and external styles. The component is versatile, designed for displaying compact information blocks with optional interactive elements.',
      },
    },
  },
  argTypes: {
    image: {
      description: 'The image as El to be displayed.',
      control: {
        type: 'object' as const,
      },
    },
    label: {
      description: 'The label to be displayed.',
      control: {
        type: 'text' as const,
      },
    },
    icon: {
      description: 'The icon as El to be displayed.',
      control: {
        type: 'object' as const,
      },
    },
    textColor: {
      description: 'The text color of the button.',
      control: {
        type: 'select' as const,
      },
    },
    ...templateThemeType('notTransparent', 'primary', 0),
    sizeC: {
      description: 'The sizeC of the button.',
      control: {
        type: 'select' as const,
      },
    },
    isActive: {
      description: 'The active state of the button.',
      control: {
        type: 'boolean' as const,
      },
    },
    outlined: {
      description: 'The outlined state of the button.',
      control: {
        type: 'boolean' as const,
      },
    },
    onClick: {
      description: 'The onClick event of the button.',
      control: {
        type: 'object' as const,
      },
    },
    externalStyle: {
      description: 'The externalStyle of the button.',
      control: {
        type: 'object' as const,
      },
    },
    isHoverable: {
      description: 'The hoverable state of the button.',
      control: {
        type: 'boolean' as const,
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the outlined button.',
      control: {
        min: 0,
        max: 1,
        type: 'range' as const,
      },
      tabel: {
        summary: {
          defaultValue: 0.5,
        },
      },
    },
  },
} satisfies Meta<typeof FancyChip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    layer: 2,
    onDelete: () => console.log('delete'),
    label: 'Chip Label',
    sizeC: 'md',
    outlined: false,
    themeType: 'primary',
    isActive: false,
  },
};

export const WithImage: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    layer: 2,
    image: <img src="https://via.placeholder.com/150" alt="placeholder" />,
    onDelete: () => console.log('delete'),
    label: 'Chip Label',
    sizeC: 'md',
    outlined: false,
    themeType: 'primary',
    isActive: false,
  },
};

export const WithIcon: Story = {
  render: (args) => <FancyChip {...args} />,
  args: {
    layer: 2,
    icon: <SVGFui />,
    onDelete: () => console.log('delete'),
    label: 'Chip Label',
    sizeC: 'md',
    outlined: false,
    themeType: 'primary',
    isActive: false,
  },
};
