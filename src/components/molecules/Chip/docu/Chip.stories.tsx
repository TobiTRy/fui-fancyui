import type { Meta, StoryObj } from '@storybook/react';

import Chip from '../Chip';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGCheckMark } from '@/components/icons/SVGCheckMark';

const meta = {
  component: Chip,
  title: 'components/molecules/Chip',
  parameters: {
    docs: {
      description: {
        component:
          'The Chip component is an adaptable UI element designed for encapsulating various content types, including text, images, and custom elements, making it ideal for tags, filters, or interactive elements. It inherits properties and behaviors from the FancyPill, FancyContent, and FancyImageWrapper components, enhancing its functionality and versatility. The Chip component supports detailed customization through properties such as theme, size, active state, and more. It also offers specialized sub-components like DeleteButton (inheriting from StyledXButton) and Img for common functionalities, streamlining the creation of rich, interactive UIs.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    sizeC: {
      description: 'The sizeC of the button.',
      control: {
        type: 'select',
      },
    },
    isActive: {
      description: 'The active state of the button.',
      control: {
        type: 'boolean',
      },
    },
    outlined: {
      description: 'The outlined state of the button.',
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      description: 'The onClick event of the button.',
      control: {
        type: 'function',
      },
    },
    externalStyle: {
      description: 'The externalStyle of the button.',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof Chip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => (
    <Chip {...args}>
      <Chip.Content>
        <Chip.Content.Icon sizeC="xs">
          <SVGCheckMark />
        </Chip.Content.Icon>
        <Chip.Content.Description>Content</Chip.Content.Description>
      </Chip.Content>
      <Chip.DeleteButton />
    </Chip>
  ),
  args: {
    layer: 1,
    sizeC: 'md',
    outlined: false,
    themeType: 'primary',
    isActive: false,
  },
};
