import type { Meta, StoryObj } from '@storybook/react';

import SearchBar from '../SearchBar';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

const meta = {
  component: SearchBar,
  title: 'components/molecules/SearchBar',
  parameters: {
    docs: {
      description: {
        component:
          'The `SearchBar` component is a flexible and customizable search input designed for integration into header sections or any part of a UI where search functionality is required. It builds on the `FancyTextInput` organism from the application´s component library, enhancing it with search-specific features such as an optional search icon, active state handling, and customizable theming, alignment, and sizing. The component encapsulates best practices for search input design, ensuring a user-friendly experience.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('mainThemeTypes', 'primary', 4),
    searchValue: {
      description: 'The value of the search bar.',
      type: { name: 'string' },
    },
    align: {
      description: 'The alignment of the text.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'center' },
      },
    },
    placerholder: {
      description: 'The placeholder of the search bar.',
      type: { name: 'string' },
      table: {
        defaultValue: { summary: 'Search' },
      },
    },
    sizeC: {
      description: 'The size of the search bar.',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'sm' },
      },
    },
  },
} satisfies Meta<typeof SearchBar>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <SearchBar {...args} />,
  args: {
    searchValue: '',
    align: 'center',
    placerholder: 'Search',
    sizeC: 'sm',
  },
};
