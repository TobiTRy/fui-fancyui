import { useState } from 'react';

import { Typography } from '@/components/atoms/Typography';
import { RawButton } from '@/components/atoms/RawButton';
import { SpacingsContainer } from '@/components/atoms/SpacingContainer';
import { TDescriptionPreview } from '@/components/atoms/DescriptionPreview/DescriptionPreview.model';

export default function DescriptionPreview(props: TDescriptionPreview) {
  const { description, letterLimit = 150, text } = props;
  const [isShowMore, setIsShowMore] = useState(false);

  const preview = description?.substring(0, letterLimit) + '...';

  return (
    <>
      {description.length < letterLimit || isShowMore ? description : preview}
      <SpacingsContainer as={'span'} margin={['xxs', 0, 0, 0]}>
        {description.length > letterLimit && (
          <RawButton onClick={() => setIsShowMore((prev) => !prev)}>
            <Typography type="inlineElement" variant="content" themeType="secondary" weight="bold">
              {isShowMore ? text?.showLess ?? 'Show less' : text?.showMore ?? 'Show more'}
            </Typography>
          </RawButton>
        )}
      </SpacingsContainer>
    </>
  );
}