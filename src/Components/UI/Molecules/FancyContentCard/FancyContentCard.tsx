import React from 'react';

import FancyCard from '../../Atoms/FancyCard/FancyCard';
import Typography from '../../Atoms/Typography';
import styled from 'styled-components';

interface IContentCardProps {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
}

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem;
  text-align: left;

`;

export default function FancyContentCard(props: IContentCardProps) {
  const { image, title, subtitle, description } = { ...defaultProps, ...props };

  return (
    <FancyCard padding={false}>

        <img src={image} alt="product" />
      <ContentWrapper>
        <Typography type="h2" variant="h4">
          {title}
        </Typography>
        <Typography type="h3" variant="subtitle1">
          {subtitle}
        </Typography>

        <Typography type="caption">{description}</Typography>
      </ContentWrapper>
    </FancyCard>
  );
}

const defaultProps: IContentCardProps = {
  image: 'https://picsum.photos/1600/300',
  title: 'My Fancy Product',
  subtitle: 'FancyContentCard',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
};
