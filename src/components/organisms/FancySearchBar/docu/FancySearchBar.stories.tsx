// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancySearchBar from '../FancySearchBar';

import { FancyLoadingSpinner } from '../../../atoms/FancyLoadingSpinner';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancySearchBar,
  title: 'components/organisms/FancySearchBar',
  parameters: {
    docs: {
      description: {
        component:
          'The FancySearchBar component is a sophisticated UI element designed for React applications, facilitating user interaction through a searchable input field. This component enhances the search experience by providing visual feedback and customizable features, such as themed backgrounds, dynamic list display based on input focus or content, and integration with styled-components for a seamless design fit within a project´s overall aesthetic.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    searchListWidth: {
      description: 'The width of the search list',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '100%' },
      },
    },
    value: {
      description: 'The search value',
      control: {
        type: 'text',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    sizeC: {
      description: 'The size of the input',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    openListWhenFocused: {
      description: 'Whether the list is open when focused',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    borderRadius: {
      description: 'The border radius of the search list',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancySearchBar>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancySearchBar {...args} />,
  args: {
    searchListWidth: '100%',
    layer: 1,
    children: (
      <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
        <FancyLoadingSpinner sizeC="lg" />
      </div>
    ),
  },
};
