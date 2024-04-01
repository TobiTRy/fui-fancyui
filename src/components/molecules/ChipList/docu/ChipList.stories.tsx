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
          'The `ChipList` component serves as a container for a collection of chips, offering a flexible way to display an array of items, tags, or filters. It extends its functionality with several customization properties, such as theme, layer, and size, allowing for a seamless integration within various design systems. Utilizing the `DynamicElementWrapper`, it also inherits HTML attributes for further flexibility.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 2),
    sizeC: {
      description: 'Size of the chip list, with `md` as the default size.',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'md' },
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
      options: ['error', 'warning', 'info', 'success', undefined],
      control: {
        type: 'select',
      },
    },
    borderRadius: {
      description: 'The border radius of the ChipList',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof ChipList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <ChipList {...args}>
      <FancyChip label="Test" layer={1} />
      <FancyChip label="Test" layer={1} />
      <FancyChip label="Test" layer={1} />
      <FancyChip label="Test" layer={1} />
      <FancyChip label="Test" layer={1} />
    </ChipList>
  ),
  args: {
    layer: 2,
    sizeC: 'md',
    themeType: 'primary',
    outlined: false,
    borderRadius: ['12px'],
  },
};
