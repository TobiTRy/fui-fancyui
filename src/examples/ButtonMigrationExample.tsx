import React from 'react';
import { Button } from '@/components/molecules/Button';
import TailwindButton from '@/components/atoms/TailwindButton/TailwindButton';

/**
 * Example showcasing the migration from styled-components to Tailwind CSS
 *
 * This component demonstrates side-by-side comparison of:
 * 1. Original styled-components Button
 * 2. New Tailwind-based TailwindButton
 *
 * Both should render identically, proving the migration maintains visual consistency.
 */
export default function ButtonMigrationExample() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-2xl font-bold mb-6">Button Migration: Styled Components → Tailwind CSS</h1>

      {/* Primary Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Primary Buttons</h2>
        <div className="flex gap-4 items-center">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Styled Components</p>
            <Button themeType="primary" sizeC="md">
              Primary Button
            </Button>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Tailwind CSS</p>
            <TailwindButton $themeType="primary" $sizeC="md">
              Primary Button
            </TailwindButton>
          </div>
        </div>
      </section>

      {/* Outlined Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Outlined Buttons</h2>
        <div className="flex gap-4 items-center">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Styled Components</p>
            <Button themeType="accent" sizeC="md" outlined>
              Outlined Button
            </Button>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Tailwind CSS</p>
            <TailwindButton $themeType="accent" $sizeC="md" $outlined>
              Outlined Button
            </TailwindButton>
          </div>
        </div>
      </section>

      {/* Different Sizes */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Button Sizes</h2>
        <div className="space-y-4">
          {(['xs', 'sm', 'md', 'lg', 'xl'] as const).map((size) => (
            <div key={size} className="flex gap-4 items-center">
              <div className="w-32">
                <p className="text-sm text-gray-600">Size: {size}</p>
              </div>
              <div className="space-x-4">
                <Button themeType="info" sizeC={size}>
                  Styled {size}
                </Button>
                <TailwindButton $themeType="info" $sizeC={size}>
                  Tailwind {size}
                </TailwindButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Color Variants */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Color Variants</h2>
        <div className="space-y-4">
          {(['primary', 'accent', 'secondary', 'info', 'success', 'warning', 'error'] as const).map((color) => (
            <div key={color} className="flex gap-4 items-center">
              <div className="w-32">
                <p className="text-sm text-gray-600 capitalize">{color}</p>
              </div>
              <div className="space-x-4">
                <Button themeType={color} sizeC="md">
                  Styled
                </Button>
                <TailwindButton $themeType={color} $sizeC="md">
                  Tailwind
                </TailwindButton>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Wide Buttons */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Wide Buttons</h2>
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Styled Components (wide)</p>
            <Button themeType="success" sizeC="md" wide>
              Wide Styled Button
            </Button>
          </div>
          <div className="space-y-2">
            <p className="text-sm text-gray-600">Tailwind CSS (wide)</p>
            <TailwindButton $themeType="success" $sizeC="md" $wide>
              Wide Tailwind Button
            </TailwindButton>
          </div>
        </div>
      </section>

      {/* Migration Notes */}
      <section className="mt-12 p-6 bg-gray-50 rounded-lg">
        <h2 className="text-xl font-semibold mb-4">Migration Notes</h2>
        <ul className="space-y-2 text-sm">
          <li>
            • <strong>Prop Mapping:</strong> Styled-components props like <code>themeType</code> become{' '}
            <code>$themeType</code>
          </li>
          <li>
            • <strong>Theme Consistency:</strong> Colors and sizing remain identical through Tailwind config mapping
          </li>
          <li>
            • <strong>Performance:</strong> Tailwind reduces bundle size by eliminating styled-components runtime
          </li>
          <li>
            • <strong>Developer Experience:</strong> Utilities provide better IntelliSense and debugging
          </li>
          <li>
            • <strong>Gradual Migration:</strong> Both approaches can coexist during transition period
          </li>
        </ul>
      </section>
    </div>
  );
}
