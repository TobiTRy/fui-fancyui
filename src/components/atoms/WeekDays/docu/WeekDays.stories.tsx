// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import WeekDays from '../WeekDays';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: WeekDays,
  title: 'components/atoms/WeekDays',
  parameters: {
    docs: {
      description: {
        component:
          'The `WeekDays` component is a React component designed to display a list of weekdays, from Monday to Sunday, customizable in terms of starting day, theme, border style, and size. It`s a part of a larger design system, ideal for calendar interfaces or any application needing to display week days dynamically.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 0),
    sizeC: {
      description: 'The size of the week days',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: 'md',
      },
    },
    border: {
      description: 'Determines the placement of a border line, if any.',
      control: {
        type: 'select',
      },
      options: ['none', 'top', 'bottom', undefined],
      defaultValue: {
        summary: 'bottom',
      },
    },
    startWeekOn: {
      description: 'Specifies the day the week starts on (0 for Sunday, 1 for Monday, etc.)',
      control: {
        type: 'select',
      },
      defaultValue: {
        summary: '1',
      },
    },
  },
} satisfies Meta<typeof WeekDays>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <WeekDays {...args} />,
  args: {
    sizeC: 'md',
    border: 'bottom',
    startWeekOn: 1,
    themeType: 'secondary',
    layer: 0,
  },
};
