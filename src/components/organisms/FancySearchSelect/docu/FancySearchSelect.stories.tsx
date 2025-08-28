import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import FancySearchSelect from '../FancySearchSelect';
import { TSearchSelectItem } from '../FancySearchSelect.model';

// Sample data for stories
const basicItems: TSearchSelectItem[] = [
  {
    id: '1',
    title: 'Apple',
    description: 'A red or green fruit',
  },
  {
    id: '2',
    title: 'Banana',
    description: 'A yellow tropical fruit',
  },
  {
    id: '3',
    title: 'Cherry',
    description: 'A small red stone fruit',
  },
  {
    id: '4',
    title: 'Date',
    description: 'A sweet brown fruit from palm trees',
  },
  {
    id: '5',
    title: 'Elderberry',
    description: 'A dark purple berry used in jams',
  },
];

const itemsWithIcons: TSearchSelectItem[] = [
  {
    id: 'home',
    title: 'Home',
    description: 'Go to homepage',
    icon: '🏠',
  },
  {
    id: 'profile',
    title: 'Profile',
    description: 'View your profile',
    icon: '👤',
  },
  {
    id: 'settings',
    title: 'Settings',
    description: 'Manage your preferences',
    icon: '⚙️',
  },
  {
    id: 'help',
    title: 'Help',
    description: 'Get support and documentation',
    icon: '❓',
  },
];

const userItems: TSearchSelectItem[] = [
  {
    id: 'user1',
    title: 'John Doe',
    description: 'Senior Frontend Developer',
    icon: '👨‍💻',
  },
  {
    id: 'user2',
    title: 'Jane Smith',
    description: 'Product Manager',
    icon: '👩‍💼',
  },
  {
    id: 'user3',
    title: 'Alex Johnson',
    description: 'UX Designer',
    icon: '🎨',
  },
  {
    id: 'user4',
    title: 'Maria Garcia',
    description: 'Backend Developer',
    icon: '👩‍💻',
  },
];

const meta: Meta<typeof FancySearchSelect> = {
  title: 'components/organisms/FancySearchSelect',
  component: FancySearchSelect,
  parameters: {
    docs: {
      description: {
        component: `
The FancySearchSelect component is a powerful and flexible search and select interface that combines sophisticated filtering capabilities with intuitive navigation. It provides a seamless user experience through both keyboard and mouse interactions, making it ideal for creating searchable dropdowns, autocomplete fields, and advanced selection interfaces.

**Philosophy**: This component embodies the principle of progressive disclosure - starting simple but scaling to handle complex requirements. Whether you need a basic searchable dropdown or an advanced multi-modal selection interface, FancySearchSelect adapts to your needs while maintaining consistent behavior and accessibility standards.

**Key Capabilities**:
- Advanced search filtering with customizable filter functions
- Intelligent navigation system that switches between mouse and keyboard modes
- Multiple item layout options to fit different content types
- Comprehensive keyboard shortcuts and accessibility features  
- Deep integration with the design system for consistent theming
- Flexible behavior options like open-on-focus and clear-on-select
- Type-safe TypeScript implementation with comprehensive prop interfaces

The component is designed to handle real-world scenarios like user selection, location picking, product search, and any other use case requiring searchable selection from a list of options. Its sophisticated state management ensures smooth interactions even with large datasets and complex filtering requirements.
        `,
      },
    },
  },
  argTypes: {
    // Core functionality
    items: {
      description: 'Array of selectable items with id, title, description, and optional icon/image',
      control: { type: 'object' },
    },
    onSelect: {
      description: 'Callback function called when an item is selected',
      control: false,
    },
    filterFunction: {
      description:
        'Custom function to filter items based on search value. If not provided, uses default title/description matching',
      control: false,
    },

    // Display options
    noItemsText: {
      description: 'Text displayed when no items match the search criteria',
      control: { type: 'text' },
    },
    maxHeight: {
      description: 'Maximum height of the dropdown list (CSS value)',
      control: { type: 'text' },
    },
    itemLayoutMode: {
      description: 'Layout mode for item content: normal (2x2 grid), span (icon spans rows), row (horizontal)',
      control: { type: 'select' },
      options: ['normal', 'span', 'row'],
    },

    // Behavior options
    openOnFocus: {
      description: 'Whether to show all items when input is focused, even without search text',
      control: { type: 'boolean' },
    },
    clearOnSelect: {
      description: 'Whether to clear the input field after selecting an item',
      control: { type: 'boolean' },
    },

    // Inherited from FancyTextInput
    placeholder: {
      description: 'Placeholder text for the search input',
      control: { type: 'text' },
    },
    value: {
      description: 'Controlled value of the search input',
      control: { type: 'text' },
    },
    onChange: {
      description: 'Callback for input value changes (controlled mode)',
      control: false,
    },
    onFocus: {
      description: 'Callback when input receives focus',
      control: false,
    },
    onBlur: {
      description: 'Callback when input loses focus',
      control: false,
    },
    disabled: {
      description: 'Whether the input is disabled',
      control: { type: 'boolean' },
    },

    // Theme and styling
    themeType: {
      description: 'Theme color type for styling',
      control: { type: 'select' },
      options: ['primary', 'secondary'],
    },
    layer: {
      description: 'Visual layer depth for z-index and styling hierarchy',
      control: { type: 'number', min: 0, max: 10 },
    },
  },
  args: {
    items: basicItems,
    placeholder: 'Search items...',
    noItemsText: 'No items found',
    maxHeight: '200px',
    openOnFocus: false,
    clearOnSelect: false,
    itemLayoutMode: 'span',
    themeType: 'primary',
    layer: 2,
    disabled: false,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

/**
 * Basic implementation showing simple search and select functionality
 */
export const Basic: Story = {
  args: {
    items: basicItems,
    placeholder: 'Search fruits...',
    onSelect: (item: TSearchSelectItem) => console.log('Selected:', item),
  },
};

/**
 * Items with icons demonstrating visual enhancement capabilities
 */
export const WithIcons: Story = {
  args: {
    items: itemsWithIcons,
    placeholder: 'Search navigation...',
    itemLayoutMode: 'span',
    onSelect: (item: TSearchSelectItem) => console.log('Selected:', item),
  },
};

/**
 * Custom filter function for advanced search logic
 */
export const CustomFilter: Story = {
  args: {
    items: userItems,
    placeholder: 'Search users by name or role...',
    filterFunction: (items: TSearchSelectItem[], searchValue: string) => {
      const search = searchValue.toLowerCase();
      return items.filter(
        (item: TSearchSelectItem) =>
          item.title.toLowerCase().includes(search) ||
          item.description?.toLowerCase().includes(search) ||
          // Custom: also search by role-specific keywords
          (item.description?.toLowerCase().includes('developer') && search.includes('dev')) ||
          (item.description?.toLowerCase().includes('manager') && search.includes('pm'))
      );
    },
    onSelect: (item: TSearchSelectItem) => console.log('Selected user:', item),
  },
};

/**
 * Different layout modes for item display
 */
export const LayoutModes: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      <div>
        <h4>Normal Layout</h4>
        <FancySearchSelect {...args} items={itemsWithIcons} itemLayoutMode="normal" placeholder="Normal layout..." />
      </div>
      <div>
        <h4>Span Layout (Default)</h4>
        <FancySearchSelect {...args} items={itemsWithIcons} itemLayoutMode="span" placeholder="Span layout..." />
      </div>
      <div>
        <h4>Row Layout</h4>
        <FancySearchSelect {...args} items={itemsWithIcons} itemLayoutMode="row" placeholder="Row layout..." />
      </div>
    </div>
  ),
  args: {
    items: itemsWithIcons,
    onSelect: (item: TSearchSelectItem) => console.log('Selected:', item),
  },
  parameters: {
    controls: { exclude: ['itemLayoutMode'] },
  },
};

