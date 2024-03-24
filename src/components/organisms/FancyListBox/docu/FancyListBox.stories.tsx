// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyListBox from '../FancyListBox';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the tsory
const meta = {
  component: FancyListBox,
  title: 'components/organisms/FancyListBox',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyListBox` is a customizable React component designed to render a list with provided items, enhancing the visual appeal with themes, separators, titles, and various item settings. It utilizes several sub-components and utilities to offer a rich and flexible user interface.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    sizeC: {
      description: 'The sizeC of the list',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    borderRadius: {
      description: 'The border radius of the list',
      control: {
        type: 'object',
      },
    },
    seperator: {
      description: 'The seperator of the list',
      control: {
        type: 'object',
      },
    },
    boxTitle: {
      description: 'The title of the list',
      control: {
        type: 'object',
      },
    },
    outlined: {
      description: 'The outlined of the list',
      control: {
        type: 'boolean',
      },
    },
    itemSettings: {
      description: 'The item settings of the list',
      control: {
        type: 'object',
      },
    },
    boxShadow: {
      description: 'The boxShadow of the list',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The outlinedBackgroundStrength of the list',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
} satisfies Meta<typeof FancyListBox>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyListBox {...args}>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
    </FancyListBox>
  ),
  args: {
    themeType: 'primary',
    layer: 2,
  },
};

export const WithMoreApplyedProps: Story = {
  render: (args) => (
    <FancyListBox {...args}>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
      <p>Hi</p>
    </FancyListBox>
  ),
  args: {
    sizeC: 'md',
    themeType: 'primary',
    layer: 2,
    borderRadius: 'md',
    seperator: {
      margin: ['0', 'sm'],
      themeType: 'primary',
    },
    boxTitle: {
      title: {
        variant: 'bodytextLg',
        children: 'Title',
      },
      titleAlign: 'left',
    },
    outlined: false,
    itemSettings: {
      sizeC: 'md',
    },
  },
};
