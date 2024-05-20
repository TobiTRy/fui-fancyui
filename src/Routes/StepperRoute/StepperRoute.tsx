import { SVGCheckMark } from '@/components/icons';
import { Stepper } from '@/components/molecules/Stepper';
import { FancyButton } from '@/components/organisms/FancyButton';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import React from 'react';

const items = [
  {
    icon: <SVGCheckMark />,
    label: 'Step 1',
    onClick: () => console.log('clicked 1'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'Step 2',
    onClick: () => console.log('clicked 2'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'Step 3',
    onClick: () => console.log('clicked 3'),
  },
  {
    icon: <SVGCheckMark />,
    label: 'Step 3',
    onClick: () => console.log('clicked 4'),
  },
];

export default function StepperRoute() {
  const [currentStep, setCurrentStep] = React.useState(1);

  return (
    <div>
      <Stepper steps={items} activeStep={currentStep} themeType="secondary" />
      <FancyFlexBox direction="row" gap={'xxl'} justify="center">
        <FancyButton themeType="secondary" label="<" onClick={() => setCurrentStep((prev) => prev - 1)}></FancyButton>
        <FancyButton themeType="secondary" label=">" onClick={() => setCurrentStep((prev) => prev + 1)}></FancyButton>
      </FancyFlexBox>
    </div>
  );
}
