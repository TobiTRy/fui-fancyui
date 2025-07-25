import type { Meta, StoryObj } from '@storybook/react';

import Button from '../Button';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: Button,
  title: 'components/molecules/Button',
  parameters: {
    docs: {
      description: {
        component:
          'The Button component is a versatile UI element designed for React applications, which can be styled using styled-components. It supports various configurations including size, theming, and optional properties like wide for full-width buttons or disabled for inactive buttons. It can adapt to different roles by rendering as either a `<button>` or an `<a>` tag, based on the as property, making it suitable for a wide range of user interactions. The component integrates with the application´s theme and can be customized with external styles.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('allThemeTypes', 'accent', 0),
    sizeC: {
      description: 'The size of the component.',
      control: {
        type: 'select',
        options: ['sm', 'md', 'lg'],
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    wide: {
      description: 'If true, the component will be full-width.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    borderRadius: {
      description: 'The border radius of the component.',
      control: {
        type: 'select',
      },
    },

    outlined: {
      description: 'This prop will change the Nutton to outlined',
      control: {
        type: 'boolean',
      },
    },
    textColor: {
      description: 'This prop will change the color of the text',
      control: {
        type: 'select',
      },
    },
    hoverColor: {
      description: 'This prop will change the color of the hover',
      control: {
        type: 'select',
      },
    },
    noSize: {
      description: 'This prop will remove the size of the button like padding and size',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      description: 'If true, the component will be disabled.',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    notAButton: {
      description: 'This prop will change the button to a span to use a own wapper like next link',
      control: {
        type: 'boolean',
      },
    },
    appendClassNameOnStyle: {
      description:
        'This prop will append the class name on the style, the button is separated from the style and the button is a wrapper around the style',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <Button {...args}>HI</Button>,
  args: {
    themeType: 'accent',
    sizeC: 'md',
    layer: 0,
    outlined: false,
    wide: false,
  },
};

export const Outlined: Story = {
  render: (args) => <Button {...args}>HI</Button>,
  args: {
    themeType: 'accent',
    sizeC: 'md',
    layer: 0,
    outlined: true,
    wide: false,
  },
};
