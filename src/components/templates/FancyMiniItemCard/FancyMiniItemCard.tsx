import { FancyCard } from '@/components/templates/FancyCard';

type TFancyItemCard = {
  image?: string;
  title?: string;
  subtitle?: string;
  description?: string;
};
export default function FancyItemCard(props: TFancyItemCard) {
  const { image, title, subtitle, description } = props;

  return (
    <FancyCard>
      <FancyCard.FlexBox direction="column" align="center">
        <FancyCard.Image src={image} />
        <FancyCard.Title weight="bold">{title}</FancyCard.Title>
        <FancyCard.SubTitle>{subtitle}</FancyCard.SubTitle>
        <FancyCard.Descritpion>{description}</FancyCard.Descritpion>
      </FancyCard.FlexBox>
    </FancyCard>
  );
}
