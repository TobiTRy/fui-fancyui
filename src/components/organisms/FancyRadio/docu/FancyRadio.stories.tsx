// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyRadio from '../FancyRadio';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyRadio,
  title: 'components/organisms/FancyRadio',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyRadio component is a customized radio input, complete with a label and an optional description. It`s designed to be a visually enhanced version of a standard radio button, incorporating theming, alignment, and layering capabilities to fit seamlessly into more sophisticated UI designs.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    align: {
      description: 'The alignment of the input',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'left' },
      },
    },
    layerTitle: {
      description: 'The layer of the title',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    layerDescription: {
      description: 'The layer of the description',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    label: {
      description: 'The label of the input',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'The description of the input',
      control: {
        type: 'text',
      },
    },
    checked: {
      description: 'The checked state of the input',
      control: {
        type: 'boolean',
      },
    },
    name: {
      description: 'The name of the input',
      control: {
        type: 'text',
      },
    },
    id: {
      description: 'The id of the input',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'The externalStyle of the input',
      control: {
        type: 'object',
      },
    },
    alignInput: {
      description: 'The alignInput of the input',
      control: {
        type: 'select',
      },

      table: {
        defaultValue: { summary: 'left' },
      },
    },
  },
} satisfies Meta<typeof FancyRadio>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => <FancyRadio {...args} />,
  args: {
    align: 'left',
    label: 'Label',
    description: 'Description',
    checked: false,
    name: 'name',
    id: 'id',
    alignInput: 'left',
  },
};

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyRadio {...args} />,
  args: {
    themeType: 'primary',
    layer: 2,
    label: 'Label',

    description: 'Description',
    checked: false,
    name: 'name',
    id: 'id',
    align: 'left',
    alignInput: 'left',
  },
};
