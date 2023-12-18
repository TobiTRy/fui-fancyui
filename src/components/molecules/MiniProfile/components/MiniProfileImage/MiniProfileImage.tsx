import { FancyProfilePicture } from '@/components/atoms/FancyProfilePicture';

type IMiniProfileImage = React.ComponentProps<typeof FancyProfilePicture>;

export default function MiniProfileImage(props: IMiniProfileImage) {
  const { size = 'complete', rounded = 'complete', ...htmlProps } = props;

  return <FancyProfilePicture size={size} rounded={rounded} {...htmlProps} />;
}
