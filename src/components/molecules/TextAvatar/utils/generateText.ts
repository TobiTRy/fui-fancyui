import { TTTextAvatarWithHTMLAttrs } from '@/components/molecules/TextAvatar/TextAvatar.model';

export const generateText = (text: string, letterLength: number, casing: TTTextAvatarWithHTMLAttrs['casing']) => {
  const getCuttedText = text?.substring(0, letterLength ?? 2);
  let modifiyedText: string | undefined;

  switch (casing) {
    case 'uppercase':
      modifiyedText = getCuttedText?.toUpperCase();
      break;
    case 'lowercase':
      modifiyedText = getCuttedText?.toLowerCase();
      break;
    case 'capitalize': {
      modifiyedText = getCuttedText?.charAt(0).toUpperCase() + getCuttedText?.slice(1).toLowerCase();
      break;
    }
    default:
      modifiyedText = getCuttedText;
  }

  return modifiyedText;
};
