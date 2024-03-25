// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';

import { FancyRangeSlider } from '@/components/organisms/FancyRangeSlider';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyRangeSlider,
  title: 'components/organisms/FancyRangeSlider',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyRangeSlider` is a component designed to provide a flexible and visually appealing range slider input. It combines a raw slider with optional enhancements such as a number input for direct value entry, custom styling, and integration with a system messaging feature. The component is built to be easily integrated into larger forms or UIs, offering extensive customization through props to match various design requirements.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    label: {
      description: 'The label for the slider',
      control: {
        type: 'text',
      },
    },
    align: {
      description: 'Text alignment within the input wrapper.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    icon: {
      description: 'The icon of the input',
      table: {
        defaultValue: { summary: 'none' },
      },
    },
    disabled: {
      description: 'Whether the slider is disabled.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    min: {
      description: 'The minimum value of the slider',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    max: {
      description: 'The maximum value of the slider',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 100 },
      },
    },
    value: {
      description: 'The current value of the input',
      control: {
        type: 'number',
      },
    },
    transparentBackground: {
      description: 'Whether the input has a transparent background',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    displayNumberInput: {
      description: 'Whether to display an input for direct number entry.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof FancyRangeSlider>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyRangeSlider {...args} />,
  args: {
    id: 'test',
    label: 'Label',
    align: 'left',
    themeType: 'primary',
    layer: 2,
    icon: <SVGCheckMark />,
    disabled: false,
    min: 0,
    max: 100,
    value: 0,
  },
};

export const WithNumberInput: Story = {
  render: (args) => <FancyRangeSlider {...args} />,
  args: {
    ...Primary.args,
    displayNumberInput: true,
  },
};

export const WithTransparentBackground: Story = {
  render: (args) => <FancyRangeSlider {...args} />,
  args: {
    ...Primary.args,
    layer: 3,
    transparentBackground: true,
  },
};
