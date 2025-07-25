import type { Meta, StoryObj } from '@storybook/react';

import AutoSizingBox from '../AutoSizingBox';
import { TAutoSizingBox } from '../TAutoSizingBox.model';
import React from 'react';
import { FancyButton } from '@/components/organisms/FancyButton';
import { FancyBox } from '@/components/atoms/FancyBox';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
  component: AutoSizingBox,
  title: 'components/atoms/AutoSizingBox',
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
    docs: {
      description: {
        component:
          'The `AutoSizingBox` is a React component designed to dynamically adjust its width and height based on the size of its child elements. It uses CSS transitions for smooth animations during these adjustments.',
      },
    },
  },
  argTypes: {
    children: {
      description: 'This is the content of the box',
      control: { type: 'object' },
      table: {
        category: 'Content',
      },
    },
    startHeight: {
      description: 'This is the initial height of the box',
      control: { type: 'number' },
    },
    startWidth: {
      description: 'This is the initial width of the box',
      control: { type: 'number' },
      table: {
        defaultValue: { summary: 'number' },
      },
    },
    adjustHeight: {
      description: 'This is the flag to adjust the height of the box',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    adjustWidth: {
      description: 'This is the flag to adjust the width of the box',
      control: { type: 'boolean' },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
  },
} satisfies Meta<typeof AutoSizingBox>;

export default meta;

type Story = StoryObj<typeof meta>;

const HelperComponent = (props: TAutoSizingBox) => {
  const [isopen, setIsOpen] = React.useState(false);

  return (
    <FancyBox
      themeType="secondary"
      borderRadius={'sm'}
      externalStyle={{
        color: 'black',
      }}
    >
      <AutoSizingBox {...props}>
        <FancyButton label={isopen ? 'close' : 'open'} onClick={() => setIsOpen((prev) => !prev)} />
        {isopen ? <TestComps /> : ''}
      </AutoSizingBox>
    </FancyBox>
  );
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: (args) => <HelperComponent {...args} />,
  args: {
    startHeight: 100,
    startWidth: 200,
    adjustHeight: true,
    adjustWidth: false,
  },
};

const TestComps = () => [
  <>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
    <div>Hiii</div>
  </>,
];
