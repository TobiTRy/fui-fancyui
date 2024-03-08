import { css } from 'styled-components';

import { DescriptionPreview } from '@/components/atoms/DescriptionPreview';
import { FancyButton } from '@/components/organisms/FancyButton';
import FancyMiniItemCard from '@/components/templates/FancyItemCard/FancyItemCard';
import { generateInsetBorderRadius } from '@/design/designFunctions/generateInsetBorderRadius';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';
import { Card } from '@/components/molecules/Card';

export default function CradRoute() {
  const backgroundColor = css`
    background-color: #235179;
    padding: 1rem;
    border-radius: 1rem;
    text-align: center;
    align-items: center;
  `;

  return (
    <DesignWrapper>
      <div>
        <FancyMiniItemCard
          align="center"
          image={{
            borderRadius: generateInsetBorderRadius('lg', 'md'),
            children: (
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            ),
          }}
          title={{
            children: <>test</>,
          }}
          subtitle={{ children: <>Moooin</> }}
          description={{
            children: (
              <DescriptionPreview
                description={
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                }
                letterLimit={150}
                buttonText={{ showMore: 'Expand' }}
              />
            ),
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <Card>
          <Card.FlexBox direction="column">
            <Card.FlexBox direction="column" justify="center" align="center">
              <Card.Image />
            </Card.FlexBox>
            <Card.SpacingBox padding={[0, 'md', 'lg', 'md']}>
              <Card.SubTitle layer={5} className="card_subtitle">
                {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
              </Card.SubTitle>
              <Card.Title className="card_title" fontWeight="bold">
                {'Corporat<e'}
              </Card.Title>

              <Card.Descritpion layer={3} className="card_description">
                <DescriptionPreview
                  description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                  }
                  letterLimit={100}
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
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        <Card themeType="primary">
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
      </div>
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <Card>
          <Card.FlexBox direction="column">
            <Card.Image className="card_image">
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            </Card.Image>
            <Card.SpacingBox padding={[0, 'md', 'lg', 'md']}>
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

        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        <Card>
          <Card.FlexBox direction="column">
            <Card.Image borderRadius="md">
              <img src="http://ilovepixel.eu/images/shibi.png" />
            </Card.Image>
            <Card.SpacingBox padding={[0, 'md', 'lg', 'md']}>
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
      </div>
      <DesignArea title="Card for Content with static sizeC" style={backgroundColor}>
        <Card />
      </DesignArea>
      <DesignArea title="Card for Content dynamic" style={backgroundColor}>
        <Card borderRadius="xxl">
          <h1>Hello</h1>
          <h1>World</h1>
          <h1>World</h1>
        </Card>
      </DesignArea>
      <DesignArea title="Card for Content with static sizeC" style={backgroundColor}>
        <Card />
      </DesignArea>
    </DesignWrapper>
  );
}
