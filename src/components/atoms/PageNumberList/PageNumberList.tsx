'use client';

import { FancyButton } from '@/components/organisms/FancyButton';
import { Wrapper } from './PageNumberList.style';
import { generateNumbers } from './utils/generateNumbers';
import { TPageNumberList } from './TPageNumberList.model';

// Define the props for the PageNumberList component
// --------------------------------------------------------------------------- //
// ------- This compoennt generate the Page Numbers and the Spacings --------- //
// --------------------------------------------------------------------------- //
export default function PageNumberList(props: TPageNumberList) {
  const { showPages = 3, currentPage = 1, pageHandler, pageLimits = 99, numberButtonStyle } = props;

  // Generate an array of page numbers to display
  const NumberArray = generateNumbers(pageLimits, currentPage, showPages);

  const handleClicked = (e: React.MouseEvent<HTMLButtonElement>, index: number) => {
    if (!pageHandler) return;

    const button = e.target as HTMLButtonElement;
    const page = button.textContent;

    // If the page is the first page ..., set the page to the first page
    if (page === '...' && index === 0) {
      pageHandler(1);
      return;
    }

    // If the page is the last page ..., set the page to the last page
    if (page === '...' && index === NumberArray.length - 1) {
      pageHandler(pageLimits);
      return;
    }

    pageHandler(Number(page)); // use not index but the page number
  };

  // Render the PageNumberList component with the appropriate props
  return (
    <Wrapper>
      {/* Map over the total number of pages and render a FancyButton for each page */}
      {NumberArray.map((item, index) => (
        <FancyButton
          key={index}
          textColor={
            item !== currentPage
              ? (numberButtonStyle?.textColor ?? 'secondary')
              : (numberButtonStyle?.textColorActive ?? 'accent')
          }
          label={`${item}`}
          onClick={(e) => handleClicked(e, index)}
          sizeC="sm"
          oneToOne
          backgroundStrength={numberButtonStyle?.backgroundStrength}
          hoverColor={numberButtonStyle?.hoverColor ?? 'secondary'}
          layer={numberButtonStyle?.layer}
          outlined={numberButtonStyle?.outlined ?? false}
          themeType={numberButtonStyle?.themeType ?? 'transparent'}
          wide={false}
        />
      ))}
    </Wrapper>
  );
}
