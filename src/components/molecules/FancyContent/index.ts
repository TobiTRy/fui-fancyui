// Original styled-components version (maintained for backward compatibility)
export { default as FancyContent } from './FancyContent';
export type { TFancyContent, TFancyContentHTMLAttrs } from './FancyContent.model';

// New Tailwind CSS version
export {
  default as FancyContentTw,
  FancyContentNormalTw,
  FancyContentStackTw,
  FancyContentRowTw,
  FancyContentSpanTw,
  FancyContentInlineTw,
  FancyContentIconTw,
  FancyContentTitleTw,
  FancyContentDescriptionTw,
} from './tailwind/FancyContentTw';
export type {
  TFancyContentTw,
  TFancyContentTwHTMLAttrs,
  TFancyContentTwTextProps,
  TFancyContentTwIconProps,
} from './tailwind/types';
