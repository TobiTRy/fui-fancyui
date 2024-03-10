import type { Meta, StoryObj } from '@storybook/react';

import { FancyChip } from '@/components/templates/FancyChip';
import ChipList from '../ChipList';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: ChipList,
  title: 'components/molecules/ChipList',
  parameters: {
    docs: {
      description: {
        component:
          'The ChipList component is designed to display a collection of chips, such as tags, categories, or filters, in a flexible and stylized list. It acts as a wrapper that leverages the DynamicElementWrapper to pass down HTML attributes dynamically to the chip list. The component supports theming, sizing, and other visual customizations to fit the needs of various UI designs.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 2),
    sizeC: {
      description: 'Size of the chip list, with `md` as the default size.',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      defaultValue: {
        summary: 'md',
      },
    },
    outlined: {
      description: 'If the ChipList should be outlined',
      control: {
        type: 'boolean',
      },
    },
    systemMessage: {
      description: 'The SystemMessage of the ChipList',
      control: {
        type: 'select',
      },
    },
    borderRadius: {
      description: 'The border radius of the ChipList',
      control: {
        type: 'array',
      },
    },
  },
} satisfies Meta<typeof ChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <ChipList {...args}>
      <FancyChip label="Test" />
      <FancyChip label="Test" />
      <FancyChip label="Test" />
      <FancyChip label="Test" />
      <FancyChip label="Test" />
    </ChipList>
  ),
  args: {
    sizeC: 'md',
    themeType: 'primary',
    outlined: false,
    borderRadius: ['12px'],
  },
};
