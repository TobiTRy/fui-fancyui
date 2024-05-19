import React from 'react';

import { RawButton } from '@/components/atoms/RawButton';
import { ActionItem } from '@/components/molecules/ActionItem';
import { globalElementsizes } from '@/design/theme/globalSizes';

import { ModifiedLine, StepperContainer } from './Stepper.style';
import { FlexToDirectionMapper, TStepper } from './TStepper.model';

export default function Stepper(props: TStepper) {
  const {
    size = 'md',
    steps,
    flexDirection = 'row',
    layer = 3,
    lineLength,
    activeStep = 1,
    labelAlign = 'bottom',
    gap = 'md',
    thinkness = '2px',
    themeType = 'primary',
    ...actionItemProps
  } = props;

  // needs to align the line to the center of the action item
  const getGloablSize = globalElementsizes[size];

  return (
    <StepperContainer direction={flexDirection} align="center" gap={gap}>
      {steps.map((step, index) => (
        <React.Fragment key={index}>
          <RawButton>
            <ActionItem
              themeType={themeType}
              outlined={index > activeStep - 1}
              layer={index === activeStep - 1 ? 0 : layer}
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
              themeType={activeStep - 1 > index ? 'accent' : themeType}
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