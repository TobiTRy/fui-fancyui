import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import HeaderTitleWithLogo from './HeaderTitleWithLogo';
import SVGCheckMark from '../../icons/SVGCheckMark/SVGCheckMark';

const meta = {
  component: HeaderTitleWithLogo,
  parameters: {
    docs: {
      description: {
        component:
          'Dumb-Comonent: A simple HeaderTitleWithLogo component that can be used to provied a title and a Logo.',
      },
    },
  },
  argTypes: {
    themeType: {
      description: 'The theme type of the component',
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the component',
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    linkTo: {
      description: 'The link that redirects to a page',
      control: {
        type: 'text',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HeaderTitleWithLogo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <HeaderTitleWithLogo {...args} />,
  args: {
    title: 'Title',
    logo: <SVGCheckMark />,
  },
};
