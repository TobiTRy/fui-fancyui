// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyActionWrapper from '../FancyActionWrapper';
import { FancyButton } from '@/components/organisms/FancyButton';

// Define metadata for the story
const meta = {
  title: 'components/atoms/FancyActionWrapper',
  component: FancyActionWrapper,
  parameters: {
    layout: 'centered',
  },

  // Define arguments for the story
  argTypes: {
    WrapperComponent: {
      description: 'The component to use as a wrapper',
      control: {
        type: 'object',
      },
    },
    as: {
      description: 'The element type to render',
      options: ['button', 'a'],
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    children: {
      description: 'The content of the component',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancyActionWrapper>;

// Export the metadata
export default meta;

// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const WrapperWithButton: Story = {
  render: (args) => (
    <FancyActionWrapper {...args}>
      <FancyButton notAButton label={'Click me'} />
    </FancyActionWrapper>
  ),
  args: {
    as: 'button',
    children: 'Click me',
  },
};
// Define the primary story
export const WrapperWithCustom: Story = {
  render: (args) => (
    <FancyActionWrapper {...args} WrapperComponent={<a href="http://fui.cool"></a>}>
      <FancyButton notAButton label={'Click me'} />
    </FancyActionWrapper>
  ),
  args: {
    as: 'button',
    children: 'Click me',
  },
};
