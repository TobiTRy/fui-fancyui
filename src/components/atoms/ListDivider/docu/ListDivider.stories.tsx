// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import ListDivider from '../ListDivider';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  title: 'components/atoms/ListDivider',
  component: ListDivider,
  parameters: {
    docs: {
      description: {
        component:
          'The `ListDivider` component serves as a customizable separator within your UI, offering options to include a line with or without additional information such as labels or icons. It´s versatile, allowing for theming, alignment, and size customization to fit seamlessly into various design requirements.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 3),
    label: {
      description:
        'A text label to be displayed alongside the divider line. If `label` is provided, the divider will include this label; otherwise, it will render as a simple line.',
      control: { type: 'text' },
    },
    textAlignment: {
      description: 'Determines the alignment of the text label. Defaults to `center`',
      control: { type: 'select' },
      defaultValue: {
        summary: 'center',
      },
      options: ['left', 'center', 'right'],
    },
    noLine: {
      description: 'If set to `true`, the divider line will not be rendered, only the content (if any) will be shown.',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    fontWeight: {
      description: 'The font weight of the label',
      control: { type: 'text' },
      defaultValue: {
        summary: undefined,
      },
    },
    sizeC: {
      description: 'The size of the divider',
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      defaultValue: {
        summary: 'md',
      },
    },
    icon: {
      description: 'The icon to be displayed on the divider',
    },
  },
} satisfies Meta<typeof ListDivider>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <ListDivider {...args} />,
  args: {},
};
export const WithText: Story = {
  render: (args) => <ListDivider {...args} />,
  args: {
    label: 'Some Text',
  },
};
