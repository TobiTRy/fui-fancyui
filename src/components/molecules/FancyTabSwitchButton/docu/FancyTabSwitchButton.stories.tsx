// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyTabSwitchButton from '../FancyTabSwitchButton';

import SVGCheckMark from '../../../icons/SVGCheckMark/SVGCheckMark';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { TFancyTabSwitchButton } from '@/components/molecules/FancyTabSwitchButton';

// fix for building ... because storybook is not able to handle the default export
const HelperComponent = (props: TFancyTabSwitchButton) => <FancyTabSwitchButton {...props} />;
HelperComponent.displayName = 'FancyTabSwitchButton';

// Define metadata for the story
const meta = {
  component: FancyTabSwitchButton,
  title: 'components/molecules/FancyTabSwitchButton',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyTabSwitchButton component is a React component designed to act as a stylized tab switch button, leveraging the flexibility and styling capabilities of styled-components and React´s compositional patterns. This component utilizes the Typography atom and the FancyContent molecule for its internal structure, aiming to provide a rich, customizable user interface element that can be easily integrated into a variety of web applications.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'secondary', 0),
    disabled: {
      description: 'If true, the button will be disabled.',
      type: { name: 'boolean' },
    },
    label: {
      description: 'The text to be displayed in the button.',
      type: { name: 'string' },
    },
    icon: {
      description: 'The icon to be displayed in the button.',
      control: { type: 'object' },
    },
    selected: {
      description: 'If true, the button will be selected.',
      type: { name: 'boolean' },
    },
    onClick: {
      description: 'The function to be called when the button is clicked.',
      type: { name: 'function' },
    },
    themeType: {
      description: 'The theme type of the button.',
      control: { type: 'radio' },
    },
    iconAlign: {
      description: 'The alignment of the icon.',
      control: { type: 'select' },
    },
    sizeC: {
      description: 'The size of the button.',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
    activeTextThemeType: {
      description: 'The theme type of the text when the button is selected.',
      control: { type: 'select' },
    },
    externalStyle: {
      description: 'The external style of the button.',
      control: { type: 'object' },
    },
  },
} satisfies Meta<typeof FancyTabSwitchButton>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    itemKey: '1',
    label: 'label',
    themeType: 'secondary',
    icon: <SVGCheckMark />,
    selected: false,
    iconAlign: 'left',
    sizeC: 'sm',
    layer: 0,
  },
};
