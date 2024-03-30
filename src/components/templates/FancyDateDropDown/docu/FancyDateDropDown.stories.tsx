import { Meta, StoryObj } from '@storybook/react';

import FancyDateDropDown from '../FancyDateDropDown';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: FancyDateDropDown,
  title: 'components/templates/FancyDateDropDown',
  parameters: {
    docs: {
      description: {
        component:
          '`FancyDateDropDown` is a component designed for selecting a specific date part: year, month, or day. It leverages a custom dropdown selector (`FancyDropDownSelect`) to provide a user-friendly interface for date selection within specified limits.',
      },
    },
  },
  argTypes: {
    label: {
      description: 'Label for the input',
      control: {
        type: 'text',
      },
    },
    placeholder: {
      description: 'Placeholder for the input',
      control: {
        type: 'text',
      },
    },
    disabled: {
      description: 'Disable the input',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: false },
      },
    },
    align: {
      description: 'Alignment of the label',
      control: {
        type: 'radio',
      },
    },
    ...templateThemeType('mainThemeTypes', 'primary', 2),
    systemMessage: {
      description: 'Systemmessage to be displayed',
      control: {
        type: 'object',
      },
    },
    value: {
      description: 'The picked value of the dropdown',
      control: {
        type: 'text',
      },
    },
    emptySelect: {
      description: 'A Empty Item that is selectable',
      control: {
        type: 'boolean',
      },
      table: {
        defaultValue: { summary: true },
      },
    },
    transparentBackground: {
      description: 'Transparent Background',
      control: {
        type: 'boolean',
      },
    },
    type: {
      description: 'The type of the dropdown',
      control: {
        type: 'radio',
      },
      table: {
        defaultValue: { summary: 'year' },
      },
    },
  },
} satisfies Meta<typeof FancyDateDropDown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <FancyDateDropDown {...args} />,
  args: {
    type: 'year',
    layer: 2,
    label: 'Date',
    themeType: 'primary',
    value: '2021',
    emptySelect: true,
    disabled: false,
    transparentBackground: false,
  },
};

export const Month: Story = {
  render: (args) => <FancyDateDropDown {...args} />,
  args: {
    type: 'month',
    layer: 2,
    label: 'Date',
    themeType: 'primary',
    value: 'January',
    emptySelect: true,
    disabled: false,
    transparentBackground: false,
  },
};

export const Day: Story = {
  render: (args) => <FancyDateDropDown {...args} />,
  args: {
    type: 'day',
    layer: 2,
    label: 'Date',
    themeType: 'primary',
    value: '1',
    emptySelect: true,
    disabled: false,
    transparentBackground: false,
  },
};

export const EmptySelect: Story = {
  render: (args) => <FancyDateDropDown {...args} />,
  args: {
    type: 'year',
    layer: 2,
    label: 'Date',
    themeType: 'primary',
    value: '2021',
    emptySelect: true,
    disabled: false,
    transparentBackground: false,
  },
};

export const WithDateLimits: Story = {
  render: (args) => <FancyDateDropDown {...args} />,
  args: {
    type: 'year',
    layer: 2,
    label: 'Date',
    themeType: 'primary',
    value: '2021',
    emptySelect: false,
    disabled: false,
    transparentBackground: false,
    dateLimits: [2000, 2025],
  },
};
