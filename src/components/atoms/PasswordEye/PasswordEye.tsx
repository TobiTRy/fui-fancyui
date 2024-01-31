import { SVGEyeCrossed } from '@/components/icons/SVGEyeCrossed';
import { SVGEyeOpen } from '@/components/icons/SVGEyeOpen';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';

interface IPasswordEye {
  isShow?: boolean;
  onClick?: () => void;
  customEyeOpen?: React.ReactNode;
  customEyeCrossed?: React.ReactNode;
}
export default function PasswordEye(props: IPasswordEye) {
  const { isShow, onClick, customEyeCrossed, customEyeOpen } = props;
  const clickHandler = () => {
    onClick && onClick();
  };

  return (
    <i onClick={clickHandler}>
      {isShow ? (
        // the eye icon for the password type toggle
        <FancySVGAtom sizeC="xxs" isPassive={true}>
          {customEyeOpen ?? <SVGEyeOpen />}
        </FancySVGAtom>
      ) : (
        // the crossed out eye icon for the password type toggle
        <FancySVGAtom sizeC="xxs" isPassive={true}>
          {customEyeCrossed ?? <SVGEyeCrossed />}
        </FancySVGAtom>
      )}
    </i>
  );
}
