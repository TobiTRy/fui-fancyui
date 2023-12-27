import React from 'react';

import { TComponentSizes } from '@/interface/TComponentSizes';
import { IFancyCard } from '@/components/atoms/FancyCard/FancyCard';
import { generateFancyMiniContentCardStyle } from '@/components/templates/FancyMiniContentCard/FancyMiniContentCard.style';
import { css } from 'styled-components';
import { FancyBox } from '@/components/atoms/FancyBox';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import CardImage from '@/components/templates/FancyMiniContentCard/Components/CardImage';
import CardTitle from '@/components/templates/FancyMiniContentCard/Components/CardTitle';
import CardSubTitle from '@/components/templates/FancyMiniContentCard/Components/CardSubTitle';

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
        <div className="content">
          <FancyContentCard.SubTitle layer={5} className="card_subtitle">
            {props.subTitle}
          </FancyContentCard.SubTitle>
          <FancyContentCard.Title className="card_title">{props.title}</FancyContentCard.Title>
          <FancyContentCard.Descritpion layer={3} className="card_description">
            {props.description}
          </FancyContentCard.Descritpion>
        </div>
      </FancyContentCard.FlexBox>
    </FancyBox>
  );
}

FancyContentCard.FlexBox = FancyFlexBox;
FancyContentCard.Image = CardImage;
FancyContentCard.Title = CardTitle;
FancyContentCard.SubTitle = CardSubTitle;
FancyContentCard.Descritpion = CardSubTitle;

export default FancyContentCard;
