import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FancyDropDownSelect from './FancyDropDownSelect';


export default {
  title: 'Example/FancyDropDownSelect',
  component: FancyDropDownSelect,
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#282c34' },
      ],
    },
  },
  backgrounds: { default: 'dark' },
} as ComponentMeta<typeof FancyDropDownSelect>;



const Template: ComponentStory<typeof FancyDropDownSelect> = (args) => <FancyDropDownSelect {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  values: ['test', 'test1', 'test2'],

};

