import type { Meta, StoryObj } from '@storybook/react';

import DateNumberWithStatus from '../DateNumberWithStatus';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: DateNumberWithStatus,
  title: 'components/molecules/DateNumberWithStatus',
  parameters: {
    docs: {
      description: {
        component:
          'The `DateNumberWithStatus` component is a molecule that combines two atoms: `DateNumberAtom` and `AvilableDot`. It is designed to display a date number along with an availability indicator dot, signifying whether a particular date is busy or free. This component is useful in calendar or scheduling applications to provide users with a quick visual understanding of date availability.',
      },
    },
  },
  argTypes: {
    dateNumber: {
      description: 'A number representing the date to be displayed.',
      control: {
        type: 'number',
      },
    },
    isAvailable: {
      description: 'A boolean or undefined, indicating the availability status to be shown by the `AvilableDot`',
      control: {
        type: 'select',
      },
    },
    disabled: {
      description:
        'A boolean, indicating if the date is disabled. When disabled, the availability dot will be transparent.',
      control: {
        type: 'boolean',
      },
    },
    isSelected: {
      description: 'A boolean, indicating if the date is selected.',
      control: {
        type: 'boolean',
      },
    },
    isCurrentDay: {
      description: 'A boolean, indicating if the date is the current day.',
      control: {
        type: 'boolean',
      },
    },
    range: {
      description: ' An `IRange` object specifying the range. Used by `DateNumberAtom`.',
      control: {
        type: 'object',
      },
    },
    onClick: {
      description: 'The onClick function of the day.',
      control: {
        type: 'function',
      },
    },
    ...templateThemeType('notTransparent', 'secondary', 0),
  },
} satisfies Meta<typeof DateNumberWithStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateNumberWithStatus {...args} />,
  args: {
    isAvailable: 'completly',
    disabled: false,
    dateNumber: 1,
    isSelected: false,
    isCurrentDay: false,
    range: { start: false, inRange: false, end: false },
    onClick: () => console.log('click'),
    themeType: 'secondary',
    layer: 0,
  },
};
