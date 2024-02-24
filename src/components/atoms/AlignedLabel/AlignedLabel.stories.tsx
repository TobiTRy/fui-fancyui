import type { Meta, StoryObj } from '@storybook/react';

import { AlignedLabel } from '@/components/atoms/AlignedLabel';
import { TAlignedLabelWithAllProps } from '@/components/atoms/AlignedLabel/TAlinedLabel.model';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: AlignedLabel,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component:
          'The input label wich is aligned left or centered. <br> - the alignment is set by the align prop. <br> - the color changes depending on the $isActive prop',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'secondary'),
    align: {
      description: 'This is the alignment of the label with flex',
      control: { type: 'radio' },
      options: ['left', 'center', 'right', undefined],
      type: { name: 'string' },
      defaultValue: {
        summary: 'left',
      },
    },
    systemMessageType: {
      description: 'The system message type',
      type: { name: 'string', required: false },
      options: ['error', 'warning', 'info', 'success', undefined],
      control: { type: 'select' },
    },
    typography: {
      description: 'the props wich a typography component can get',
      control: { type: 'object' },
    },
    size: {
      description: 'The size of the component',
      control: { type: 'select' },
      defaultValue: {
        summary: 'md',
      },
    },
    ownTypographyComponent: {
      description: 'If you want to use your own typography component or other component as a child',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
  },

  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
} satisfies Meta<typeof AlignedLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    align: 'left',
    themeType: 'secondary',
    layer: 4,
    size: 'md',
    typography: {
      variant: 'interactiveLg',
    },
  },
  render: (args: TAlignedLabelWithAllProps) => <AlignedLabel {...args}>{'This is a label'}</AlignedLabel>,
};
