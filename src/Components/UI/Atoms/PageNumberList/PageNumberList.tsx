import { styled } from 'styled-components';

import { FancyButton } from '../../Molecules/FancyButton';
import { spacingPx } from '../../Design/design';
import { simpleColorTransition } from '../../Design/simpleTransition';
import { TUiColorsType } from '../../Design/color/designColor';

// Define a styled component for the button wrapper
export const ButtonWrapper = styled.div<{ $isActive: boolean, theme: TUiColorsType }>`
  button {
    color: ${({$isActive, theme}) => $isActive && theme.accent[0]};
    ${simpleColorTransition}
    padding: ${spacingPx.sm};

    &:hover {
      color: ${({$isActive, theme}) => $isActive && theme.accent[0]};
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: ${spacingPx.md};
`;


// Define a function to generate an array of page numbers to display
const generateNumbers = (totalPages: number, currentPage: number, pageLimit = 3) => {
  const numbers: (number | string)[] = [];

  let startPage = currentPage - Math.floor(pageLimit / 2);
  let endPage = currentPage + Math.floor(pageLimit / 2);

  if (pageLimit % 2 === 0) {
    startPage += 1; // If pageLimit is even, favor showing one less page before the current page
  }

  // Adjust if the range goes outside the total pages
  if (startPage < 1) {
    endPage += Math.abs(startPage) + 1;
    startPage = 1;
  }

  if (endPage > totalPages) {
    startPage -= endPage - totalPages;
    endPage = totalPages;
  }

  startPage = Math.max(startPage, 1);

  if (startPage > 1) {
    numbers.push('...');
  }

  for (let i = startPage; i <= endPage; i++) {
    numbers.push(i);
  }

  if (endPage < totalPages) {
    numbers.push('...');
  }

  return numbers;
};

// Define the props for the PageNumberList component
interface IPageNumberList {
  totalPages: number;
  currentPage: number;
  pageLimits?: number;
  onClick?: (page: number) => void;
}
// --------------------------------------------------------------------------- //
// ------- This compoennt generate the Page Numbers and the Spacings --------- //
// --------------------------------------------------------------------------- //
export default function PageNumberList(props: IPageNumberList) {
  const { totalPages, currentPage, onClick, pageLimits } = props;

  // Generate an array of page numbers to display
  const NumberArray = generateNumbers(totalPages, currentPage, pageLimits);

  // Render the PageNumberList component with the appropriate props
  return (
    <Wrapper>
      {/* Map over the total number of pages and render a FancyButton for each page */}
      {NumberArray.map((item, index) => (
        <ButtonWrapper $isActive={item === currentPage} key={index}>
          <FancyButton
            key={index}
            label={`${item}`}
            onClick={() => onClick && onClick(index + 1)}
            size="md"
            themeType="transparent"
            wide={false}
          />
        </ButtonWrapper>
      ))}
    </Wrapper>
  );
}
