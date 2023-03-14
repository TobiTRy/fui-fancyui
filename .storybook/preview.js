export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: '',
    values: [
      {
        name: 'dark',
        value: '#282c34',
      },

    ],
  },
}