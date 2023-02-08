import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import FancyButton from './FancyButton';

export default {
  title: 'Example/FancyButton',
  component: FancyButton,
} as ComponentMeta<typeof FancyButton>;

const Template: ComponentStory<typeof FancyButton> = (args) => <FancyButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button',
};