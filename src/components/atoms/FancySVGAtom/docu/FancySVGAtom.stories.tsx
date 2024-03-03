// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

import SVGXCircle from '../../../icons/SVGXCircle/SVGXCircle';

// Import the component to be tested
import FancySVGAtom from '../FancySVGAtom';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
// Define metadata for the story
const meta = {
  component: FancySVGAtom,
  title: 'components/atoms/FancySVGAtom',
  parameters: {
    docs: {
      description: {
        component:
          'Fancy SVG Atom that can be dynamicly adjusted in sizeC and alignment. It can also be used to display System Messages.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    sizeC: {
      description: 'Size of the SVG',
      defaultValue: {
        summary: 'xxs',
      },
      control: { type: 'select' },
    },
    systemMessage: {
      description: 'Optional prop to specify system message color theming',
      control: { type: 'select' },
      defaultValue: undefined,
      options: ['error', 'warning', 'success', 'info', undefined],
    },
    isActive: {
      description: 'Is the SVG active, gives it the accent color',
      control: { type: 'boolean' },
      defaultValue: {
        summary: false,
      },
    },
    isPassive: {
      description: 'Is the SVG passive, the active and systemMessage colors are not applied',
      control: { type: 'boolean' },
      defaultValue: false,
      default: {
        summary: false,
      },
    },
  },
} satisfies Meta<typeof FancySVGAtom>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <FancySVGAtom {...args}>
      <SVGXCircle />
    </FancySVGAtom>
  ),
  args: {
    isPassive: false,
    sizeC: 'md',
    themeType: 'secondary',
    systemMessage: undefined,
    layer: 0,
    isActive: false,
  },
  parameters: {
    docs: {
      description: {
        story: '',
      },
    },
  },
};
