# FancyContentTw - Tailwind CSS Version

This directory contains the new simplified Tailwind CSS version of FancyContent components. These components provide the same functionality as the original FancyContent but with much simpler implementation using Tailwind classes.

## Overview

- **Original FancyContent**: 250+ lines of complex styled-components CSS-in-JS
- **New FancyContentTw**: Separated into focused components, ~30-50 lines each

## Components

### Base Components
- `FancyContentIconTw` - Icon component with size-based styling
- `FancyContentTitleTw` - Title text component with typography scaling
- `FancyContentDescriptionTw` - Description text component

### Layout Components
- `FancyContentNormalTw` - 2x2 grid layout (icon + title top, description below)
- `FancyContentStackTw` - Vertical stack (icon → title → description)
- `FancyContentRowTw` - Horizontal row (icon | title | description)
- `FancyContentSpanTw` - Icon spans both title and description rows
- `FancyContentInlineTw` - Icon + title inline, description below

### Main Wrapper
- `FancyContentTw` - Smart wrapper that selects layout based on `layoutMode` prop

## Usage

### Basic Usage (same API as original)
```tsx
import { FancyContentTw } from 'fui-fancyui';

<FancyContentTw layoutMode="span" gapBetweenIcon={2}>
  <FancyContentTw.Icon>🎉</FancyContentTw.Icon>
  <FancyContentTw.Title>Success!</FancyContentTw.Title>
  <FancyContentTw.Description>Your action was completed</FancyContentTw.Description>
</FancyContentTw>
```

### Direct Layout Usage
```tsx
import { FancyContentSpanTw } from 'fui-fancyui';

<FancyContentSpanTw gapBetweenIcon={2}>
  <FancyContentSpanTw.Icon>🎉</FancyContentSpanTw.Icon>
  <FancyContentSpanTw.Title>Success!</FancyContentSpanTw.Title>
  <FancyContentSpanTw.Description>Your action was completed</FancyContentSpanTw.Description>
</FancyContentSpanTw>
```

## Props

### Layout Props
- `layoutMode` - 'normal' | 'stack' | 'row' | 'span' | 'inline' | 'auto'
- `gapBetweenIcon` - Gap between icon and text (Tailwind spacing scale 0-10)
- `gapBetweenText` - Gap between title and description (Tailwind spacing scale 0-10)
- `alignIcon` - 'left' | 'right'
- `sizeC` - Component size 'xs' | 'sm' | 'md' | 'lg' | 'xl'
- `wide` - Full width (default: true)

### Text Component Props
- `fontWeight` - 'normal' | 'medium' | 'semibold' | 'bold'
- `themeType` - Theme color type
- `layer` - Color layer (0-9)
- `className` - Additional CSS classes

## Benefits

✅ **Simpler Code** - Each layout component is 30-50 lines vs 250+ lines of CSS-in-JS
✅ **Better Performance** - Tailwind classes are pre-compiled and optimized
✅ **Easier Debugging** - Clear separation of concerns, visible in DevTools
✅ **Type Safety** - Full TypeScript support maintained
✅ **Backward Compatible** - Original FancyContent still works unchanged
✅ **Same API** - Familiar .Icon, .Title, .Description pattern maintained

## Migration Path

1. **Immediate**: Start using `FancyContentTw` in new components
2. **Gradual**: Update existing components when convenient
3. **Future**: Deprecate original in next major version

## File Structure

```
tailwind/
├── FancyContentTw.tsx (main wrapper)
├── types.ts (shared TypeScript definitions)
├── layouts/
│   ├── FancyContentNormalTw.tsx
│   ├── FancyContentStackTw.tsx
│   ├── FancyContentRowTw.tsx
│   ├── FancyContentSpanTw.tsx
│   └── FancyContentInlineTw.tsx
├── components/
│   ├── FancyContentIconTw.tsx
│   ├── FancyContentTitleTw.tsx
│   └── FancyContentDescriptionTw.tsx
└── README.md (this file)
```

## Exports

Both versions are exported from the main FancyContent index:

```tsx
// Original (backward compatibility)
import { FancyContent } from 'fui-fancyui';

// New Tailwind version
import { FancyContentTw, FancyContentSpanTw } from 'fui-fancyui';
```