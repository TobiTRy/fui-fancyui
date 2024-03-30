// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGridTemplate from '../FancyGridTemplate';

// Define metadata for the story
const meta = {
  component: FancyGridTemplate,
  title: 'components/templates/FancyGridTemplate',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancyGridTemplate` component is designed to create a flexible and customizable grid layout. It utilizes styled-components and can be used to structure content in a grid format with specified areas, gaps, and dimensions.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    gridAreas: {
      description:
        'Array of strings defining the grid layout. Each string represents a row in the grid, and each space-separated value within the string defines a grid area.',
      defaultValue: [],
      control: {
        type: 'object',
      },
    },
    gridAreasBreakPoints: {
      description: 'The breakpoints for the grid areas',
      defaultValue: [],
      control: {
        type: 'object',
      },
    },
    gapColumn: {
      description: 'The gap sizeC between columns. Defaults to sm',
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'number',
      },
    },
    gapRow: {
      description: 'The gap sizeC between rows. Defaults to sm',
      table: {
        defaultValue: { summary: 'sm' },
      },
      control: {
        type: 'number',
      },
    },
    width: {
      description: 'The width of the grid container. Defaults to 100%',
      table: {
        defaultValue: { summary: '100%' },
      },
      control: {
        type: 'text',
      },
    },
    height: {
      description: 'The height of the grid container.',
      table: {
        defaultValue: { summary: '100%' },
      },
      control: {
        type: 'text',
      },
    },
  },
} satisfies Meta<typeof FancyGridTemplate>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyGridTemplate {...args}>
      {/* Header */}
      <FancyGridTemplate.GridItem gridArea="header">
        <div style={{ backgroundColor: '#ffcc00', height: '100%' }}>Header</div>
      </FancyGridTemplate.GridItem>

      {/* Sidebar */}
      <FancyGridTemplate.GridItem gridArea="sidebar">
        <div style={{ backgroundColor: '#00ccff', height: '100%' }}>Sidebar</div>
      </FancyGridTemplate.GridItem>

      {/* Content */}
      <FancyGridTemplate.GridItem gridArea="content">
        <div style={{ backgroundColor: '#cccccc', height: '100%' }}>Content</div>
      </FancyGridTemplate.GridItem>

      {/* Footer */}
      <FancyGridTemplate.GridItem gridArea="footer">
        <div style={{ backgroundColor: '#ff6699', height: '100%' }}>Footer</div>
      </FancyGridTemplate.GridItem>
    </FancyGridTemplate>
  ),
  args: {
    gridAreas: ['header header', 'sidebar content', 'footer footer'],
    gapColumn: 'md',
    gapRow: 'md',
    height: '100vh',
  },
};
