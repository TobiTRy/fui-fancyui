import type { Meta, StoryObj } from '@storybook/react';

import SingleInputs from '../SingleInputs';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: SingleInputs,
  title: 'components/molecules/SingleInputs',
  parameters: {
    docs: {
      description: {
        component:
          'The `SingleInputs` component is a React component designed to handle a sequence of single-character inputs, often used in scenarios such as verification code input fields. It supports automatic case adjustment, custom length for the input sequence, and various styling and status feedback options.',
      },
    },
  },

  argTypes: {
    length: {
      description: 'The number of input fields to render.',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 6 },
      },
    },
    automaticCase: {
      description: 'Specifies whether the input should automatically convert characters to upper or lower case.',
      control: {
        type: 'select',
        options: ['upper', 'lower', undefined],
      },
    },
    status: {
      description:
        ' An object indicating the input´s status, which can modify the input´s border color based on the theme.',
      control: {
        type: 'object',
      },
      table: {
        defaultValue: {
          summary: `isError: false,
          isSucceed: false,`,
        },
      },
    },
    ...templateThemeType('allThemeTypes', 'secondary', 0),
  },
} satisfies Meta<typeof SingleInputs>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SingleInputs {...args} />,
  args: {
    length: 6,
    status: {
      isError: false,
      isSucceed: false,
    },
  },
};
