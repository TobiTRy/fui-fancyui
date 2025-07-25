import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';

import Switch from '../Switch';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { SVGCheckMark, SVGXlg } from '@/components/icons';

const meta = {
  component: Switch,
  title: 'components/molecules/Switch',
  parameters: {
    docs: {
      description: {
        component:
          'The Switch component is a toggle control that allows users to switch between two states (on/off). It supports various sizes, themes, icons, and states including disabled. The component provides smooth animations and proper accessibility support with focus states. It can be used with or without icons and supports custom styling through external style props.',
      },
    },
  },
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 0),
    checked: {
      description: 'Whether the switch is checked (on) or not.',
      control: {
        type: 'boolean' as const,
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    disabled: {
      description: 'Whether the switch is disabled.',
      control: {
        type: 'boolean' as const,
      },
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    sizeC: {
      description: 'The size of the switch.',
      control: {
        type: 'select' as const,
        options: ['xs', 'sm', 'md', 'lg', 'xl'],
      },
      table: {
        defaultValue: { summary: 'md' },
      },
    },
    onChange: {
      description: 'Callback function called when the switch state changes.',
      control: {
        type: 'object' as const,
      },
      table: {
        type: { summary: '(checked: boolean) => void' },
      },
    },
    icon: {
      description: 'Icon to display when switch is unchecked.',
      control: {
        type: 'object' as const,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    checkedIcon: {
      description: 'Icon to display when switch is checked.',
      control: {
        type: 'object' as const,
      },
      table: {
        type: { summary: 'ReactNode' },
      },
    },
    externalStyle: {
      description: 'External styling for the switch.',
      control: {
        type: 'object' as const,
      },
      table: {
        type: { summary: 'CSSProp' },
      },
    },
    id: {
      description: 'HTML id attribute for the input element.',
      control: {
        type: 'text' as const,
      },
    },
    name: {
      description: 'HTML name attribute for the input element.',
      control: {
        type: 'text' as const,
      },
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

// Template for controlled stories
const ControlledTemplate = (args: { checked?: boolean } & Record<string, unknown>) => {
  const [checked, setChecked] = useState(args.checked || false);

  return <Switch {...args} checked={checked} onChange={setChecked} />;
};

export const Default: Story = {
  render: ControlledTemplate,
  args: {
    checked: false,
    disabled: false,
    sizeC: 'md',
    themeType: 'primary',
    layer: 0,
  },
};

export const Checked: Story = {
  render: ControlledTemplate,
  args: {
    checked: true,
    sizeC: 'md',
    themeType: 'primary',
  },
};

export const Disabled: Story = {
  render: ControlledTemplate,
  args: {
    checked: false,
    disabled: true,
    sizeC: 'md',
    themeType: 'primary',
  },
};

export const DisabledChecked: Story = {
  render: ControlledTemplate,
  args: {
    checked: true,
    disabled: true,
    sizeC: 'md',
    themeType: 'primary',
  },
};

export const WithIcons: Story = {
  render: ControlledTemplate,
  args: {
    checked: false,
    sizeC: 'md',
    themeType: 'primary',
    icon: <SVGXlg />,
    checkedIcon: <SVGCheckMark />,
  },
};

export const Sizes: Story = {
  render: () => {
    const [states, setStates] = useState({
      xs: false,
      sm: false,
      md: false,
      lg: false,
      xl: false,
    });

    const handleChange = (size: keyof typeof states) => (checked: boolean) => {
      setStates((prev) => ({ ...prev, [size]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch sizeC="xs" checked={states.xs} onChange={handleChange('xs')} themeType="primary" />
          <span>Extra Small</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch sizeC="sm" checked={states.sm} onChange={handleChange('sm')} themeType="primary" />
          <span>Small</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch sizeC="md" checked={states.md} onChange={handleChange('md')} themeType="primary" />
          <span>Medium</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch sizeC="lg" checked={states.lg} onChange={handleChange('lg')} themeType="primary" />
          <span>Large</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch sizeC="xl" checked={states.xl} onChange={handleChange('xl')} themeType="primary" />
          <span>Extra Large</span>
        </div>
      </div>
    );
  },
};

export const ThemeVariants: Story = {
  render: () => {
    const [states, setStates] = useState({
      primary: true,
      secondary: true,
      success: true,
      warning: true,
      error: true,
    });

    const handleChange = (theme: keyof typeof states) => (checked: boolean) => {
      setStates((prev) => ({ ...prev, [theme]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch checked={states.primary} onChange={handleChange('primary')} themeType="primary" sizeC="md" />
          <span>Primary</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch checked={states.secondary} onChange={handleChange('secondary')} themeType="secondary" sizeC="md" />
          <span>Secondary</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch checked={states.success} onChange={handleChange('success')} themeType="success" sizeC="md" />
          <span>Success</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch checked={states.warning} onChange={handleChange('warning')} themeType="warning" sizeC="md" />
          <span>Warning</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch checked={states.error} onChange={handleChange('error')} themeType="error" sizeC="md" />
          <span>Error</span>
        </div>
      </div>
    );
  },
};

export const WithIconsAndStates: Story = {
  render: () => {
    const [states, setStates] = useState({
      iconEnabled: false,
      iconDisabled: false,
      iconChecked: true,
      iconCheckedDisabled: true,
    });

    const handleChange = (key: keyof typeof states) => (checked: boolean) => {
      setStates((prev) => ({ ...prev, [key]: checked }));
    };

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', alignItems: 'flex-start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch
            checked={states.iconEnabled}
            onChange={handleChange('iconEnabled')}
            themeType="primary"
            sizeC="md"
            icon={<SVGXlg />}
            checkedIcon={<SVGCheckMark />}
          />
          <span>With Icons - Enabled</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch
            checked={states.iconDisabled}
            onChange={handleChange('iconDisabled')}
            themeType="primary"
            sizeC="md"
            disabled
            icon={<SVGXlg />}
            checkedIcon={<SVGCheckMark />}
          />
          <span>With Icons - Disabled (Off)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch
            checked={states.iconChecked}
            onChange={handleChange('iconChecked')}
            themeType="success"
            sizeC="md"
            icon={<SVGXlg />}
            checkedIcon={<SVGCheckMark />}
          />
          <span>With Icons - Checked</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Switch
            checked={states.iconCheckedDisabled}
            onChange={handleChange('iconCheckedDisabled')}
            themeType="success"
            sizeC="md"
            disabled
            icon={<SVGXlg />}
            checkedIcon={<SVGCheckMark />}
          />
          <span>With Icons - Disabled (On)</span>
        </div>
      </div>
    );
  },
};

export const Playground: Story = {
  render: ControlledTemplate,
  args: {
    checked: false,
    disabled: false,
    sizeC: 'md',
    themeType: 'primary',
    icon: <SVGXlg />,
    checkedIcon: <SVGCheckMark />,
    id: 'switch-playground',
    name: 'playground-switch',
  },
};