/**
 * Open on focus behavior showing all items when focused
 */
export const OpenOnFocus: Story = {
  args: {
    items: basicItems,
    placeholder: 'Click to see all options...',
    openOnFocus: true,
    onSelect: (item: TSearchSelectItem) => console.log('Selected:', item),
  },
};

/**
 * Clear on select behavior for multi-selection workflows
 */
export const ClearOnSelect: Story = {
  args: {
    items: userItems,
    placeholder: 'Select users (clears after each selection)...',
    clearOnSelect: true,
    openOnFocus: true,
    onSelect: (item: TSearchSelectItem) => {
      console.log('Selected and cleared:', item);
      // In real implementation, you might add to a separate list
    },
  },
};

/**
 * Controlled value example for form integration
 */
export const Controlled: Story = {
  render: (args) => {
    const [value, setValue] = React.useState('');
    const [selectedItems, setSelectedItems] = React.useState<TSearchSelectItem[]>([]);

    return (
      <div>
        <FancySearchSelect
          {...args}
          items={basicItems}
          value={value}
          onChange={(e) => {
            const target = e.target as HTMLInputElement;
            setValue(target.value);
          }}
          onSelect={(item: TSearchSelectItem) => {
            console.log('Selected:', item);
            setSelectedItems((prev) => [...prev, item]);
            setValue(''); // Clear for next selection
          }}
        />
        {selectedItems.length > 0 && (
          <div style={{ marginTop: '10px' }}>
            <strong>Selected items:</strong>
            <ul>
              {selectedItems.map((item) => (
                <li key={item.id}>{item.title}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );
  },
  args: {
    items: basicItems,
    placeholder: 'Controlled search...',
    openOnFocus: true,
  },
  parameters: {
    controls: { exclude: ['value', 'onChange', 'onSelect'] },
  },
};

/**
 * Theme variations showing different color schemes
 */
export const ThemeVariations: Story = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '20px', flexDirection: 'column' }}>
      {(['primary', 'secondary'] as const).map((theme) => (
        <div key={theme}>
          <h4 style={{ textTransform: 'capitalize' }}>{theme} Theme</h4>
          <FancySearchSelect
            {...args}
            items={basicItems.slice(0, 3)}
            themeType={theme}
            placeholder={`${theme} theme...`}
          />
        </div>
      ))}
    </div>
  ),
  args: {
    items: basicItems.slice(0, 3), // Fewer items for cleaner demo
    onSelect: (item: TSearchSelectItem) => console.log('Selected:', item),
  },
  parameters: {
    controls: { exclude: ['themeType'] },
  },
};

/**
 * Large dataset example with performance considerations
 */
export const LargeDataset: Story = {
  args: {
    items: Array.from({ length: 100 }, (_, i) => ({
      id: `item-${i}`,
      title: `Item ${i + 1}`,
      description: `Description for item number ${i + 1}`,
      icon: i % 2 === 0 ? '📊' : '📈',
    })),
    placeholder: 'Search through 100 items...',
    maxHeight: '300px',
    onSelect: (item: TSearchSelectItem) => console.log('Selected from large dataset:', item),
  },
};

/**
 * Disabled state for form scenarios
 */
export const Disabled: Story = {
  args: {
    items: basicItems,
    placeholder: 'This input is disabled...',
    disabled: true,
    onSelect: (item: TSearchSelectItem) => console.log('Selected:', item),
  },
};
