import React from 'react';

import type { Meta, StoryObj } from '@storybook/react';

import DynamicBottomScrollBar from './DynamicBottomScrollBar';
import SVGCheckMark from '../../SVGIcons/SVGCheckMark';

const meta = {
  component: DynamicBottomScrollBar,
  parameters: {
    docs: {
      description: {
        component:
          'Smart-Comonent: This component is a smart component, it will automatically add a scrollbar if the buttons are more than 4 and the scrollable prop is true. <br>   ',
      },
    },
  },
  argTypes: {
    width: {
      description: 'The width of the component.',
      control: {
        type: 'text',
      },
    },
    themeType: {
      control: {
        type: 'select',
      },
    },
    bottomFixed: {
      control: {
        type: 'boolean',
      },
    },
    scrollable: {
      description: 'If true, the bar will be scrollable.',
      control: {
        type: 'boolean',
      },
    },
    buttons: {
      description: 'The buttons to be rendered in the bar. <br> - The button recives a prop wich has a on click on this item, to call the specific function',
    },
    layer : {
      control: {
        type: 'range',  min: 0, max: 10, step: 1,
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DynamicBottomScrollBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: (args) => <DynamicBottomScrollBar {...args} />,
  args: {
    layer: 4,
    buttons: [
      {
        id: '1',
        icon: <SVGCheckMark/>,
        label: 'Home',
        onClick: () => console.log('home'),
      },
      {
        id: '2',
        icon: <SVGCheckMark/>,
        label: 'Search',
        onClick: () => console.log('search'),
      },
      {
        id: '3',
        icon:<SVGCheckMark/>,
        label: 'Add',
        onClick: () => console.log('add'),
      },
      {
        id: '4',
        icon: <SVGCheckMark/>,
        label: 'Notifications',
        onClick: () => console.log('notifications'),
      },
      {
        id: '5',
        icon: <SVGCheckMark/>,
        label: 'Account',
        onClick: () => console.log('account'),
      },
      {
        id: '6',
        icon: <SVGCheckMark/>,
        label: 'Settings',
        onClick: () => console.log('settings'),
      },
      {
        id: '7',
        icon: <SVGCheckMark/>,
        label: 'Help',
        onClick: () => console.log('help'),
        themeType: 'accent',
      },
      {
        id: '8',
        icon: <SVGCheckMark/>,
        label: 'Exit',
        onClick: () => console.log('exit'),
      },
    ],
    spacingLeftRight: '0px',
    width: '100%',

  },
};
