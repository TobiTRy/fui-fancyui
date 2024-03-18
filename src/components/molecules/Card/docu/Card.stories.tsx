// Import necessary dependencies
import { Meta, StoryObj } from '@storybook/react';

// Import the component to be tested
import Card from '../Card';
import templateThemeType from '@/stories/templateSettingsForStorys/templatesForThemeType';
import { generateInsetBorderRadius } from '@/design/designFunctions/generateInsetBorderRadius';
import { DescriptionPreview } from '@/components/atoms/DescriptionPreview';
import { FancyButton } from '@/components/organisms/FancyButton';
// Define metadata for the story
const meta = {
  title: 'components/molecules/Card',
  component: Card,
  parameters: {
    docs: {
      description: {
        component:
          'The `Card` component serves as a versatile wrapper for content or other components, providing a consistent look and feel across your application. It is designed to encapsulate information, images, icons, titles, and other elements in a visually appealing container. The component offers customization options such as padding, border radius, shadow, and layer level adjustments to fit various design requirements.',
      },
    },
  },

  // Define arguments for the story
  argTypes: {
    ...templateThemeType('notTransparent', 'primary', 1),
    borderRadius: {
      description: 'Defines the border radius of the card. Accepts a value or an array of values from the theme.',
      control: {
        type: 'object',
      },
    },
    padding: {
      description: 'Defines the padding of the card. Accepts a value or an array of values from the theme.',
      control: {
        type: 'object',
      },
    },
    shadow: {
      description: 'Defines whether the card has a shadow.',
      control: {
        type: 'boolean',
      },
    },
    externalStyle: {
      description: 'Defines the external style of the card.',
      control: {
        type: 'object',
      },
    },
    outlined: {
      description: 'Defines whether the card is outlined.',
      control: {
        type: 'boolean',
      },
    },
    outlinedBackgroundStrength: {
      description: 'Defines the background strength of the outlined card.',
      control: {
        type: 'range',
        min: 0,
        max: 1,
        step: 0.1,
      },
    },
  },
} satisfies Meta<typeof Card>;

// Export the metadata
export default meta;
// Define the story object
type Story = StoryObj<typeof meta>;

// Define the primary story
export const Primary: Story = {
  render: (args) => (
    <Card {...args}>
      <Card.FlexBox direction="column">
        <Card.Image borderRadius="md">
          <img src="http://ilovepixel.eu/images/shibi.png" />
        </Card.Image>
        <Card.SpacingBox padding={['sm', 'md', 'lg', 'md']}>
          <Card.SubTitle layer={5} className="card_subtitle">
            {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
          </Card.SubTitle>
          <Card.Title className="card_title" fontWeight="bold">
            {'Corporate'}
          </Card.Title>

          <Card.Descritpion layer={3} className="card_description">
            <DescriptionPreview
              description={
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
              }
              letterLimit={150}
              buttonText={{ showMore: 'Expand' }}
            />
          </Card.Descritpion>
        </Card.SpacingBox>
      </Card.FlexBox>
      <Card.SpacingBox padding={['sm']}>
        <FancyButton
          label="Click me"
          wide
          themeType="secondary"
          textColor="primary"
          borderRadius="complete"
        ></FancyButton>
      </Card.SpacingBox>
    </Card>
  ),
  args: {
    borderRadius: ['md'],
    shadow: true,
    themeType: 'primary',
    outlined: false,
    layer: 1,
    padding: ['sm'],
    externalStyle: { maxWidth: '500px' },
  },
};

export const AdvancedCard: Story = {
  render: () => (
    <Card themeType="primary" externalStyle={{ maxWidth: '300px' }}>
      <Card.FlexBox direction="column">
        <Card.SpacingBox padding={['md', 'md', 'md', 'md']}>
          <Card.Image sizeW="fit" borderRadius={generateInsetBorderRadius('lg', 'md')}>
            <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
          </Card.Image>
          <Card.Box margin={['xs', 0]}>
            <Card.SubTitle layer={5}>
              {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
            </Card.SubTitle>
          </Card.Box>
          <Card.Title fontWeight="bold">{'Corporate'}</Card.Title>
          <Card.Box margin={['xs', 0]}>
            <Card.Descritpion layer={3}>
              <DescriptionPreview
                description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                }
              />
            </Card.Descritpion>
          </Card.Box>
        </Card.SpacingBox>
      </Card.FlexBox>

      <Card.SpacingBox padding={[0, 'sm', 'sm', 'sm']}>
        <FancyButton
          label="Click me"
          wide
          themeType="secondary"
          textColor="primary"
          borderRadius="complete"
        ></FancyButton>
      </Card.SpacingBox>
    </Card>
  ),
};
