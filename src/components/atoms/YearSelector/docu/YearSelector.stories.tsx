// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import YearSelector from '../YearSelector';

// Define metadata for the story
const meta = {
  component: YearSelector,
  title: 'components/atoms/YearSelector',
  parameters: {
    docs: {
      description: {
        component:
          'The `YearSelector` component is a React component designed for selecting a year through a user interface that includes previous and next buttons and a year input field. It´s well-suited for applications requiring date input or navigation by year, such as calendars or date pickers.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: { type: 'select' },
      options: ['primary', 'secondary', 'accent', 'transparent', undefined],
      table: {
        defaultValue: { summary: 'primary' },
      },
    },
    themeTypeSecondary: {
      description: 'The secondary theme color type, typically used for the text and button elements.',
      control: { type: 'select' },
      options: ['primary', 'accent', 'secondary'],
      table: {
        defaultValue: { summary: 'secondary' },
      },
    },
    layer: {
      description: 'The layer of the component',
      control: { type: 'range', min: 0, max: 9 },
      table: {
        defaultValue: { summary: 0 },
      },
    },
    selectedYear: {
      description: 'The currently selected year.',
      table: {
        defaultValue: { summary: 'new Date().getFullYear() (current year)' },
      },
      control: {
        type: 'number',
      },
    },
    sizeC: {
      description: 'Specifies the size of the component, affecting dimensions and spacing.',
      control: {
        type: 'select',
      },
    },
    borderRadius: {
      description: 'The border radius of the year selector',
      control: {
        type: 'select',
      },
    },
    ariaTextLeftArrow: {
      description: 'The aria label for the left arrow',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'a year back' },
      },
    },
    ariaTextRightArrow: {
      description: 'The aria label for the right arrow',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'one year forward' },
      },
    },
    yearChangeHandler: {
      description: 'The handler for the year selector',
      control: {
        type: 'function',
      },
    },
    maxYear: {
      description: 'The maximum year that can be selected.',
      control: {
        type: 'number',
      },
    },
    minYear: {
      description: 'The minimum year that can be selected.',
      control: {
        type: 'number',
      },
    },
  },
} satisfies Meta<typeof YearSelector>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <YearSelector {...args} />,
  args: {
    selectedYear: 2021,
    yearChangeHandler: (year: number) => console.log(year),
    themeType: 'primary',
    layer: 0,
    ariaTextLeftArrow: 'go one year back',
    ariaTextRightArrow: 'go one year',
    minYear: 2000,
    maxYear: 2030,
  },
};
