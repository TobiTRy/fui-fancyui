import { TDropDownSelect, TDropDownSelectNativeAttrs } from '@/components/atoms/DropDownSelect/TDropDownSelect.model';
import { SelectField } from './DropDownSelect.style';

// ------------------------------------------------------------------ //
// ---------------- the blank drop down select ---------------------- //
// ------------------------------------------------------------------ //
export default function DropDownSelect(props: TDropDownSelect & TDropDownSelectNativeAttrs) {
  const { values, value, placeholder, children, align, onChange, emptySelect = true, ...htmlInputProps } = props;

  return (
    <SelectField $align={align} $labelAlign={align} value={value || ''} onChange={onChange} {...htmlInputProps}>
      {/* Placeholder option */}
      {placeholder && (
        <option key="-2" value="">
          {placeholder}
        </option>
      )}

      {/* Empty Select Option  */}
      {emptySelect && (
        <option key="-1" value="" disabled>
          {''}
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
