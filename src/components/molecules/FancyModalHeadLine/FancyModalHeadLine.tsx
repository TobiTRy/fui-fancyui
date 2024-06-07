import { Typography } from '@/components/atoms/Typography';
import { FancyLine } from '@/components/atoms/FancyLine';

import { TFancyModalHeadLine } from './FancyModalHeadLine.model';
import { StyledHeadLine } from './FancyModalHeadLine.style';
import React from 'react';

// --------------------------------------------------------------------------- //
// -------- The main HeadLineComponent for the heading for the modals -------- //
// --------------------------------------------------------------------------- //
export default function FancyModalHeadLine(props: TFancyModalHeadLine) {
  const { title, subTitle, alignCenter = true, hr = true, gap = 'xxs', ...htmlProps } = props;

  const TitleReactNode = createTitleNode(title);
  const SubTitleReactNode = createSubtitleNode(subTitle);

  return (
    <StyledHeadLine $alignCenter={alignCenter} $gap={gap} {...htmlProps}>
      {title && TitleReactNode}
      {subTitle && SubTitleReactNode}
      {hr && (title || subTitle) && <FancyLine direction="horizontal" />}
    </StyledHeadLine>
  );
}

function checkForValidReactNode(node?: React.ReactNode | string): node is React.ReactNode {
  if (!node) return false;
  if (React.isValidElement(node)) return true;

  return false;
}

function createTitleNode(title: TFancyModalHeadLine['title']) {
  if (title && typeof title === 'string') {
    return (
      <Typography variant="bodytextLg" fontWeight="bold">
        {title}
      </Typography>
    );
  }

  if (checkForValidReactNode(title)) return title;

  return null;
}

function createSubtitleNode(subTitle: TFancyModalHeadLine['subTitle']) {
  if (subTitle && typeof subTitle === 'string') {
    return (
      <Typography variant="bodytextSm" fontWeight="bold">
        {subTitle}
      </Typography>
    );
  }

  if (checkForValidReactNode(subTitle)) return subTitle;

  return null;
}
