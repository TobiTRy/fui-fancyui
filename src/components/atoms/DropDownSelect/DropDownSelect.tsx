import { TDropDownSelect, TDropDownSelectNativeAttrs } from '@/components/atoms/DropDownSelect/TDropDownSelect.model';
import { SelectField } from './DropDownSelect.style';

// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
export default function DropDownSelect(props: TDropDownSelect & TDropDownSelectNativeAttrs) {
  const { values, value, placeholder, children, align = 'left', emptySelect = true, ...htmlInputProps } = props;

  return (
    <SelectField $align={align} $labelAlign={align} value={value || ''} {...htmlInputProps}>
      {/* Placeholder option */}
      {/* Empty Select Option  */}
      {emptySelect && (
        <option key="-1" value="" disabled>
          {''}
        </option>
      )}

      {placeholder && (
        <option key="-2" value="">
          {placeholder}
        </option>
      )}

      {/* Children */}
      {values?.map((item, i) => {
        if (typeof item === 'string') {
          return (
            <option key={i} value={item.toLocaleLowerCase()}>
              {item}
            </option>
          );
        }
        return (
          <option key={i} value={item.key}>
            {item.value}
          </option>
        );
      })}

      {children}
    </SelectField>
  );
}
