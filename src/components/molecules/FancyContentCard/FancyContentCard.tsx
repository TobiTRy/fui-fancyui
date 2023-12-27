import { styled } from 'styled-components';

import { FancyCard } from '@/components/atoms/FancyCard';
import { Typography } from '@/components/atoms/Typography';

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

const InnerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function FancyContentCard(props: IContentCardProps) {
  const { image, title, subtitle, description } = { ...defaultProps, ...props };

  return (
    <FancyCard>
      <InnerCard>
        <div>
          <img src={image} alt="product" />
        </div>
        <ContentWrapper>
          <Typography type="h3" variant="h3">
            {title}
          </Typography>
          <Typography type="h4" variant="h6">
            {subtitle}
          </Typography>

          <Typography type="content">{description}</Typography>
        </ContentWrapper>
      </InnerCard>
    </FancyCard>
  );
}

const defaultProps: IContentCardProps = {
  image: 'https://picsum.photos/300/300',
  title: 'My Fancy Product',
  subtitle: 'FancyContentCard',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
};
