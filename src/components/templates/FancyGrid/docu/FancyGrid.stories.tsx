// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGrid from '../FancyGrid';
import { FancyButton } from '../../../organisms/FancyButton';

// Define metadata for the story
const meta = {
  component: FancyGrid,
  title: 'components/templates/FancyGrid',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyGrid` is a responsive and customizable grid layout component for React applications, designed to arrange content in a structured and adaptable grid pattern. It uses styled-components for enhanced styling capabilities.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    simpleGrid: {
      description: 'The value of the input',
      defaultValue: '12',
      control: {
        type: 'number',
      },
    },
    gap: {
      description: 'The layer of the modal',
      defaultValue: '0',
      control: {
        type: 'text',
      },
    },
    breakpoints: {
      description: 'The breakpoints for the grid',
      defaultValue: [],
      control: {
        type: 'object',
      },
    },
    margin: {
      description: 'The margin of the grid',
      control: {
        type: 'object',
      },
    },
    padding: {
      description: 'The padding of the grid',
      control: {
        type: 'object',
      },
    },
    gridTemplateColumns: {
      description: 'The grid template columns',
      control: {
        type: 'object',
      },
    },
    gridTemplateRows: {
      description: 'The grid template rows',
      control: {
        type: 'object',
      },
    },
    rowGap: {
      description: 'The row gap',
      control: {
        type: 'select',
      },
    },
    columnGap: {
      description: 'The column gap',
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof FancyGrid>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyGrid {...args}>
      <FancyGrid.Item gridSpace={6}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={6}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={12}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={4}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={4}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridSpace={4}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
    </FancyGrid>
  ),
  args: {
    padding: ['sm', 'md', 'lg', 'xl'],
    margin: ['sm', 'md', 'lg', 'xl'],
    simpleGrid: 12,
    gap: '12px',
    breakpoints: [{ breakpoint: '500px', gridSize: 6 }],
  },
};

// Define the secondary story with row and column grid
export const Secondary: Story = {
  render: (args) => (
    <FancyGrid {...args}>
      <FancyGrid.Item gridColumn={1} gridRow={1}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridColumn={2} gridRow={1}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridColumn={3} gridRow={1}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridColumn={1} gridRow={2}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridColumn={2} gridRow={2}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
      <FancyGrid.Item gridColumn={3} gridRow={2}>
        <FancyButton label="Ji" wide />
      </FancyGrid.Item>
    </FancyGrid>
  ),
  args: {
    padding: ['sm', 'md', 'lg', 'xl'],
    margin: ['sm', 'md', 'lg', 'xl'],
    gap: 'sm',
    gridTemplateColumns: ['1fr', '1fr', '1fr'],
    gridTemplateRows: ['1fr', '1fr'],
  },
};
