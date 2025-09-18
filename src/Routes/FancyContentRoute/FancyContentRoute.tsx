import React from 'react';

import FancyContent from '../../components/molecules/FancyContent/FancyContent';
import FancyContentTw from '../../components/molecules/FancyContent/tailwind/FancyContentTw';
import { FancySVGAtom } from '../../components/atoms/FancySVGAtom';

import {
  SVGCheckMark,
  SVGSearch,
  SVGPlus,
  SVGCircleCheck,
  SVGInfoSign,
  SVGWarningSign,
  SVGFui,
  SVGStopSign,
} from '../../components/icons';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

export default function FancyContentRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="FancyContent - New Grid Layouts">
        <h3>Normal Layout (2x2 Grid)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="normal">
            <FancyContent.Icon sizeC="sm" themeType="primary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Success Title</FancyContent.Title>
            <FancyContent.Description sizeC="sm">
              This is a description in the normal 2x2 grid layout
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="normal">
            <FancyContent.Icon sizeC="md" themeType="secondary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">No Description</FancyContent.Title>
          </FancyContent>

          <FancyContent layoutMode="normal" alignIcon="right">
            <FancyContent.Icon sizeC="sm" themeType="accent">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Right-aligned Icon</FancyContent.Title>
            <FancyContent.Description sizeC="sm">Icon is now on the right side</FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="normal" alignIcon="right">
            <FancyContent.Icon sizeC="md" themeType="warning">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">Right Icon, No Description</FancyContent.Title>
          </FancyContent>
        </div>

        <h3>Stack Layout (Single Column)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="stack">
            <FancyContent.Icon sizeC="lg" themeType="accent">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="lg">Stacked Layout</FancyContent.Title>
            <FancyContent.Description sizeC="lg">
              Everything is stacked vertically in a single column
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="stack">
            <FancyContent.Icon sizeC="md" themeType="warning">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">Stack without Description</FancyContent.Title>
          </FancyContent>
        </div>

        <h3>Auto Layout (Smart Detection)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="auto">
            <FancyContent.Icon sizeC="sm" themeType="primary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Auto Layout</FancyContent.Title>
            <FancyContent.Description sizeC="sm">
              Auto mode chooses the best layout automatically
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="auto">
            <FancyContent.Title sizeC="md">No Icon Auto</FancyContent.Title>
            <FancyContent.Description sizeC="md">Layout without icon</FancyContent.Description>
          </FancyContent>
        </div>

        <h3>Inline Layout (Icon and Title Inline)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="inline">
            <FancyContent.Icon sizeC="sm" themeType="success">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Inline Layout</FancyContent.Title>
            <FancyContent.Description sizeC="sm">
              Icon and title are on the same line, description spans below
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="inline">
            <FancyContent.Icon sizeC="md" themeType="info">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">Inline without Description</FancyContent.Title>
          </FancyContent>

          <FancyContent layoutMode="inline" alignIcon="right">
            <FancyContent.Icon sizeC="sm" themeType="accent">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Right-aligned Inline</FancyContent.Title>
            <FancyContent.Description sizeC="sm">Icon aligned to the right</FancyContent.Description>
          </FancyContent>
        </div>

        <h3>Span Layout (Icon Spans Rows)</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
          <FancyContent layoutMode="span">
            <FancyContent.Icon sizeC="lg" themeType="warning">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Span Layout</FancyContent.Title>
            <FancyContent.Description sizeC="sm">
              Icon spans across both title and description rows vertically
            </FancyContent.Description>
          </FancyContent>

          <FancyContent layoutMode="span">
            <FancyContent.Icon sizeC="md" themeType="secondary">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="md">Span without Description</FancyContent.Title>
          </FancyContent>

          <FancyContent layoutMode="span" alignIcon="right">
            <FancyContent.Icon sizeC="lg" themeType="error">
              <SVGCheckMark />
            </FancyContent.Icon>
            <FancyContent.Title sizeC="sm">Right-aligned Span</FancyContent.Title>
            <FancyContent.Description sizeC="sm">Icon spans on the right side</FancyContent.Description>
          </FancyContent>
        </div>

        <h3>With Images</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <FancyContent layoutMode="normal">
            <FancyContent.Image sizeH="sm">
              <img src="https://via.placeholder.com/64" alt="placeholder" />
            </FancyContent.Image>
            <FancyContent.Title>Image + Title</FancyContent.Title>
          </FancyContent>

          <FancyContent layoutMode="stack">
            <FancyContent.Image sizeH="sm">
              <img src="https://via.placeholder.com/64" alt="placeholder" />
            </FancyContent.Image>
            <FancyContent.Title>Stacked Image</FancyContent.Title>
            <FancyContent.Description>With description below</FancyContent.Description>
          </FancyContent>
        </div>
      </DesignArea>

      <DesignArea title="FancyContentTw - New Architecture Overview">
        <div
          style={{ backgroundColor: '#f0f9ff', padding: '1.5rem', border: '1px solid #0ea5e9', borderRadius: '8px' }}
        >
          <h4 style={{ marginTop: 0, color: '#0c4a6e' }}>New Directory Structure</h4>
          <p style={{ marginBottom: '1rem' }}>
            Each layout component now has its own directory with separate style files following the
            HeaderNavigationWithTitle pattern:
          </p>
          <ul style={{ marginBottom: '1rem' }}>
            <li>
              <strong>Separation of Concerns:</strong> Each layout has its own directory with separate .tsx and
              .style.ts files
            </li>
            <li>
              <strong>Style Functions:</strong> All Tailwind classes generated by dedicated functions in .style.ts files
            </li>
            <li>
              <strong>Maintainability:</strong> Easy to modify styles without touching component logic
            </li>
            <li>
              <strong>Consistency:</strong> Follows HeaderNavigationWithTitle architecture pattern
            </li>
            <li>
              <strong>Type Safety:</strong> All TypeScript errors resolved with proper typing
            </li>
          </ul>

          <h4 style={{ color: '#0c4a6e' }}>Example Structure:</h4>
          <pre style={{ backgroundColor: '#f8fafc', padding: '0.5rem', borderRadius: '4px', fontSize: '0.875rem' }}>
            {`layouts/FancyContentStackTw/
├── FancyContentStackTw.tsx          # Component logic
├── FancyContentStackTw.style.ts     # Style functions  
└── index.ts                         # Export`}
          </pre>
        </div>
      </DesignArea>

      <DesignArea title="Stack Layout (FancyContentStackTw)">
        <div
          style={{
            backgroundColor: '#f8fafc',
            padding: '1rem',
            border: '1px solid #e2e8f0',
            borderRadius: '6px',
            marginBottom: '1rem',
          }}
        >
          <p>
            <strong>Vertical Stack Layout:</strong> All elements stacked vertically and center-aligned. Perfect for
            cards and hero sections.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="stack" wide={true} sizeC="md" gapBetweenIcon={3}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCircleCheck />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Stack Layout - Vertical Centering</FancyContentTw.Title>
              <FancyContentTw.Description>
                All elements stacked vertically and center-aligned. Perfect for cards and hero sections.
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="stack" wide={false} sizeC="lg" gapBetweenIcon={4}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGInfoSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Compact Stack (wide=false)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Stack layout with width fitting content instead of full width
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>
        </div>
      </DesignArea>

      <DesignArea title="Normal Layout (FancyContentNormalTw)">
        <div
          style={{
            backgroundColor: '#fef3f2',
            padding: '1rem',
            border: '1px solid #fecaca',
            borderRadius: '6px',
            marginBottom: '1rem',
          }}
        >
          <p>
            <strong>2x2 Grid Layout:</strong> Icon and title on first row, description spans full width below. Classic
            layout for notifications and alerts.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw
              layoutMode="normal"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapBetweenIcon={2}
              gapBetweenText={1}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGWarningSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Normal 2x2 Grid Layout</FancyContentTw.Title>
              <FancyContentTw.Description>
                Icon and title on first row, description spans full width below. Classic layout for notifications and
                alerts.
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="normal" alignIcon="right" wide={true} sizeC="md">
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGFui />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Right-aligned Icon</FancyContentTw.Title>
              <FancyContentTw.Description>
                Same grid layout but with icon positioned on the right side.
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>
        </div>
      </DesignArea>

      <DesignArea title="Span Layout (FancyContentSpanTw)">
        <div
          style={{
            backgroundColor: '#f0fdf4',
            padding: '1rem',
            border: '1px solid #bbf7d0',
            borderRadius: '6px',
            marginBottom: '1rem',
          }}
        >
          <p>
            <strong>Icon Spans Both Rows:</strong> Icon takes up the full height of both title and description,
            vertically centered. Perfect for feature lists and detailed content.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw
              layoutMode="span"
              alignIcon="left"
              wide={true}
              sizeC="lg"
              gapBetweenIcon={3}
              gapBetweenText={2}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGStopSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Span Layout - Icon Spans Both Rows</FancyContentTw.Title>
              <FancyContentTw.Description>
                Icon takes up the full height of both title and description, vertically centered. Perfect for feature
                lists and detailed content.
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="span" alignIcon="right" wide={true} sizeC="md" gapBetweenIcon={4}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCheckMark />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Right-aligned Span</FancyContentTw.Title>
              <FancyContentTw.Description>
                Span layout with icon on the right side, still spanning both text rows
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>
        </div>
      </DesignArea>

      <DesignArea title="Row Layout (FancyContentRowTw)">
        <div
          style={{
            backgroundColor: '#fefce8',
            padding: '1rem',
            border: '1px solid #fde047',
            borderRadius: '6px',
            marginBottom: '1rem',
          }}
        >
          <p>
            <strong>Horizontal Row:</strong> All elements arranged horizontally in a single row. Great for compact
            displays and navigation items.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="row" alignIcon="left" wide={true} sizeC="md" gapBetweenIcon={2}>
              <FancyContentTw.Icon>
                <FancySVGAtom>{SVGSearch}</FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Row Layout</FancyContentTw.Title>
              <FancyContentTw.Description>All elements in single horizontal row</FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="row" alignIcon="right" wide={false} sizeC="sm" gapBetweenIcon={1}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGPlus />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Compact Row</FancyContentTw.Title>
              <FancyContentTw.Description>Small, right-aligned</FancyContentTw.Description>
            </FancyContentTw>
          </div>
        </div>
      </DesignArea>

      <DesignArea title="Inline Layout (FancyContentInlineTw)">
        <div
          style={{
            backgroundColor: '#faf5ff',
            padding: '1rem',
            border: '1px solid #d8b4fe',
            borderRadius: '6px',
            marginBottom: '1rem',
          }}
        >
          <p>
            <strong>Icon + Title Inline:</strong> Icon and title on same line, description spans full width below. Great
            for compact lists and navigation items.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw
              layoutMode="inline"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapBetweenIcon={2}
              gapBetweenText={1}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCheckMark />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Inline Layout</FancyContentTw.Title>
              <FancyContentTw.Description>
                Icon and title on same line, description spans full width below. Great for compact lists and navigation
                items.
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="inline" alignIcon="right" wide={true} sizeC="lg" gapBetweenIcon={3}>
              <FancyContentTw.Icon>
                <FancySVGAtom>{SVGSearch}</FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Right-aligned Inline</FancyContentTw.Title>
              <FancyContentTw.Description>
                Large size with icon positioned on the right of the title
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>
        </div>
      </DesignArea>

      <DesignArea title="Size Variations - All Layouts">
        <div
          style={{
            backgroundColor: '#f1f5f9',
            padding: '1rem',
            border: '1px solid #cbd5e1',
            borderRadius: '6px',
            marginBottom: '1rem',
          }}
        >
          <p>
            <strong>Responsive Sizing:</strong> All components support sm, md, and lg sizes with properly scaled icons
            and text.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {(['sm', 'md', 'lg'] as const).map((size) => (
            <div key={size} style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
              <FancyContentTw layoutMode="normal" alignIcon="left" wide={true} sizeC={size} gapBetweenIcon={2}>
                <FancyContentTw.Icon>
                  <FancySVGAtom>
                    <SVGPlus />
                  </FancySVGAtom>
                </FancyContentTw.Icon>
                <FancyContentTw.Title>Size: {size.toUpperCase()}</FancyContentTw.Title>
                <FancyContentTw.Description>
                  This demonstrates the {size} size variant with properly scaled icons and text
                </FancyContentTw.Description>
              </FancyContentTw>
            </div>
          ))}
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
