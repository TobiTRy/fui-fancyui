// - **XXS (Extra Extra Small)**
//   - **Padding/Margin**: 4px (0.5x base unit)
//   - **Font Size**: 10px or 12px
//   - **Element Size**: 16px (e.g., small icons)

// - **XS (Extra Small)**
//   - **Padding/Margin**: 8px (1x base unit)
//   - **Font Size**: 12px or 14px
//   - **Element Size**: 24px (e.g., small buttons)

// - **S (Small)**
//   - **Padding/Margin**: 12px (1.5x base unit)
//   - **Font Size**: 14px or 16px
//   - **Element Size**: 32px (e.g., input fields)

// - **M (Medium)**
//   - **Padding/Margin**: 16px (2x base unit)
//   - **Font Size**: 16px or 18px
//   - **Element Size**: 40px (e.g., default buttons)

// - **L (Large)**
//   - **Padding/Margin**: 24px (3x base unit)
//   - **Font Size**: 18px or 20px
//   - **Element Size**: 48px (e.g., large buttons, spacious input fields)

// - **XL (Extra Large)**
//   - **Padding/Margin**: 32px (4x base unit)
//   - **Font Size**: 20px or 24px
//   - **Element Size**: 56px or more (e.g., primary call-to-action buttons)

// - **XXL (Extra Extra Large)**
//   - **Padding/Margin**: 40px (5x base unit)
//   - **Font Size**: 24px or larger
//   - **Element Size**: 64px or more (e.g., major screen elements, large icons)

export const globalSizes = {
  xxs: {
    padding: '4px',
    fontSize: '10px',
    elementSize: '16px',
  },
  xs: {
    padding: '8px',
    fontSize: '12px',
    elementSize: '24px',
  },
  sm: {
    padding: '12px',
    fontSize: '14px',
    elementSize: '32px',
  },
  md: {
    padding: '16px',
    fontSize: '16px',
    elementSize: '40px',
  },
  lg: {
    padding: '24px',
    fontSize: '18px',
    elementSize: '48px',
  },
  xl: {
    padding: '32px',
    fontSize: '20px',
    elementSize: '56px',
  },
  xxl: {
    padding: '40px',
    fontSize: '24px',
    elementSize: '64px',
  },
};

export const globalElementsizes = {
  xxs: globalSizes.xxs.elementSize,
  xs: globalSizes.xs.elementSize,
  sm: globalSizes.sm.elementSize,
  md: globalSizes.md.elementSize,
  lg: globalSizes.lg.elementSize,
  xl: globalSizes.xl.elementSize,
  xxl: globalSizes.xxl.elementSize,
};

























