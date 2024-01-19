import { css } from 'styled-components';

import { FancyCard } from '@/components/templates/FancyCard';
import { TFancyItemCard } from '@/components/templates/FancyItemCard/TFancyItemCard.model';

export default function FancyItemCard(props: TFancyItemCard) {
  const { image, title, subtitle, description, externalStyle, contentGap, align } = props;

  return (
    <FancyCard
      externalStyle={css`
        flex: 1;
        border: none;
        ${externalStyle};
      `}
    >
      <FancyCard.Box direction="column" align={align ?? 'flex-start'} gap={contentGap ?? '4px'} padding={'lg'}>
        <FancyCard.Image {...image} />
        <FancyCard.SubTitle {...subtitle} />
        <FancyCard.Title weight="bold" {...title} />
        <FancyCard.Descritpion {...description} />
      </FancyCard.Box>
    </FancyCard>
  );
}
