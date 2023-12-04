import { FancyButton } from '../../organisms/FancyButton';
import { ButtonWrapper, Wrapper } from './PageNumberList.style';
import { generateNumbers } from './utils/generateNumbers';

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
