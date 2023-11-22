import { styled, CSSProp } from 'styled-components';
import { RawLI } from '@/Components/UI/Atoms/RawLI';
import { TTheme } from '@/Components/UI/Interface/TTheme';

const StyledLi = styled(RawLI)<{ $externalStyle?: CSSProp; theme: TTheme }>`
  ${({ $externalStyle }) => ($externalStyle ? $externalStyle : '')}

  padding: 0 ${({ theme }) => theme.spacing.lg};

  &:first-child {
    padding-top: ${({ theme }) => theme.spacing.lg};
  }

  &:last-child {
    padding-bottom: ${({ theme }) => theme.spacing.lg};
  }
`;

interface FancyListBoxItemProps {
  children?: React.ReactNode;
  externalStyle?: CSSProp;
}
export default function FancyListBoxItem({ children }: FancyListBoxItemProps) {
  return <StyledLi>{children}</StyledLi>;
}
