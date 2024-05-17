import React from 'react';

import { RawButton } from '@/components/atoms/RawButton';
import { SVGCheckMark } from '@/components/icons/SVGCheckMark';
import { ActionItem } from '@/components/molecules/ActionItem';
import { globalElementsizes } from '@/design/theme/globalSizes';

import { ModifiedLine, StepperContainer } from './Stepper.style';
import { FlexToDirectionMapper, TStepper } from './TStepper.model';

const items = [
  {
    icon: <SVGCheckMark />,
    label: 'label',
    onClick: () => console.log('clicked 1'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'label',
    onClick: () => console.log('clicked 2'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'label',
    onClick: () => console.log('clicked 3'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'label',
    onClick: () => console.log('clicked 4'),
  },
];

export default function Stepper(props: TStepper) {
  const {
    size = 'md',
    steps = items,
    flexDirection = 'row',
    layer = 1,
    lineLength,
    activeStep = 3,
    labelAlign = 'bottom',
    gap = 'md',
    thinkness = '2px',
    themeType = 'primary',
    ...actionItemProps
  } = props;

  const getGloablSize = globalElementsizes[size];
  const activeLines = activeStep - 1;

  return (
    <StepperContainer direction={flexDirection} align="center" gap={gap}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <RawButton>
            <ActionItem
              layer={layer}
              labelAlign={labelAlign}
              onClick={step.onClick}
              icon={step.icon}
              label={step.label}
              isActive={index === activeStep - 1}
              disabled={index < activeStep - 1}
              {...actionItemProps}
            />
          </RawButton>
          {index < steps.length - 1 && (
            <ModifiedLine
              direction={FlexToDirectionMapper[flexDirection]}
              thickness={thinkness}
              themeType={activeLines > index ? 'accent' : themeType}
              layer={layer}
              $disabled={index < activeStep - 1}
              length={lineLength ?? getGloablSize}
              $marginTop={getGloablSize}
            />
          )}
        </React.Fragment>
      ))}
    </StepperContainer>
  );
}
