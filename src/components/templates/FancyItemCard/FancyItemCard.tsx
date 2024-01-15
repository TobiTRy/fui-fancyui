import { TFancyImageWrapper } from '@/components/atoms/FancyImageWrapper';
import { TTypography } from '@/components/atoms/Typography/Typography.model';
import { FancyCard } from '@/components/templates/FancyCard';
import { css } from 'styled-components';

type TFancyItemCard = {
  image?: TFancyImageWrapper;
  title?: TTypography;
  subtitle?: TTypography;
  description?: TTypography;
  externalStyle?: string;
};
export default function FancyItemCard(props: TFancyItemCard) {
  const { image, title, subtitle, description, externalStyle } = props;

  return (
    <FancyCard
      externalStyle={css`
        flex: 1;
        border: none;
        ${externalStyle};
      `}
    >
      <FancyCard.Box direction="column" align="center" gap="4px" padding={'lg'}>
        <FancyCard.Image {...image} />
        <FancyCard.SubTitle {...subtitle} />
        <FancyCard.Title weight="bold" {...title} />
        <FancyCard.Descritpion {...description} />
      </FancyCard.Box>
    </FancyCard>
  );
}
