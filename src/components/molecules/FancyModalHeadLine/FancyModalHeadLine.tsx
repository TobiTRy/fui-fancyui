import { Typography } from '@/components/atoms/Typography';
import { FancyLine } from '@/components/atoms/FancyLine';

import { TFancyModalHeadLine } from './FancyModalHeadLine.model';
import { StyledHeadLine } from './FancyModalHeadLine.style';

// --------------------------------------------------------------------------- //
// -------- The main HeadLineComponent for the heading for the modals -------- //
// --------------------------------------------------------------------------- //
export default function FancyModalHeadLine(props: TFancyModalHeadLine) {
  const { title, subTitle, alignCenter = true, hr = true, ...htmlProps } = props;

  return (
    <StyledHeadLine $alignCenter={alignCenter} {...htmlProps}>
      {title && <Typography variant="bodytextLg">{title}</Typography>}
      {subTitle && <Typography variant="bodytextSm">{subTitle}</Typography>}
      {hr && (title || subTitle) && <FancyLine direction="horizontal" />}
    </StyledHeadLine>
  );
}
