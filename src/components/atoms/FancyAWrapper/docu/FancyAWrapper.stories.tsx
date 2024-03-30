// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyAWrapper from '@/components/atoms/FancyAWrapper/FancyAWrapper';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { RawA } from '@/components/atoms/RawA';

// Define metadata for the story
const meta = {
  component: FancyAWrapper,
  title: 'components/atoms/FancyAWrapper',
  parameters: {
    docs: {
      description: {
        component:
          'The RawA component is a with non default styles for anchor tag. It is designed to be flexible and easily integrated into any React project with styled-components for styling. It can be styled with `styled(RawA)`',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    isActive: {
      description: 'Is the link active',
      control: {
        type: 'boolean',
      },
    },
    isHoverable: {
      description: 'Is the link hoverable',
      control: {
        type: 'boolean',
      },
    },
    externalStyle: {
      description: 'External styles to be injected into the component',
      control: {
        type: 'object',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyAWrapper>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancyAWrapper {...args}>
      <RawA href="https://fui.cool">Hi iam in a Wrapper</RawA>
    </FancyAWrapper>
  ),
  args: {
    isActive: false,
    isHoverable: false,
    externalStyle: {},
    themeType: 'secondary',
    layer: 0,
  },
};
