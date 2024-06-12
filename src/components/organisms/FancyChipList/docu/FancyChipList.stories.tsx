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
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
    },
    chips: {
      description: 'The Chips that should be displayed',
      control: {
        type: 'array',
      },
    },
    legend: {
      description: 'The Label of the ChipList',
      control: {
        type: 'text',
      },
    },
    systemInformation: {
      description: 'The SystemInformation that should be displayed',
      options: ['success', 'error', 'warning', 'info', undefined],
      control: {
        type: 'select',
      },
    },
    outlined: {
      description: 'If the ChipList should be outlined',
      control: {
        type: 'boolean',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 1),
    handler: {
      description: 'Callback function that handles the current state of chips',
      control: {
        type: 'function',
      },
    },
    editable: {
      description: 'If the ChipList should be editable',
      control: {
        type: 'boolean',
      },
    },
    inputPlaceholder: {
      description: 'The Placeholder of the ChipList',
      control: {
        type: 'text',
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
