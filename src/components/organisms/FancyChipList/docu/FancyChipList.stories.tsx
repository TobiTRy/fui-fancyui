import type { Meta, StoryObj } from '@storybook/react';

import FancyChipList from '../FancyChipList';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyChipList,
  title: 'components/organisms/FancyChipList',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyChipList component is designed for managing a dynamic list of chips (small interactive elements). It allows users to add, edit, and delete chips, which can be useful for tags, categories, contacts, or other lists. The component also supports customizable themes, sizes, and other settings.',
      },
    },
  },
  argTypes: {
    sizeC: {
      description: 'Size of the ChipList/Chips',
      control: {
        type: 'select' as const,
        options: ['sm', 'md', 'lg'],
      },
    },
    chips: {
      description: 'The Chips that should be displayed',
      control: {
        type: 'object' as const,
      },
    },
    legend: {
      description: 'The Label of the ChipList',
      control: {
        type: 'text' as const,
      },
    },
    systemInformation: {
      description: 'The SystemInformation that should be displayed',
      options: ['success', 'error', 'warning', 'info', undefined],
      control: {
        type: 'select' as const,
      },
    },
    outlined: {
      description: 'If the ChipList should be outlined',
      control: {
        type: 'boolean' as const,
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 1),
    onChange: {
      description: 'Callback function that handles the current state of chips',
      control: {
        type: 'object' as const,
      },
    },
    editable: {
      description: 'If the ChipList should be editable',
      control: {
        type: 'boolean' as const,
      },
    },
    inputPlaceholder: {
      description: 'The Placeholder of the ChipList',
      control: {
        type: 'text' as const,
      },
    },
    disabled: {
      description: 'If the ChipList should be disabled an read only',
      control: {
        type: 'boolean' as const,
      },
    },
  },
} satisfies Meta<typeof FancyChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyChipList {...args} />,
  args: {
    chips: [
      { id: '1', label: 'Chip 1' },
      { id: '2', label: 'Chip 2' },
    ],
    sizeC: 'md',
    legend: 'ChipList',
    themeType: 'primary',
    layer: 1,
    outlined: false,
    editable: true,
    inputPlaceholder: 'Add a chip',
  },
};

export const WithoutChips: Story = {
  render: (args) => <FancyChipList {...args} />,
  args: {
    chips: [],
    sizeC: 'md',
    legend: 'ChipList',
    themeType: 'primary',
    layer: 1,
    outlined: false,
    editable: true,
    inputPlaceholder: 'Add a chip',
  },
};
