import { describe, it, expect } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import DescriptionPreview from './DescriptionPreview';
import MockThemeProvider from '@/test/MockThemeProvider';
import '@testing-library/jest-dom/vitest';


describe('DescriptionPreview', () => {
  it('should render initial truncated preview text and "Show more" button', () => {
    render(
      <MockThemeProvider>
        <DescriptionPreview description="Long test description here to exceed the limit" text={mockData.text} letterLimit={40} />
      </MockThemeProvider>
    );
    expect(screen.getByText('Show more')).toBeInTheDocument();
    expect(screen.getByText(/Long test description here to exceed the.../)).toBeInTheDocument();
  });

  it('should show full description and "Show less" button when "Show more" is clicked', () => {
    render(
      <MockThemeProvider>
        <DescriptionPreview description="Long test description here to exceed the limit" text={mockData.text} letterLimit={10} />
      </MockThemeProvider>
    );
    fireEvent.click(screen.getByText('Show more'));
    expect(screen.getByText('Show less')).toBeInTheDocument();
    expect(screen.getByText(/Long test description here to exceed the limit/)).toBeInTheDocument();
  });

  it('should handle custom text for buttons', () => {
    const description = 'x'.repeat(160);
    const customText = { showMore: 'Expand', showLess: 'Collapse' };
    render(
      <MockThemeProvider>
        <DescriptionPreview description={description}  text={customText} />
      </MockThemeProvider>
    );
    expect(screen.getByText('Expand')).toBeInTheDocument();
  });

  it('should not show "Show more" for short descriptions', () => {
    render(
      <MockThemeProvider>
        <DescriptionPreview description="Short" text={mockData.text} letterLimit={150} />
      </MockThemeProvider>
    );
    expect(screen.queryByText('Show more')).not.toBeInTheDocument();
    expect(screen.queryByText('Show less')).not.toBeInTheDocument();
  });

  it('should handle description exactly at the limit', () => {
    const description = 'x'.repeat(149);
    render(
      <MockThemeProvider>
        <DescriptionPreview description={description} text={mockData.text} letterLimit={150} />
      </MockThemeProvider>
    );
    expect(screen.queryByText('Show more')).toBeNull()
  });

  it('should handle different letter limits', () => {
    const description = 'x'.repeat(100);
    render(
      <MockThemeProvider>
        <DescriptionPreview description={description} text={mockData.text} letterLimit={50} />
      </MockThemeProvider>
    );
    expect(screen.getByText('Show more')).toBeInTheDocument();
  });

});


const mockData = {
  text: {
    showMore: 'Show more',
    showLess: 'Show less',
  },
};
