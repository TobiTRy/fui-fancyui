import { styled } from 'styled-components';

import { Card } from '@/components/molecules/Card';
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
    <Card>
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
    </Card>
  );
}

const defaultProps: IContentCardProps = {
  image: 'https://picsum.photos/300/300',
  title: 'My Fancy Product',
  subtitle: 'FancyCard',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
};
