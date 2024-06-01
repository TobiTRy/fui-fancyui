import type { Meta, StoryObj } from '@storybook/react';

import Stepper from '../Stepper';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGCheckMark } from '@/components/icons';

const meta = {
  component: Stepper,
  title: 'components/molecules/Stepper',
  parameters: {
    docs: {
      description: {
        component:
          'The Stepper component visually represents a sequence of steps. It allows users to understand their progress and navigate between stages in a linear flow.  Each step can have an associated icon, label, and optional click action.',
      },
    },
  },

  argTypes: {
    size: {
      description: 'The size of the component',
      control: { type: 'select' },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    steps: {
      description: 'The steps of the Stepper component',
      control: {
        type: 'object',
      },
    },
    flexDirection: {
      description: 'The direction of the Stepper component',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'row' },
      },
    },
    activeStep: {
      description: 'Which step is activet',
      control: {
        type: 'number',
      },
      table: {
        defaultValue: { summary: 1 },
      },
    },
    thinkness: {
      description: 'The thickness of the line',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: '2px' },
      },
    },
    lineLength: {
      description: 'The length of the line',
      control: {
        type: 'text',
      },
    },
    gap: {
      description: 'The gap between the steps',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    labelAlign: {
      description: 'The alignment of the label',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'bottom' },
      },
    },
    textColor: {
      description: 'The color of the text',
      control: {
        type: 'select',
      },
    },
    hoverColor: {
      description: 'The color of the hover',
      control: {
        type: 'select',
      },
    },
    outlined: {
      description: 'The outline of the component',
      control: {
        type: 'boolean',
      },
    },
    themeTypeActiveHover: {
      description: 'The theme type of the action item when it is active or hovered',
      control: { type: 'select' },
    },
    textHover: {
      description: 'The color of the text when hovered',
      control: { type: 'select' },
    },
    useSimpleTextColor: {
      description: 'The color of the text when hovered',
      control: { type: 'boolean' },
    },
    backgroundState: {
      description: 'The background state of the component',
      control: { type: 'select' },
    },
    backgroundStrength: {
      description: 'The background strength of the component',
      control: { type: 'number' },
      min: 0,
      max: 1,
      step: 0.1,
    },

    ...templateThemeType('notTransparent', 'primary', 3),
  },
} satisfies Meta<typeof Stepper>;

export default meta;

type Story = StoryObj<typeof meta>;

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

export const Primary: Story = {
  render: (args) => <Stepper {...args} />,
  args: {
    steps: items,
    themeType: 'primary',
    size: 'md',
    gap: 'md',
    activeStep: 1,
  },
};
