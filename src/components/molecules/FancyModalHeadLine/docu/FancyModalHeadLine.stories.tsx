import type { Meta, StoryObj } from '@storybook/react';

import FancyModalHeadLine from '../FancyModalHeadLine';

const meta = {
  component: FancyModalHeadLine,
  parameters: {
    docs: {
      description: {
        component:
          'The FancyModalHeadLine component is designed to create a stylized heading for modals, incorporating optional titles, subtitles, and a decorative horizontal rule (<hr>). This component is flexible, allowing for centralized alignment and the inclusion of additional HTML properties for customization. It leverages the Typography and FancyLine components for text display and the decorative line, respectively, ensuring consistency and theming across the UI.s',
      },
    },
  },
  argTypes: {
    alignCenter: {
      description:
        'Determines whether the content (title, subtitle, and the horizontal rule) should be centered. Defaults to `true`.',
      control: {
        type: 'boolean',
      },
    },
    title: {
      description: 'The main title text to be displayed. If not provided, no title will be shown.',
      control: {
        type: 'text',
      },
    },
    subTitle: {
      description: 'The subtitle text to be displayed beneath the title. If not provided, no subtitle will be shown.',
      control: {
        type: 'text',
      },
    },
    hr: {
      description:
        'Determines whether a decorative horizontal rule (`<hr>`) should be displayed beneath the title and subtitle. Defaults to `true`.',
      control: {
        type: 'boolean',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof FancyModalHeadLine>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyModalHeadLine {...args} />,
  args: {
    alignCenter: true,
    title: 'Title',
    subTitle: 'SubTitle',
    hr: true,
  },
};
