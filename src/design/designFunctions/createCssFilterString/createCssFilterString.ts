import { TCssFiltersTypes } from '@/design/designFunctions/createCssFilterString/TcreateCssFilterString.model';

type FilterFunction = (value: number | string) => string;
const filterDefinitions: { [K in keyof TCssFiltersTypes]: FilterFunction } = {
  brightness: (value) => `brightness(${value})`,
  contrast: (value) => `contrast(${value})`,
  grayscale: (value) => `grayscale(${value})`,
  hueRotate: (value) => `hue-rotate(${value}deg)`,
  invert: (value) => `invert(${value})`,
  opacity: (value) => `opacity(${value})`,
  saturate: (value) => `saturate(${value})`,
  sepia: (value) => `sepia(${value})`,
  blur: (value) => `blur(${value})`,
};

export function createCssFilterString(filters: TCssFiltersTypes): string {
  return Object.keys(filters)
    .filter((key) => key in filterDefinitions && filters[key as keyof TCssFiltersTypes] !== undefined)
    .map((key) => {
      const filterKey = key as keyof TCssFiltersTypes;
      const filterValue = filters[filterKey];
      const filterFunction = filterDefinitions[filterKey];

      // Check if filterFunction is defined before invoking it
      if (filterFunction && (typeof filterValue === 'number' || typeof filterValue === 'string')) {
        return filterFunction(filterValue);
      }
      return '';
    })
    .filter((filterString) => filterString !== '')
    .join(' ');
}
