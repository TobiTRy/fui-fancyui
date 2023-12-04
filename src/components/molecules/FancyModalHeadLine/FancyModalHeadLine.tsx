import { styled } from 'styled-components';

import { Typography } from '@/components/atoms/Typography';
import { FancyLine } from '@/components/atoms/FancyLine';

import IHeadLine from './FancyModalHeadLine.model';
import { TTheme } from '@/interface/TTheme';

// --------------------------------------------------------------------------- //
// -------- The main HeadLineComponent for the heading for the modals -------- //
// --------------------------------------------------------------------------- //
export default function FancyModalHeadLine(props: IHeadLine) {
  const { title, subTitle, alignCenter = true, hr = true } = props;

  return (
    <StyledHeadLine $alignCenter={alignCenter}>
      {title && (
        <Typography type="h4" variant="h3">
          {title}
        </Typography>
      )}
      {subTitle && (
        <Typography type="h5" variant="content" weight="normal">
          {subTitle}
        </Typography>
      )}
      {hr && (title || subTitle) && <FancyLine direction="horizontal" />}
    </StyledHeadLine>
  );
}

// ------------------------------------------- //
// ------- The style for the component ------- //
// ------------------------------------------- //
const StyledHeadLine = styled.div<{ $alignCenter?: boolean; theme: TTheme }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  gap: ${({ theme }) => theme.spacing.xxs};
  align-items: ${({ $alignCenter }) => ($alignCenter ? 'center' : 'flex-start')};

  hr {
    margin-top: ${({ theme }) => theme.spacing.xs};
    width: 100%;
  }
`;
