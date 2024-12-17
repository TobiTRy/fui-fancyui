// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import { SkeletonBox } from '@/components/atoms/SkeletonBox';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: SkeletonBox,
  title: 'components/atoms/SkeletonBox',
  parameters: {
    docs: {
      description: {
        component:
          'The SkeletonBox component is used to display a skeleton box, which is used to indicate that the content is loading',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    aspectRatio: {
      description:
        'A string representing the width-to-height ratio (e.g., `16:9`). This prop triggers a validation function to ensure the ratio is correctly formatted. ',
      control: {
        type: 'text',
      },
    },
    sizeH: {
      description:
        'Specifies the height of the skeleton box. Can be a predefined size or `fit` to stretch to the container`s height.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'fit' },
      },
    },
    sizeW: {
      description:
        'Defines the width of the skeleton box. Can be a predefined size or `fit` to stretch to the container`s width',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'fit' },
      },
    },
    borderRadius: {
      description:
        'A string representing the width-to-height ratio (e.g., `16:9`). This prop triggers a validation function to ensure the ratio is correctly formatted.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'xs' },
      },
    },
    externalStyle: {
      description: 'External styles to be applied to the component',
      control: {
        type: 'object',
      },
    },
    index: {
      description: 'The index can be used to delay the animation of the skeleton box e.g. in a list',
      control: {
        type: 'number',
      },
    },
    ...templateThemeType('allThemeTypes', 'primary', 0),
  },
} satisfies Meta<typeof SkeletonBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <SkeletonBox {...args} />,
  args: {
    aspectRatio: '1:1',
    themeType: 'primary',
    sizeH: 'md',
    sizeW: 'md',
    borderRadius: 'xs',
    layer: 0,
    index: 0,
  },
};

export const List: Story = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <SkeletonBox {...args} index={0} />
      <SkeletonBox {...args} index={1} />
      <SkeletonBox {...args} index={2} />
      <SkeletonBox {...args} index={3} />
      <SkeletonBox {...args} index={4} />
    </div>
  ),
  args: {
    aspectRatio: '1:1',
    themeType: 'primary',
    sizeH: 'md',
    sizeW: 'fit',
    borderRadius: 'xs',
    layer: 0,
  },
};
