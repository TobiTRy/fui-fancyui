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
        <SystemMessage systemMessageType="error">Error message</SystemMessage>
      </MockThemeProvider>
    );
    expect(getByText('Error message')).toBeInTheDocument();
  });

  it('applies correct style for error state', () => {
    const errorColor = themeStore.getState().theme.color.error[0];
    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageType="error">Submit</SystemMessage>
        </MockThemeProvider>
      )

      .toJSON();
    expect(tree).toHaveStyleRule('color', errorColor);
  });
  it('applies correct style for success state', () => {
    const successColor = themeStore.getState().theme.color.success[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageType="success">Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', successColor);
  });
  it('applies correct style for info state', () => {
    const infoColor = themeStore.getState().theme.color.info[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageType="info">Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', infoColor);
  });
  it('applies correct style for warning state', () => {
    const warningColor = themeStore.getState().theme.color.warning[0];

    const tree = renderer
      .create(
        <MockThemeProvider>
          <SystemMessage systemMessageType="warning">Submit</SystemMessage>
        </MockThemeProvider>
      )
      .toJSON();
    expect(tree).toHaveStyleRule('color', warningColor);
  });
  it('applies correct style for fallback state', () => {
    const secondaryColor = themeStore.getState().theme.color.secondary[0];

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
