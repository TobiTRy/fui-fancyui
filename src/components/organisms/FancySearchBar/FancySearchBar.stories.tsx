// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancySearchBar from './FancySearchBar';

import { FancyLoadingSpinner } from '../../atoms/FancyLoadingSpinner';

// Define metadata for the story
const meta = {
  component: FancySearchBar,
  parameters: {
    docs: {
      description: {
        component: 'Dumb-Comonent: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    handlerSearchValue: {
      description: 'Callback function for the search value',
      control: {
        type: 'function',
      },
    },
    searchListWidth: {
      description: 'The width of the search list',
      control: {
        type: 'text',
      },
      defaultValue: {
        summary: '100%',
      },
    },
    searchValue: {
      description: 'The search value',
      control: {
        type: 'text',
      },
    },
    themeType: {
      description: 'The theme of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'secondary',
      },
    },
    layer: {
      description: 'The layer of the input',
      control: {
        type: 'range',
        min: 1,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: '4',
      },
    },
    sizeC: {
      description: 'The size of the input',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'md',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof FancySearchBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancySearchBar {...args} />,
  args: {
    handlerSearchValue: (value: string) => console.log(value),
    searchListWidth: '100%',
    layer: 2,
    children: <FancyLoadingSpinner sizeC="lg" />,
  },
};
