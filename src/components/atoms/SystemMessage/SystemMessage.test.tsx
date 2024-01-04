import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import 'jest-styled-components';
import renderer from 'react-test-renderer';

import MockThemeProvider from '@/test/MockThemeProvider';
import { SystemMessage } from '@/components/atoms/SystemMessage';
import { themeStore } from '@/design/theme/themeStore';

describe('<SystemMessage />', () => {
  it('renders the component with text', () => {
    const { getByText } = render(
      <MockThemeProvider>
        <SystemMessage systemMessageState="error">Error message</SystemMessage>
      </MockThemeProvider>
    );
    expect(getByText('Error message')).toBeInTheDocument();
  });

  it('applies correct style for error state', () => {
    const errorColor = themeStore.getState().theme.colors.error[0];
    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageState="error">Submit</SystemMessage>
        </MockThemeProvider>
      )

      .toJSON();
    expect(tree).toHaveStyleRule('color', errorColor);
  });
  it('applies correct style for success state', () => {
    const successColor = themeStore.getState().theme.colors.success[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageState="success">Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', successColor);
  });
  it('applies correct style for info state', () => {
    const infoColor = themeStore.getState().theme.colors.info[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageState="info">Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', infoColor);
  });
  it('applies correct style for warning state', () => {
    const warningColor = themeStore.getState().theme.colors.warning[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageState="warning">Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', warningColor);
  });
  it('applies correct style for fallback state', () => {
    const secondaryColor = themeStore.getState().theme.colors.secondary[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage>Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', secondaryColor);
  });
});
