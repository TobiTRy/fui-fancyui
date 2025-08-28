import React, { useState } from 'react';
import { FancySearchSelect } from '@/components/organisms/FancySearchSelect';
import { TSearchSelectItem } from '@/components/organisms/FancySearchSelect/FancySearchSelect.model';

// Sample data for demonstration
const sampleItems: TSearchSelectItem[] = [
  {
    id: 1,
    title: 'John Doe',
    description: 'Software Engineer at TechCorp',
    icon: <span>👨‍💻</span>,
  },
  {
    id: 2,
    title: 'Jane Smith',
    description: 'Product Manager at InnovateCo',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b29c?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 3,
    title: 'Alice Brown',
    description: 'UI/UX Designer at CreativeStudio',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 4,
    title: 'Bob Wilson',
    description: 'DevOps Engineer at CloudTech',
    icon: <span>⚙️</span>,
  },
  {
    id: 5,
    title: 'Charlie Green',
    description: 'Data Scientist at DataCorp',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 6,
    title: 'Diana White',
    description: 'Marketing Specialist at BrandWorks',
    icon: <span>📢</span>,
  },
  {
    id: 7,
    title: 'Michael Johnson',
    // No description - should work fine
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
  },
  {
    id: 8,
    title: 'Sarah Wilson',
    // Just title, no image or description
  },
];

/**
 * Example component demonstrating FancySearchSelect usage
 */
export default function FancySearchSelectExample() {
  const [selectedValue, setSelectedValue] = useState('');
  const [selectedItem, setSelectedItem] = useState<TSearchSelectItem | null>(null);

  const handleSelect = (item: TSearchSelectItem) => {
    setSelectedItem(item);
    console.log('Selected item:', item);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(e.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px' }}>
      <h2>FancySearchSelect Examples</h2>

      <div style={{ marginBottom: '30px' }}>
        <h3>Basic Search Select (Span Layout)</h3>
        <FancySearchSelect
          items={sampleItems}
          onSelect={handleSelect}
          value={selectedValue}
          onChange={handleChange}
          placeholder="Search for a person..."
          label="Select Person"
          themeType="primary"
          itemLayoutMode="span"
        />
        {selectedItem && (
          <div style={{ marginTop: '10px', padding: '10px', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
            <strong>Selected:</strong> {selectedItem.title} - {selectedItem.description}
          </div>
        )}
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Normal Layout Mode</h3>
        <FancySearchSelect
          items={sampleItems}
          onSelect={handleSelect}
          placeholder="Normal 2x2 grid layout..."
          label="Normal Layout"
          itemLayoutMode="normal"
          themeType="secondary"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Row Layout Mode</h3>
        <FancySearchSelect
          items={sampleItems}
          onSelect={handleSelect}
          placeholder="Horizontal row layout..."
          label="Row Layout"
          itemLayoutMode="row"
          themeType="secondary"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Search Select with Open on Focus</h3>
        <FancySearchSelect
          items={sampleItems}
          onSelect={handleSelect}
          placeholder="Click to see all options..."
          label="Open on Focus"
          openOnFocus={true}
          themeType="secondary"
          maxHeight="150px"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Search Select with Clear on Select</h3>
        <FancySearchSelect
          items={sampleItems}
          onSelect={handleSelect}
          placeholder="Search and clear on select..."
          label="Clear on Select"
          clearOnSelect={true}
          themeType="primary"
        />
      </div>

      <div style={{ marginBottom: '30px' }}>
        <h3>Custom Filter Function</h3>
        <FancySearchSelect
          items={sampleItems}
          onSelect={handleSelect}
          placeholder="Search by title only..."
          label="Title Only Search"
          filterFunction={(items, searchValue) =>
            items.filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          }
          themeType="secondary"
        />
      </div>
    </div>
  );
}
