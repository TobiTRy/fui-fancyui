// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import PageNumberList from '../PageNumberList';

// Define metadata for the story
const meta = {
  component: PageNumberList,
  title: 'components/atoms/PageNumberList',
  parameters: {
    docs: {
      description: {
        component:
          'The `PageNumberList` component is designed to render a list of page numbers based on the total number of pages, the current page, and a specified limit of pages to display at once. It utilizes the `FancyButton` component to render each page number as an interactive button. The component is part of a larger application that presumably deals with pagination, enhancing user navigation through pages of content.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    pageLimits: {
      description: 'The maximum number of pages to display',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 99 },
      },
    },
    currentPage: {
      description: 'The current page number',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    pageHandler: {
      description: 'The function to handle the page number',
      control: {
        type: 'function',
      },
    },
    showPages: {
      description: 'The number of pages to display',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 3 },
      },
    },
    numberButtonStyle: {
      description:
        'The style for the number button it inherits  `TGenerateThemeDesignForComponentProps` and adds `textColorActive` for the active page number and color.',
      control: {
        type: 'object',
      },
      table: {
        defaultValue: {
          summary: {
            textColorActive: 'accent',
            backgroundStrength: 0.1,
            outlines: false,
            textColor: 'secondary',
            hoverColor: 'secondary',
            themeType: 'transparent',
          },
        },
      },
    },
  },
} satisfies Meta<typeof PageNumberList>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <PageNumberList {...args} />,
  args: {
    showPages: 3,
    currentPage: 1,
    pageLimits: 99,
    pageHandler: (page: number) => console.log(page),
    numberButtonStyle: {
      backgroundStrength: 0.1,
      textColor: 'secondary',
      textColorActive: 'accent',
    },
  },
};
