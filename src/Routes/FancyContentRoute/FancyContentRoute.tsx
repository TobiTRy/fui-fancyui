import React from 'react';

import FancyContent from '../../components/molecules/FancyContent/FancyContent';
import FancyContentTw from '../../components/molecules/FancyContent/tailwind/FancyContentTw';
import { FancySVGAtom } from '../../components/atoms/FancySVGAtom';

import {
  SVGCheckMark,
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

      <DesignArea title="🎉 NEW: Layout-Specific Gap Props">
        <div
          style={{
            backgroundColor: '#fef3f2',
            padding: '1.5rem',
            border: '2px solid #f87171',
            borderRadius: '8px',
            marginBottom: '1.5rem',
          }}
        >
          <h4 style={{ marginTop: 0, color: '#dc2626' }}>❌ BEFORE: Generic & Confusing</h4>
          <p style={{ marginBottom: '1rem' }}>All layouts used the same generic props:</p>
          <div
            style={{
              backgroundColor: '#fecaca',
              padding: '1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
            }}
          >
            {`// 😕 What does gapBetweenIcon control in different layouts?
<FancyContentTw gapBetweenIcon={2} gapBetweenText={1}>
  // In Stack: gap between ALL elements?
  // In Normal: horizontal or vertical gap?
  // In Span: gap to what exactly?
  // In Row: same as gapBetweenText?
</FancyContentTw>`}
          </div>
        </div>

        <div
          style={{
            backgroundColor: '#f0fdf4',
            padding: '1.5rem',
            border: '2px solid #4ade80',
            borderRadius: '8px',
            marginBottom: '1.5rem',
          }}
        >
          <h4 style={{ marginTop: 0, color: '#16a34a' }}>✅ AFTER: Intuitive & Clear</h4>
          <p style={{ marginBottom: '1rem' }}>Each layout has meaningful, specific props:</p>
          <div
            style={{
              backgroundColor: '#bbf7d0',
              padding: '1rem',
              borderRadius: '6px',
              fontFamily: 'monospace',
              fontSize: '0.875rem',
            }}
          >
            {`// 🎯 Crystal clear what each prop controls!
<FancyContentStackTw gapIconTitle={3} gapTitleDescription={2} />
<FancyContentNormalTw gapIconTitle={2} gapTitleDescription={1} />
<FancyContentRowTw gapBetweenElements={3} />
<FancyContentSpanTw gapIconContent={4} gapTitleDescription={2} />
<FancyContentInlineTw gapIconTitle={2} gapTitleDescription={1} />`}
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1rem' }}>
          <div
            style={{ padding: '1rem', backgroundColor: '#eff6ff', border: '1px solid #60a5fa', borderRadius: '6px' }}
          >
            <h5 style={{ marginTop: 0, color: '#1d4ed8' }}>🔍 Better Intellisense</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>
              IDE autocomplete shows only relevant props for each layout
            </p>
          </div>
          <div
            style={{ padding: '1rem', backgroundColor: '#fef3f2', border: '1px solid #f87171', borderRadius: '6px' }}
          >
            <h5 style={{ marginTop: 0, color: '#dc2626' }}>🛡️ Type Safety</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>Each layout has its own TypeScript interface</p>
          </div>
          <div
            style={{ padding: '1rem', backgroundColor: '#f0fdf4', border: '1px solid #4ade80', borderRadius: '6px' }}
          >
            <h5 style={{ marginTop: 0, color: '#16a34a' }}>📚 Self-Documenting</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>Prop names clearly indicate their purpose</p>
          </div>
          <div
            style={{ padding: '1rem', backgroundColor: '#fef7e0', border: '1px solid #fbbf24', borderRadius: '6px' }}
          >
            <h5 style={{ marginTop: 0, color: '#d97706' }}>⚡ Independent Control</h5>
            <p style={{ margin: 0, fontSize: '0.875rem' }}>Fine-grained control over each spacing relationship</p>
          </div>
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
            <FancyContentTw layoutMode="stack" wide={true} sizeC="md" gapIconTitle={5} gapTitleDescription={6}>
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
            <FancyContentTw layoutMode="stack" wide={false} sizeC="lg" gapIconTitle={4} gapTitleDescription={1}>
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

          {/* New: Gap Comparison Examples */}
          <div
            style={{ padding: '1rem', border: '2px solid #3b82f6', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <h5 style={{ marginTop: 0, color: '#1e40af' }}>✨ NEW: Individual Gap Controls</h5>
            <FancyContentTw
              layoutMode="stack"
              wide={true}
              sizeC="md"
              gapIconTitle={6}
              gapTitleDescription={4}
              style={{ color: '#1f2937' }}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCheckMark />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title style={{ color: '#1f2937' }}>Large Icon-Title Gap (6)</FancyContentTw.Title>
              <FancyContentTw.Description style={{ color: '#4b5563' }}>
                And Large Title-Description Gap (4) - Notice how each gap is independently controlled!
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #10b981', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw layoutMode="stack" wide={true} sizeC="md" gapIconTitle={1} gapTitleDescription={6}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGPlus />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Small Icon-Title Gap (1)</FancyContentTw.Title>
              <FancyContentTw.Description>
                But Large Title-Description Gap (6) - Perfect for emphasizing text separation!
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
              gapIconTitle={2}
              gapTitleDescription={1}
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
            <FancyContentTw
              layoutMode="normal"
              alignIcon="right"
              wide={true}
              sizeC="md"
              gapIconTitle={3}
              gapTitleDescription={2}
            >
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

          {/* New: Normal Layout Gap Examples */}
          <div
            style={{ padding: '1rem', border: '2px solid #f59e0b', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <h5 style={{ marginTop: 0, color: '#92400e' }}>✨ NEW: Horizontal vs Vertical Gap Control</h5>
            <FancyContentTw
              layoutMode="normal"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapIconTitle={5}
              gapTitleDescription={1}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCircleCheck />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Wide Horizontal Gap (gapIconTitle: 5)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Small vertical gap (gapTitleDescription: 1) - Perfect for creating visual separation in grid layouts!
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #8b5cf6', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw
              layoutMode="normal"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapIconTitle={1}
              gapTitleDescription={4}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGStopSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Tight Horizontal Gap (gapIconTitle: 1)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Large vertical gap (gapTitleDescription: 4) - Great for emphasizing the description content!
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
              gapIconContent={3}
              gapTitleDescription={2}
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
            <FancyContentTw
              layoutMode="span"
              alignIcon="right"
              wide={true}
              sizeC="md"
              gapIconContent={4}
              gapTitleDescription={1}
            >
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

          {/* New: Span Layout Gap Examples */}
          <div
            style={{ padding: '1rem', border: '2px solid #06b6d4', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <h5 style={{ marginTop: 0, color: '#0e7490' }}>✨ NEW: Icon-Content vs Title-Description Gaps</h5>
            <FancyContentTw
              layoutMode="span"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapIconContent={6}
              gapTitleDescription={1}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGWarningSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Wide Icon-Content Gap (gapIconContent: 6)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Tight Title-Description gap (gapTitleDescription: 1) - Icon is far from content block!
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #ec4899', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw
              layoutMode="span"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapIconContent={1}
              gapTitleDescription={5}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGInfoSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Tight Icon-Content Gap (gapIconContent: 1)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Large Title-Description gap (gapTitleDescription: 5) - Icon is close, but title and description are far
                apart!
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
            <FancyContentTw layoutMode="row" alignIcon="left" wide={true} sizeC="md" gapBetweenElements={2}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCheckMark />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Row Layout</FancyContentTw.Title>
              <FancyContentTw.Description>All elements in single horizontal row</FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div style={{ padding: '1rem', border: '1px solid #e5e7eb', borderRadius: '6px' }}>
            <FancyContentTw layoutMode="row" alignIcon="right" wide={false} sizeC="sm" gapBetweenElements={1}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGPlus />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Compact Row</FancyContentTw.Title>
              <FancyContentTw.Description>Small, right-aligned</FancyContentTw.Description>
            </FancyContentTw>
          </div>

          {/* New: Row Layout Gap Examples */}
          <div
            style={{ padding: '1rem', border: '2px solid #f97316', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <h5 style={{ marginTop: 0, color: '#c2410c' }}>✨ NEW: Uniform Element Spacing Control</h5>
            <FancyContentTw layoutMode="row" alignIcon="left" wide={true} sizeC="md" gapBetweenElements={6}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCircleCheck />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Wide Spacing (gapBetweenElements: 6)</FancyContentTw.Title>
              <FancyContentTw.Description>Lots of space between all elements!</FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #16a34a', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw layoutMode="row" alignIcon="left" wide={true} sizeC="md" gapBetweenElements={0}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGStopSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>No Spacing (gapBetweenElements: 0)</FancyContentTw.Title>
              <FancyContentTw.Description>Elements are tightly packed!</FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #dc2626', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw layoutMode="row" alignIcon="right" wide={true} sizeC="lg" gapBetweenElements={4}>
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGFui />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Right-aligned with Medium Gap (4)</FancyContentTw.Title>
              <FancyContentTw.Description>Perfect balance of spacing</FancyContentTw.Description>
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
              gapIconTitle={2}
              gapTitleDescription={1}
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
            <FancyContentTw
              layoutMode="inline"
              alignIcon="right"
              wide={true}
              sizeC="lg"
              gapIconTitle={3}
              gapTitleDescription={2}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGCheckMark />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Right-aligned Inline</FancyContentTw.Title>
              <FancyContentTw.Description>
                Large size with icon positioned on the right of the title
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          {/* New: Inline Layout Gap Examples */}
          <div
            style={{ padding: '1rem', border: '2px solid #7c3aed', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <h5 style={{ marginTop: 0, color: '#5b21b6' }}>✨ NEW: Inline Row vs Description Row Gaps</h5>
            <FancyContentTw
              layoutMode="inline"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapIconTitle={5}
              gapTitleDescription={1}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGWarningSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Wide Icon-Title Gap (gapIconTitle: 5)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Small gap between title row and description (gapTitleDescription: 1) - Great for menu items!
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #059669', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw
              layoutMode="inline"
              alignIcon="left"
              wide={true}
              sizeC="md"
              gapIconTitle={1}
              gapTitleDescription={4}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGInfoSign />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Tight Icon-Title Gap (gapIconTitle: 1)</FancyContentTw.Title>
              <FancyContentTw.Description>
                Large gap to description (gapTitleDescription: 4) - Perfect for feature descriptions!
              </FancyContentTw.Description>
            </FancyContentTw>
          </div>

          <div
            style={{ padding: '1rem', border: '2px solid #e11d48', borderRadius: '6px', backgroundColor: '#ffffff' }}
          >
            <FancyContentTw
              layoutMode="inline"
              alignIcon="right"
              wide={true}
              sizeC="md"
              gapIconTitle={4}
              gapTitleDescription={3}
            >
              <FancyContentTw.Icon>
                <FancySVGAtom>
                  <SVGPlus />
                </FancySVGAtom>
              </FancyContentTw.Icon>
              <FancyContentTw.Title>Right-aligned with Balanced Gaps</FancyContentTw.Title>
              <FancyContentTw.Description>
                gapIconTitle: 4, gapTitleDescription: 3 - Icon on the right with balanced spacing!
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
              <FancyContentTw
                layoutMode="normal"
                alignIcon="left"
                wide={true}
                sizeC={size}
                gapIconTitle={2}
                gapTitleDescription={1}
              >
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

        {/* Add a comprehensive comparison section */}
        <div
          style={{
            marginTop: '2rem',
            padding: '1.5rem',
            backgroundColor: '#f8fafc',
            border: '2px solid #0891b2',
            borderRadius: '8px',
          }}
        >
          <h4 style={{ marginTop: 0, color: '#0c4a6e', fontSize: '1.25rem' }}>🎯 NEW PROP SUMMARY</h4>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '1rem',
              marginTop: '1rem',
            }}
          >
            <div
              style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
            >
              <h5 style={{ marginTop: 0, color: '#1e40af' }}>Stack Layout</h5>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>
                  <code>gapIconTitle</code> - Icon → Title
                </li>
                <li>
                  <code>gapTitleDescription</code> - Title → Description
                </li>
              </ul>
            </div>
            <div
              style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
            >
              <h5 style={{ marginTop: 0, color: '#dc2626' }}>Normal Layout</h5>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>
                  <code>gapIconTitle</code> - Icon ↔ Title (horizontal)
                </li>
                <li>
                  <code>gapTitleDescription</code> - Title ↓ Description (vertical)
                </li>
              </ul>
            </div>
            <div
              style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
            >
              <h5 style={{ marginTop: 0, color: '#059669' }}>Span Layout</h5>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>
                  <code>gapIconContent</code> - Icon ↔ Content Block
                </li>
                <li>
                  <code>gapTitleDescription</code> - Title → Description
                </li>
              </ul>
            </div>
            <div
              style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
            >
              <h5 style={{ marginTop: 0, color: '#f59e0b' }}>Row Layout</h5>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>
                  <code>gapBetweenElements</code> - All elements uniformly
                </li>
              </ul>
            </div>
            <div
              style={{ padding: '1rem', backgroundColor: 'white', borderRadius: '6px', border: '1px solid #e2e8f0' }}
            >
              <h5 style={{ marginTop: 0, color: '#7c3aed' }}>Inline Layout</h5>
              <ul style={{ margin: 0, paddingLeft: '1rem' }}>
                <li>
                  <code>gapIconTitle</code> - Icon ↔ Title (same line)
                </li>
                <li>
                  <code>gapTitleDescription</code> - Title row ↓ Description
                </li>
              </ul>
            </div>
          </div>
        </div>
      </DesignArea>
    </DesignWrapper>
  );
}
