// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Typography from '../Typography';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';

// Define metadata for the story
const meta = {
  component: Typography,
  title: 'components/atoms/Typography',
  parameters: {
    docs: {
      description: {
        component:
          'The Typography component can render differnet elements with different styles <br/> Its variant driven, so wehen you choose a variant, the component will render the element with the style of the variant. <br/> When you choose a type and a variant, the component will render the element with the style of the variant.',
      },
    },
  },
  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'secondary', 0),
    variant: {
      description: 'The variant how the typography should look like',
      control: {
        type: 'select',
      },
      table: {
        defaultValue: { summary: 'bodytextMd' },
      },
    },
    elType: {
      description: 'The element type of the typography',
      control: {
        type: 'select',
      },
      type: {
        name: 'string',
        required: false,
      },
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'label', 'p', 'span', 'small', undefined],
      table: {
        defaultValue: { summary: 'p' },
      },
    },
    fontWeight: {
      description: 'The fontWeight for the typography',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'depends on the theme' },
      },
    },
    lineHeight: {
      description: 'The lineHeight for the typography',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'depends on the theme' },
      },
    },
    letterSpacing: {
      description: 'The letterSpacing for the typography',
      control: {
        type: 'text',
      },
      table: {
        defaultValue: { summary: 'depends on the theme' },
      },
    },
    className: {
      description: 'The className for the typography',
      control: {
        type: 'text',
      },
    },
    htmlFor: {
      description: 'The htmlFor for the typography if its a label',
      control: {
        type: 'text',
      },
    },
  },
  // Add tags to the story
} satisfies Meta<typeof Typography>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'bodytextMd',
    children: 'I need something to eat, i think i will eat a pizza',
    themeType: 'secondary',
    layer: 0,
    elType: 'p',
    externalStyle: {},
    fontWeight: 'normal',
    lineHeight: 'normal',
  },
};

export const DisplayHero: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'displayHero',
    children: 'DisplayHero',
  },
};

export const DisplayHeadline: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'displayHeadline',
    children: 'DisplayHeadline',
  },
};

export const DisplayTitle: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'displayTitle',
    children: 'DisplayTitle',
  },
};

export const SectionTitle: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'sectionTitle',
    children: 'SectionTitle',
  },
};
export const SectionSubtitle: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'sectionSubtitle',
    children: 'SectionSubtitle',
  },
};
export const SectionSubsectionTitle: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'sectionSubsectionTitle',
    children: 'SectionSubsectionTitle',
  },
};

export const BodytextLg: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'bodytextLg',
    children: 'BodytextLg',
  },
};

export const BodytextMd: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'bodytextMd',
    children: 'BodytextMd',
  },
};

export const BodytextSm: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'bodytextSm',
    children: 'BodytextSm',
  },
};

export const SubTextCaption: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'subTextCaption',
    children: 'SubTextCaption',
  },
};

export const SubTextFootnote: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'subTextFootnote',
    children: 'SubTextFootnote',
  },
};

export const SubTextLegal: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'subTextLegal',
    children: 'SubTextLegal',
  },
};

export const InteractiveLg: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'interactiveLg',
    children: 'InteractiveLg',
  },
};

export const InteractiveMd: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'interactiveMd',
    children: 'InteractiveMd',
  },
};

export const InteractiveSm: Story = {
  render: (args) => <Typography {...args}>{args.children}</Typography>,
  args: {
    variant: 'interactiveSm',
    children: 'InteractiveSm',
  },
};
