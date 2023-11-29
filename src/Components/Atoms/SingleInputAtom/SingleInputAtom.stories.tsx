// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import { SingleInputAtom } from './SingleInputAtom';

// fix for building ... because storybook is not able to handle the default export
const HelperComponent = (props: React.ComponentProps<typeof SingleInputAtom>) => <SingleInputAtom {...props} />;
HelperComponent.displayName = 'SingleInputAtom';

// Define metadata for the story
const meta = {
  component: HelperComponent,
  parameters: {
    docs: {
      description: {
        component: 'A ScrollableBar component, when the content is too wide to fit in the screen, it will be scrollable',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    value: {
      description: 'The value of the input, with a maximum length of 1',
      control: {
        type: 'text',
      },
    },
    ariaLabel: {
      control: {
        type: 'text',
      },
    },
    themeType: {
      description: 'The theme type of the input',
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
        min: 0,
        max: 10,
        step: 1,
      },
      defaultValue: {
        summary: '0',
      },
    },
  },

  // Add tags to the story
  tags: ['autodocs'],
} satisfies Meta<typeof HelperComponent>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    value: '1',
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
