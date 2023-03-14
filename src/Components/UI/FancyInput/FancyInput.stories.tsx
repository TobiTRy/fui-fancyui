import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FancyInput from './FancyInput';


export default {
  title: 'Example/FancyInput',
  component: FancyInput,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
      ],
    },
  },
  backgrounds: { default: 'dark' },
} as ComponentMeta<typeof FancyInput>;



const Template: ComponentStory<typeof FancyInput> = (args) => <FancyInput {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

