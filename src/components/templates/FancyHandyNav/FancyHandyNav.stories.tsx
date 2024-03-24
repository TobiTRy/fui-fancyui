// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import FancyHandyNav from './FancyHandyNav';
import { IFancyBottomBarIcon } from '../FancyBottomBarIcon/FancyBottomBarIcon';

const svg = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M11.5 6.027a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2.5-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-1.5 1.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm-6.5-3h1v1h1v1h-1v1h-1v-1h-1v-1h1v-1z" />
    <path d="M3.051 3.26a.5.5 0 0 1 .354-.613l1.932-.518a.5.5 0 0 1 .62.39c.655-.079 1.35-.117 2.043-.117.72 0 1.443.041 2.12.126a.5.5 0 0 1 .622-.399l1.932.518a.5.5 0 0 1 .306.729c.14.09.266.19.373.297.408.408.78 1.05 1.095 1.772.32.733.599 1.591.805 2.466.206.875.34 1.78.364 2.606.024.816-.059 1.602-.328 2.21a1.42 1.42 0 0 1-1.445.83c-.636-.067-1.115-.394-1.513-.773-.245-.232-.496-.526-.739-.808-.126-.148-.25-.292-.368-.423-.728-.804-1.597-1.527-3.224-1.527-1.627 0-2.496.723-3.224 1.527-.119.131-.242.275-.368.423-.243.282-.494.575-.739.808-.398.38-.877.706-1.513.773a1.42 1.42 0 0 1-1.445-.83c-.27-.608-.352-1.395-.329-2.21.024-.826.16-1.73.365-2.606.206-.875.486-1.733.805-2.466.315-.722.687-1.364 1.094-1.772a2.34 2.34 0 0 1 .433-.335.504.504 0 0 1-.028-.079zm2.036.412c-.877.185-1.469.443-1.733.708-.276.276-.587.783-.885 1.465a13.748 13.748 0 0 0-.748 2.295 12.351 12.351 0 0 0-.339 2.406c-.022.755.062 1.368.243 1.776a.42.42 0 0 0 .426.24c.327-.034.61-.199.929-.502.212-.202.4-.423.615-.674.133-.156.276-.323.44-.504C4.861 9.969 5.978 9.027 8 9.027s3.139.942 3.965 1.855c.164.181.307.348.44.504.214.251.403.472.615.674.318.303.601.468.929.503a.42.42 0 0 0 .426-.241c.18-.408.265-1.02.243-1.776a12.354 12.354 0 0 0-.339-2.406 13.753 13.753 0 0 0-.748-2.295c-.298-.682-.61-1.19-.885-1.465-.264-.265-.856-.523-1.733-.708-.85-.179-1.877-.27-2.913-.27-1.036 0-2.063.091-2.913.27z" />
  </svg>
);

const items2: IFancyBottomBarIcon[] = [
  { icon: svg, type: 'button', label: 'myButton', onClick: () => console.log('asas') },
  { icon: svg, type: 'button', label: 'myButton', href: 'http://google.de' },
  { icon: svg, type: 'button', label: 'myButton', href: 'http://google.de' },
  { icon: svg, type: 'button', label: 'myButton', href: 'http://google.de' },
];

// Define metadata for the story
const meta = {
  component: FancyHandyNav,
  parameters: {
    docs: {
      description: {
        component: 'Layout-Component: The FancyPasswordInput Comonent with surrounding icon, label and underline',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    isVisible: {
      description: 'Is the nav visible',
      table: {
        defaultValue: { summary: true },
      },
      control: {
        type: 'boolean',
      },
    },
    wichIndexIsActive: {
      description: 'The layer of the modal',
      table: {
        defaultValue: { summary: '0' },
      },
      control: {
        type: 'text',
      },
    },
    items: {
      description: 'The items of the nav',
      defaultValue: '',
      control: {
        type: 'object',
      },
    },
    themeType: {
      description: 'The themeType of the nav',
      table: {
        defaultValue: { summary: 'primary' },
      },
      control: {
        type: 'select',
      },
    },
    themeTypeIcons: {
      description: 'The themeType of the icons',
      table: {
        defaultValue: { summary: 'secondary' },
      },
      control: {
        type: 'select',
      },
    },
    themeTypeSwitchList: {
      description: 'The themeType of the switchlist',
      table: {
        defaultValue: { summary: 'accent' },
      },
      control: {
        type: 'select',
      },
    },
    layer: {
      description: 'The layer of the nav',
      table: {
        defaultValue: { summary: 1 },
      },
      control: {
        type: 'range',
        min: 0,
        max: 9,
        step: 1,
      },
    },
    externalStyle: {
      description: 'The external style of the nav',
      table: {
        defaultValue: { summary: '' },
      },
      control: {
        type: 'object',
      },
    },
    outlined: {
      description: 'Is the nav outlined',
      table: {
        defaultValue: { summary: false },
      },
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'The background strength of the nav',
      table: {
        defaultValue: { summary: 0.9 },
      },
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
} satisfies Meta<typeof FancyHandyNav>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <FancyHandyNav {...args} />,
  args: {
    items: items2,
    isVisible: true,
    wichIndexIsActive: '0',
    themeType: 'primary',
    layer: 1,
    externalStyle: '',
    outlined: false,
    outlinedBackgroundStrength: 0.9,
    themeTypeIcons: 'secondary',
    themeTypeSwitchList: 'accent',
  },
};
