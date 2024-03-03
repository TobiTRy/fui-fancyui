// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import TitleForComponent from './TitleForComponent';
import { FancyCard } from '@/components/templates/FancyCard';

// Define metadata for the story
const meta = {
  component: TitleForComponent,
  title: 'components/atoms/TitleForComponent',
  parameters: {
    docs: {
      description: {
        component:
          'The `TitleForComponent` component is a React component designed to provide a title for a component. It allows for the customization of the title`s alignment, the gap between the title and the children, and the title itself, making it a versatile tool for creating visually appealing component titles.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    titleAlign: {
      description: 'The alignment of the Title.',
      control: { type: 'select' },
      type: { name: 'string', required: false },
      options: ['left', 'center', undefined],
      defaultValue: {
        summary: 'left',
      },
    },
    children: {
      description: 'The children to be wrapped by the Label.',
      control: { type: 'object' },
    },
    title: {
      description: 'The title of the input.',
      control: { type: 'object' },
    },
    gap: {
      description: 'The gap between the title and the children.',
      control: { type: 'select' },
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl'],
      defaultValue: {
        summary: 'xs',
      },
    },
  },
  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof TitleForComponent>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <TitleForComponent {...args} />,
  args: {
    children: (
      <FancyCard externalStyle={{ width: '100%', height: '100%', padding: '12px' }}>
        <p>Some Text</p>
      </FancyCard>
    ),
    title: {
      variant: 'interactiveLg',
      children: 'This is a text input',
    },
    gap: 'xs',
    titleAlign: 'left',
  },
};
