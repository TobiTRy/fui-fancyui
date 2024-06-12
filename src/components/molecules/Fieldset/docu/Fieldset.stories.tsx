// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Fieldset from '../Fieldset';

// Define metadata for the story
const meta = {
  component: Fieldset,
  title: 'components/molecules/Fieldset',
  parameters: {
    docs: {
      description: {
        component:
          'The `Fieldset` component is a molecule-level component that provides a structured grouping for a set of interface elements, typically form fields. It leverages the `Typography` atom component for rendering its label, making it versatile and thematically consistent across different parts of an interface. The component is designed to encapsulate a set of children with an optional label, which is styled and positioned based on provided props. It supports customizing the label through typography settings and can be disabled to alter its appearance and interaction state.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    alignLegend: {
      description: 'The alignment of the label relative to the fieldset.',
      control: {
        type: 'select',
        options: ['left', 'center'],
      },
    },
    legend: {
      description: 'The label to be displayed for the fieldset.',
      control: {
        type: 'text',
      },
    },
    typographySettings: {
      description: 'The typography settings for the label.',
      control: {
        type: 'object',
      },
    },
    disabled: {
      description: 'The disabled state of the fieldset.',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Fieldset>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <Fieldset {...args}>
      <p>Some text</p>
      <p>Iam the Content of the Fieldset</p>
    </Fieldset>
  ),
  args: {
    alignLegend: 'left',
    legend: 'This is a label',
    typographySettings: {
      variant: 'interactiveLg',
      fontWeight: 'bold',
    },
  },
};
