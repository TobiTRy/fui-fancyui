// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import PageNumberList from '../PageNumberList';

// Define metadata for the story
const meta = {
  component: PageNumberList,
  parameters: {
    docs: {
      description: {
        component:
          'The PageNumberList is a simple component to display the page numbers. <br> - It has a totalPages prop to define the total number of pages <br> - It has a currentPage prop to define the current page <br> - It has a pageLimits prop to define the page limits <br> - It has a onClick prop to define the onClick function',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    pageLimits: {
      control: {
        type: 'number',
      },
    },
    totalPages: {
      control: {
        type: 'number',
      },
    },
    currentPage: {
      control: {
        type: 'number',
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
    totalPages: 10,
    currentPage: 1,
    pageLimits: 3,
    onClick: (page: number) => console.log(page),
  },
};
