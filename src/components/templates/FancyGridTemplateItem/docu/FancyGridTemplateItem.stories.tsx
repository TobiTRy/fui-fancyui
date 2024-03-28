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
          'The FancyGridTemplateItem component is designed to be a part of the FancyGridTemplate layout system. It is used to place individual items within the grid, allowing for customization through specified grid areas and optional external styles. This component enables detailed control over the positioning and styling of content within the grid layout, making it an integral piece of creating responsive, complex grid structures.',
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
