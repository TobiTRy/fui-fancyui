import React from 'react';

import { ActionItem, TActionItem } from '@/components/molecules/ActionItem';
import styled, { css } from 'styled-components';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';

import { SVGCheckMark } from '@/components/icons/SVGCheckMark';
import { FancyLine, TFancyLine } from '@/components/atoms/FancyLine';
import { globalElementsizes } from '@/design/theme/globalSizes';
import { RawButton } from '@/components/atoms/RawButton';
import { TDirection } from '@/components/atoms/FancyLine/TFancyLine.model';
import { TFlexDirection } from '@/types/TFlexDirection';
import { TComponentSizesExtended } from '@/types/TComponentSizes';
import { TSpacings } from '@/types/TSpacings';

// New Styled Component for the Stepper
const StepperContainer = styled(FancyFlexBox)`
  justify-content: center;
  width: 100%;
  ${({ direction }) => direction === 'row' && css``}

  ${({ direction }) => direction === 'column' && css``}
`;

const items = [
  {
    icon: <SVGCheckMark />,
    label: 'label',
    cb: () => console.log('clicked 1'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'label',
    cb: () => console.log('clicked 2'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'label',
    cb: () => console.log('clicked 3'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'label',
    cb: () => console.log('clicked 4'),
  },
];

type ModifiedLineProps = {
  $marginTop?: string;
};

const ModifiedLine = styled(FancyLine)<ModifiedLineProps>`
  ${({ direction, $marginTop, thickness }) =>
    direction === 'horizontal'
      ? css`
          margin-top: calc((${$marginTop} - ${thickness}) / 2);
        `
      : css`
          align-self: center;
        `}
`;

type TActionItemModifieed = Omit<TActionItem, 'items'>;

type TSteperItem = {
  icon: JSX.Element;
  label: string;
  cb: () => void;
};

type TStepper = {
  steps: TSteperItem[];
  activeStep: number;
  flexDirection?: TFlexDirection;
  lineLength?: string;
  gap?: TSpacings;
} & TActionItemModifieed;

type TFlexToDirectionMapper = Record<TFlexDirection, TDirection>;

const FlexToDirectionMapper: TFlexToDirectionMapper = {
  row: 'horizontal',
  column: 'vertical',
  'column-reverse': 'vertical',
  'row-reverse': 'horizontal',
};

export default function Stepper(props: TStepper) {
  const {
    size = 'md',
    steps = items,
    flexDirection = 'row',
    layer = 3,
    lineLength,
    activeStep,
    labelAlign = 'bottom',
    gap = 'md',
    ...actionItemProps
  } = props;

  const getGloablSize = globalElementsizes[size];

  return (
    <StepperContainer direction={flexDirection} align="center" gap={gap}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <RawButton>
            <ActionItem
              layer={layer}
              labelAlign={labelAlign}
              onClick={step.cb}
              icon={step.icon}
              label={step.label}
              isActive={index === activeStep}
            />
          </RawButton>
          {index < steps.length - 1 && (
            <ModifiedLine
              direction={FlexToDirectionMapper[flexDirection]}
              thickness="1px"
              length={lineLength ?? getGloablSize}
              $marginTop={getGloablSize}
            />
          )}
        </React.Fragment>
      ))}
    </StepperContainer>
  );
}
