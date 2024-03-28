// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyDatePicker from '../FancyDatePicker';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: FancyDatePicker,
  title: 'components/templates/FancyDatePicker',
  parameters: {
    docs: {
      description: {
        component:
          'The FancyDatePicker component is an advanced, customizable date picker designed for selecting single or ranges of dates. It supports theme customization, disabling specific dates or date ranges, external data integration for displaying dates, and the option to start the week on any day. This component showcases a sophisticated use of React´s state and effects to manage date selections, theme, and year navigation, providing an intuitive and rich user interface.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    rangeCalendar: {
      description: 'Is Pickinga range of dates',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    ...templateThemeType('mainThemeTypes', 'secondary', 2),
    startWeekOn: {
      description: 'The day the week starts on.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    externalData: {
      description: 'The external months with days.',
      control: {
        type: 'object',
      },
    },
    dateSelectHandler: {
      description: 'The function that handles the date selection',
      control: {
        type: 'function',
      },
    },
    monthYearInView: {
      description: 'The month and year in view',
      control: {
        type: 'object',
      },
      table: {
        defaultValue: { summary: { year: new Date().getFullYear(), month: new Date().getMonth() } },
      },
    },
    disabledDateSetting: {
      description: 'The disabled date settings',
      control: {
        type: 'object',
      },
    },
    yearSelector: {
      description: 'The year selector settings',
      control: {
        type: 'object',
      },
    },
  },
} satisfies Meta<typeof FancyDatePicker>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyDatePicker {...args} />,
  args: {
    rangeCalendar: false,
    monthYearInView: {
      year: new Date().getFullYear(),
      month: new Date().getMonth(),
    },
    themeType: 'primary',
    layer: 2,
    externalData: {
      2023: [
        {
          monthIdx: 0,
          dates: [
            {
              date: 1,
              isAvilable: 'partially',
            },
            {
              date: 2,
              isAvilable: 'not',
            },
            {
              date: 3,
              isAvilable: 'transparent',
            },
          ],
        },
        {
          monthIdx: 11,
          dates: [
            {
              date: 5,
              isAvilable: 'partially',
            },
            {
              date: 7,
              isAvilable: 'not',
            },
            {
              date: 2,
              isAvilable: 'transparent',
            },
          ],
        },
      ],
    },
    disabledDateSetting: {
      disabledWeekdays: [1, 6],
      disableWeekends: true,
      disablePastDates: false,
    },
    yearSelector: {
      ariaTextLeftArrow: 'go one year back',
      ariaTextRightArrow: 'go one year forward',
    },
    startWeekOn: 1,
  },
};
