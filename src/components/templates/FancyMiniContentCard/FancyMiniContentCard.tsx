import React from 'react';
import { css } from 'styled-components';

import { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';
import { TComponentSizes } from '@/interface/TComponentSizes';

import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { generateFancyMiniContentCardStyle } from '@/components/templates/FancyMiniContentCard/FancyMiniContentCard.style';

import CardImage from '@/components/templates/FancyMiniContentCard/Components/CardImage';
import CardTitle from '@/components/templates/FancyMiniContentCard/Components/CardTitle';
import CardSubTitle from '@/components/templates/FancyMiniContentCard/Components/CardSubTitle';
import CardSpacing from '@/components/templates/FancyMiniContentCard/Components/CardSpacing';
import CardDescription from '@/components/templates/FancyMiniContentCard/Components/CardDescription';
import { FancyButton } from '@/components/organisms/FancyButton';
import DescriptionPreview from '@/components/atoms/DescriptionPreview/DescriptionPreview';

export type TFancyMiniContentCardProps = {
  symbol?: React.ReactNode;
  title?: string;
  subTitle?: string;
  description?: string;
  size?: TComponentSizes;
  src?: string;
} & IFancyCard;

function FancyContentCard(props: TFancyMiniContentCardProps) {
  const { size, externalStyle, src, ...cardProps } = props;

  const generateCardStyle = generateFancyMiniContentCardStyle({ $size: size });

  return (
    <FancyBox
      externalStyle={css`
        ${generateCardStyle};
        ${externalStyle};
      `}
      {...cardProps}
    >
      <FancyContentCard.FlexBox flexDirection="column">
        <FancyContentCard.Image className="card_image" src={src} />
        <FancyContentCard.SpacingCard padding={[0, 'md', 'lg', 'md']}>
          <FancyContentCard.SubTitle layer={5} className="card_subtitle" addLineHeight>
            {props.subTitle}
          </FancyContentCard.SubTitle>
          <FancyContentCard.Title className="card_title" weight="bold" addLineHeight>
            {props.title}
          </FancyContentCard.Title>
          {props.description && (
            <FancyContentCard.Descritpion layer={3} className="card_description" addLineHeight>
              <DescriptionPreview description={props.description} letterLimit={150} text={{showMore: 'Expand'}} />
            </FancyContentCard.Descritpion>
          )}
        </FancyContentCard.SpacingCard>
      </FancyContentCard.FlexBox>
      <FancyContentCard.SpacingCard padding={['sm']}>
        <FancyButton
          label="Click me"
          wide
          themeType="secondary"
          textColor="primary"
          borderRadius="complete"
        ></FancyButton>
      </FancyContentCard.SpacingCard>
    </FancyBox>
  );
}

FancyContentCard.Image = CardImage;
FancyContentCard.Title = CardTitle;
FancyContentCard.FlexBox = FancyFlexBox;
FancyContentCard.SubTitle = CardSubTitle;
FancyContentCard.Descritpion = CardDescription;
FancyContentCard.SpacingCard = CardSpacing;

export default FancyContentCard;
