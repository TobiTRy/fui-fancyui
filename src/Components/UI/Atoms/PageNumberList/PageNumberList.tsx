import styled from 'styled-components';

import { FancyButton } from '../../Molecules/FancyButton';
import { uiColors, spacingPx } from '../../Design/design';

// The Button Wrapper gives the botton a simpler style 
export const ButtonWrapper = styled.div<{ $isActive: boolean }>`
  button {
    color: ${(props) => props.$isActive && uiColors.accent.light};
    transition: color 0.1s ease-in-out;
    padding: ${spacingPx.sm};

    &:hover {
      color: ${(props) => props.$isActive && uiColors.accent.light};
    }
  }
`;

// Define the props for the CreatePageNumberList component
interface ICreatePageNumberList {
  totalPages: number;
  currentPage: number;
  onClick?: (page: number) => void;
}

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
    startPage -= (endPage - totalPages);
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

// --------------------------------------------------------------------------- //
// -------------- Create a Page Number List that can controled  -------------- //
// --------------------------------------------------------------------------- //
export default function PageNumberList(props: ICreatePageNumberList) {
  const { totalPages, currentPage, onClick } = props;

  const NumberArray = generateNumbers(totalPages, currentPage)

  return (
    <>
      {/* Map over the total number of pages and render a FancyButton for each page */}
      {NumberArray.map((item, index) => (
        <ButtonWrapper $isActive={item === currentPage} key={index}>
          <FancyButton
            key={index}
            label={`${item}`}
            onClick={() => onClick && onClick(index + 1)}
            size="medium"
            design="transparent"
            wide={false}
          />
        </ButtonWrapper>
      ))}
    </>
  );
}
