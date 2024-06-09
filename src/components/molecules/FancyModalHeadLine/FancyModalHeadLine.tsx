import React from 'react';
import { Typography } from '@/components/atoms/Typography';
import { FancyLine } from '@/components/atoms/FancyLine';

import { TFancyModalHeadLine, TFancyModalHeadLineWithHTMLProps } from './FancyModalHeadLine.model';
import { HeadLineWrapper, StyledHeadLine, StyledHeadLineTitles, IconWrapper } from './FancyModalHeadLine.style';
import { FancyXButton } from '@/components/atoms/FancyXButton';

// --------------------------------------------------------------------------- //
// -------- The main HeadLineComponent for the heading for the modals -------- //
// --------------------------------------------------------------------------- //
export default function FancyModalHeadLine(props: TFancyModalHeadLineWithHTMLProps) {
  const { title, subTitle, alignCenter = false, hr = {}, gapBetweenText = 'xxs', onXButtonClick, ...htmlProps } = props;

  const TitleReactNode = createTitleNode(title);
  const SubTitleReactNode = createSubtitleNode(subTitle);

  return (
    <StyledHeadLine {...htmlProps}>
      <HeadLineWrapper>
        <StyledHeadLineTitles $gapBetweenText={gapBetweenText} $alignCenter={alignCenter}>
          {title && TitleReactNode}
          {subTitle && SubTitleReactNode}
        </StyledHeadLineTitles>
        <IconWrapper>
          <FancyXButton onClick={onXButtonClick && onXButtonClick} />
        </IconWrapper>
      </HeadLineWrapper>
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
