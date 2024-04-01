// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import SwitchActiveIndicator from '../SwitchActiveIndicator';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: SwitchActiveIndicator,
  title: 'components/atoms/SwitchActiveIndicator',
  parameters: {
    docs: {
      description: {
        component:
          'The `SwitchActiveIndicator` component is a React component designed to indicate which item in a switch list is currently active. It provides a dynamic visual cue through various styles like underline, topline, or a blob, based on the component`s configuration.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'accent', 0),
    type: {
      description: 'The type of the indicator, it can be a bolb or a underline',
      control: {
        type: 'radio',
      },
      options: ['bolb', 'underline', 'topline'],
      table: {
        defaultValue: { summary: 'bolb' },
      },
    },
    direction: {
      description: 'The direction of the indicator where it should be moved horizontal or vertical',
      control: {
        type: 'radio',
      },
      options: ['horizontal', 'vertical'],
      table: {
        defaultValue: { summary: 'horizontal' },
      },
    },
    itemNumber: {
      description: 'The itemnumber is to calc the position of the indicator for each item',
      control: {
        type: 'number',
      },
    },
    borderRadius: {
      description: 'The rounded is to set the border-radius of the indicator',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg', 'xl', 'xxl', 'xxxl', 'complete'],
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    tabSpacing: {
      description: 'The spacing is to calc with the offset the position of the indicator for each item',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: '' },
      },
    },
    outlined: {
      description: 'The outlined is to set the border of the indicator',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
  },
} satisfies Meta<typeof SwitchActiveIndicator>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <div style={{ position: 'relative' }}>
      <SwitchActiveIndicator {...args} />
    </div>
  ),
  args: {
    itemNumber: 0,
    tabSpacing: 'md',
    type: 'bolb',
    borderRadius: 'md',
    outlined: false,
    direction: 'horizontal',
    themeType: 'accent',
    layer: 0,
    externalStyle: {
      height: '10px',
      width: '10px',
    },
  },
};
