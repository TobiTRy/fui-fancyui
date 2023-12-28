import { describe, it } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/react';
import DescriptionPreview from './DescriptionPreview';
import MockThemeProvider from '@/test/MockThemeProvider';


describe('DescriptionPreview', () => {
  it('should render initial preview text and "Show more" button', () => {
    render(
      <MockThemeProvider>
        <DescriptionPreview description="Test description here" />
      </MockThemeProvider>
    );
  });

  it('should show full description and "Show less" button when clicked', () => {
    render(
      <MockThemeProvider>
        <DescriptionPreview description="Test description here" />
      </MockThemeProvider>
    );
    fireEvent.click(screen.getByText('Show more'));
  });

  it('should handle custom text for buttons', () => {
    const customText = { showMore: 'Expand', showLess: 'Collapse' };
    render(
      <MockThemeProvider>
        <DescriptionPreview description="Test description" text={customText} />
      </MockThemeProvider>
    );
  });
});
