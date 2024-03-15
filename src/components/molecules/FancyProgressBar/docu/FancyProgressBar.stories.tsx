import type { Meta, StoryObj } from '@storybook/react';

import FancyProgressBar from '../FancyProgressBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyProgressBar,
  title: 'components/molecules/FancyProgressBar',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyProgressBar` is a composite React component that encapsulates a visual representation of progress, complemented by optional labels and a percentage count. It integrates `ProgressBar`, `AlignedLabel`, and `Typography` atoms from the atomic design system to create a more detailed and stylized progress bar. This component is designed to offer enhanced visual feedback through the use of layers, alignment options, theme colors, and external styling capabilities, making it suitable for a wide range of applications where progress visualization is required.',
      },
    },
  },
  argTypes: {
    label: {
      type: { name: 'string', required: false },
      description: 'The label for the Progressbar',
    },
    labelAlign: {
      control: {
        type: 'radio',
      },
      description: 'The alignment of the label',
    },
    progressAlign: {
      control: {
        type: 'radio',
      },
      description: 'The alignment of the progress',
    },
    progressCount: {
      type: { name: 'boolean', required: false },
      description: 'If the progress should be shown as a count',
    },
    themeTypeText: {
      description: 'The theme type of the component',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'info', 'success', 'warning', 'error', undefined],
      defaultValue: {
        summary: 'secondary',
      },
    },
    textLayer: {
      description: 'The layer of the component',
      control: { type: 'range', min: 0, max: 9 },
      defaultValue: {
        summary: 0,
      },
    },
    progress: {
      type: { name: 'number', required: false },
      description: 'The progress of the Progressbar',
    },
    maxValue: {
      type: { name: 'number', required: false },
      description: 'The max value of the Progressbar',
    },
    ...templateThemeType('notTransparent'),
  },
} satisfies Meta<typeof FancyProgressBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyProgressBar {...args} />,
  args: {
    label: 'Test',
    labelAlign: 'left',
    progressCount: true,
    themeType: 'primary',
    themeTypeText: 'secondary',
    textLayer: 0,
    layer: 0,
    progress: 50,
    maxValue: 100,
  },
};
