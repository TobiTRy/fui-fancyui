import type { Meta, StoryObj } from '@storybook/react';

import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

import FancySelectWrapper from '../FancySelectWrapper';

const meta = {
  component: FancySelectWrapper,
  title: 'components/molecules/FancySelectWrapper',
  parameters: {
    docs: {
      description: {
        component:
          'The `FancySelectWrapper` component is a versatile wrapper designed specifically for enhancing form elements like checkboxes or select boxes with additional context in the form of a title and description. Utilizing the `FancyContent` molecule from the project`s components library, it allows for a structured and visually appealing presentation of form elements, making them more user-friendly and accessible.',
      },
    },
  },
  argTypes: {
    align: {
      description: 'The alignment of the label and the input element.',
      control: {
        type: 'select',
        options: ['center', 'left', 'right'],
      },
    },
    alignInput: {
      description: 'The alignment of the input element.',
      control: {
        type: 'select',
        options: ['left', 'right'],
      },
    },
    externalStyle: {
      description: 'External styling for the component.',
      control: {
        type: 'object',
      },
    },
    label: {
      description: 'The label for the input element.',
      control: {
        type: 'text',
      },
    },
    description: {
      description: 'The description for the input element.',
      control: {
        type: 'text',
      },
    },
    layerDescription: {
      description: 'The layer of the description.',
      control: {
        type: 'range',
        min: 0,
        max: 9,
      },
    },
    ...templateThemeType('notTransparent', 'secondary', 0),
  },
} satisfies Meta<typeof FancySelectWrapper>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancySelectWrapper {...args} />,
  args: {
    label: 'Test',
    align: 'left',
    alignInput: 'left',
    description: 'This is a description',
  },
};
