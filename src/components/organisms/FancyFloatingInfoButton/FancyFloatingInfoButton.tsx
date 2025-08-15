import { FancyContent } from '@/components/molecules/FancyContent';
import { TFloatingPosition } from '@/components/atoms/FloatingWrapper/FloatingWrapper.style';
import FloatingWrapper from '@/components/atoms/FloatingWrapper/FloatingWrapper';
import { SVGChevronRight } from '@/components/icons';
import {
  StyledContainer,
  StyledFancyBox,
  StyledContentArea,
  StyledContentInner,
  ContentWrapper,
  StyledButton,
} from '@/components/organisms/FancyFloatingInfoButton/FancyFloatingInfoButton.style';
import { FancyButton } from '@/components/organisms/FancyButton';
import { useState } from 'react';

export default function FancyInfoButton({ position }: { position: TFloatingPosition }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <FloatingWrapper position={position}>
      <StyledContainer $position={position}>
        <StyledContentArea $isExpanded={isExpanded} $position={position}>
          <StyledFancyBox $isExpanded={isExpanded} />
          <StyledContentInner>
            <ContentWrapper>
              <FancyContent>
                <FancyContent.Title sizeC="sm">Welcome to the app</FancyContent.Title>
                <FancyContent.Description sizeC="sm">
                  {' '}
                  Let's get you start jhhjdhjs hshjdhshjhjd shjhjs ded
                </FancyContent.Description>
              </FancyContent>
              <div>
                <FancyButton
                  icon={<SVGChevronRight />}
                  themeType="primary"
                  sizeC="xs"
                  label="Claim Profile"
                  onClick={handleButtonClick}
                />
                <FancyButton
                  icon={<SVGChevronRight />}
                  themeType="primary"
                  sizeC="xs"
                  label="Claim Profile"
                  onClick={handleButtonClick}
                />
              </div>
            </ContentWrapper>
          </StyledContentInner>
        </StyledContentArea>

        <StyledButton $position={position}>
          <FancyButton
            icon={<SVGChevronRight />}
            themeType="primary"
            sizeC="md"
            oneToOne
            borderRadius="complete"
            onClick={handleButtonClick}
          />
        </StyledButton>
      </StyledContainer>
    </FloatingWrapper>
  );
}
