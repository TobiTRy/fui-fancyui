import { useState } from 'react';
import { Typography } from '@/components/atoms/Typography';

import { RawButton } from '@/components/atoms/RawButton';

type TDescriptionPreview = {
  description?: string;
  letterLimit?: number;
};
export default function DescriptionPreview(props: TDescriptionPreview) {
  const { description, letterLimit } = props;
  const [isShowMore, setIsShowMore] = useState(false);

  const preview = description?.substring(0, letterLimit) + '...';

  return (
    <>
      {isShowMore ? description : preview}
      <RawButton onClick={() => setIsShowMore((prev) => !prev)}>
        <Typography type="inlineElement" variant="smText" themeType='secondary' weight='bold'>
          {isShowMore ? 'Show less' : 'Show more'}
        </Typography>
      </RawButton>
    </>
  );
}
