import type { Meta, StoryObj } from '@storybook/react';

import DateOutputFromTo from '../DateOutputFromTo';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: DateOutputFromTo,
  title: 'components/molecules/DateOutputFromTo',
  parameters: {
    docs: {
      description: {
        component:
          'The DateOutputFromTo component is a molecule that combines the functionalities of the DateOutput and FancyLine atoms to display a date range with a visually appealing separator. This component is designed for applications where displaying a date range (from and to dates) is required, offering customization options through props for themes, sizes, and more. It also includes interactive elements, allowing users to select either the start or end date of the range.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 0),
    whichIsSelecting: {
      description: 'A string, indicating which date is currently being selected. It can be either "from" or "to".',
      control: {
        type: 'radio',
      },
    },
    dateFrom: {
      description: 'The date object representing the start date of the range.',
      control: {
        type: 'date',
      },
    },
    dateTo: {
      description: 'The date object representing the end date of the range.',
      control: {
        type: 'date',
      },
    },
    handleFromTo: {
      description: 'The function that handles the selection of the start and end dates.',
      control: {
        type: 'function',
      },
    },
    textCustom: {
      description: 'An object containing custom text for the `DateOutput` component.',
      control: {
        type: 'object',
      },
    },
    sizeC: {
      description: 'The size of the component.',
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
  },
} satisfies Meta<typeof DateOutputFromTo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DateOutputFromTo {...args} />,
  args: {
    dateFrom: new Date(),
    dateTo: new Date(),
    handleFromTo: (wich: 'from' | 'to') => console.log(wich),
    whichIsSelecting: 'from',
    themeType: 'primary',
    layer: 3,
    textCustom: {
      from: {
        selected: 'From:',
        notSelected: 'Select from',
      },
      to: {
        selected: 'To:',
        notSelected: 'Select to',
      },
    },
  },
};
