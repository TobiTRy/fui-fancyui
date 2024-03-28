// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyGridTemplateItem from '../FancyGridTemplateItem';
import FancyGridTemplate from '@/components/templates/FancyGridTemplate/FancyGridTemplate';

// Define metadata for the story
const meta = {
  component: FancyGridTemplateItem,
  title: 'components/templates/FancyGridTemplateItem',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyGridTemplateItem component is designed to be used within the FancyGridTemplate component as a grid item. It provides a structured way to position and style elements within the grid areas defined by the FancyGridTemplate. This subcomponent leverages styled-components for dynamic styling based on props, allowing for customizable grid area assignments and the injection of external CSS for further customization.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    gridArea: {
      description: 'The grid area to place the item in',
      control: {
        type: 'text',
      },
    },
    externalStyle: {
      description: 'External styles to be injected into the component',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancyGridTemplateItem>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyGridTemplate gridAreas={['header header']}>
      {/* Header */}
      <FancyGridTemplateItem {...args}>
        <div style={{ backgroundColor: '#ffcc00', height: '100%' }}>Header</div>
      </FancyGridTemplateItem>
    </FancyGridTemplate>
  ),
  args: {
    gridArea: 'header',
    externalStyle: {},
  },
};
