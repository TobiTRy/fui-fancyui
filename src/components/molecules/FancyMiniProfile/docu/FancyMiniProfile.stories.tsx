import type { Meta, StoryObj } from '@storybook/react';

import FancyMiniProfile from '../FancyMiniProfile';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyMiniProfile,
  title: 'components/molecules/FancyMiniProfile',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyMiniProfile component is designed to render a profile image accompanied by a title and a subtitle. This component utilizes a Chip molecule and a FancyProfilePicture atom to create a visually appealing mini profile card. The card´s layout, including the image alignment and spacing, is customizable through props, making it adaptable to various design requirements. The component also supports different sizes and themes for flexibility in presentation.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    sizeC: {
      description: 'The sizeC of the component',
      control: {
        type: 'select',
      },
      options: ['sm', 'md', 'lg'],
    },
    title: {
      description: 'The title text displayed in the profile card.',
      control: {
        type: 'text',
      },
    },
    subTitle: {
      description: 'The subtitle text displayed below the title.',
      control: {
        type: 'text',
      },
    },
    alignImage: {
      description: 'The alignment of the image',
      control: {
        type: 'select',
      },
      options: ['left', 'right'],
    },
    Image: {
      description: 'The image to be displayed in the profile card.',
      control: {
        type: 'object',
      },
    },
    shadow: {
      description: 'If true, applies a shadow effect to the component.',
      control: {
        type: 'boolean',
      },
    },
  },
} satisfies Meta<typeof FancyMiniProfile>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyMiniProfile {...args} />,
  args: {
    alignImage: 'right',
    title: 'Hans',
    subTitle: 'Hans',
    Image: <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />,
    sizeC: 'sm',
    themeType: 'primary',
    layer: 3,
    shadow: true,
  },
};
