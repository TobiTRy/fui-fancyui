import { css } from 'styled-components';

import { DescriptionPreview } from '@/components/atoms/DescriptionPreview';
import { FancyButton } from '@/components/organisms/FancyButton';
import { FancyCard } from '@/components/templates/FancyCard';
import FancyMiniItemCard from '@/components/templates/FancyItemCard/FancyItemCard';
import { generateInsetBorderRadius } from '@/design/designFunctions/generateInsetBorderRadius';
import Card from '../../components/molecules/Card/Card';
import { DesignArea, DesignWrapper } from '../DesignWrapper/Wrapper';

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
                text={{ showMore: 'Expand' }}
              />
            ),
          }}
        />
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <FancyCard>
          <FancyCard.FlexBox direction="column">
            <FancyCard.FlexBox direction="column" justify="center" align="center">
              <FancyCard.Image />
            </FancyCard.FlexBox>
            <FancyCard.SpacingBox padding={[0, 'md', 'lg', 'md']}>
              <FancyCard.SubTitle layer={5} className="card_subtitle" addLineHeight>
                {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
              </FancyCard.SubTitle>
              <FancyCard.Title className="card_title" weight="bold" addLineHeight>
                {'Corporat<e'}
              </FancyCard.Title>

              <FancyCard.Descritpion layer={3} className="card_description" addLineHeight>
                <DescriptionPreview
                  description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                  }
                  letterLimit={100}
                  text={{ showMore: 'Expand' }}
                />
              </FancyCard.Descritpion>
            </FancyCard.SpacingBox>
          </FancyCard.FlexBox>
          <FancyCard.SpacingBox padding={['sm']}>
            <FancyButton
              label="Click me"
              wide
              themeType="secondary"
              textColor="primary"
              borderRadius="complete"
            ></FancyButton>
          </FancyCard.SpacingBox>
        </FancyCard>
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        {/* CARD 2 */}
        <FancyCard>
          <FancyCard.FlexBox direction="column">
            <FancyCard.SpacingBox padding={['md', 'md', 'md', 'md']}>
              <FancyCard.Image sizeW="fit" borderRadius={generateInsetBorderRadius('lg', 'md')}>
                <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
              </FancyCard.Image>
              <FancyCard.Box margin={['xs', 0]}>
                <FancyCard.SubTitle layer={5} addLineHeight>
                  {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
                </FancyCard.SubTitle>
              </FancyCard.Box>
              <FancyCard.Title weight="bold" addLineHeight>
                {'Corporate'}
              </FancyCard.Title>
              <FancyCard.Box margin={['xs', 0]}>
                <FancyCard.Descritpion layer={3} addLineHeight>
                  <DescriptionPreview
                    description={
                      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                    }
                  />
                </FancyCard.Descritpion>
              </FancyCard.Box>
            </FancyCard.SpacingBox>
          </FancyCard.FlexBox>

          <FancyCard.SpacingBox padding={[0, 'sm', 'sm', 'sm']}>
            <FancyButton
              label="Click me"
              wide
              themeType="secondary"
              textColor="primary"
              borderRadius="complete"
            ></FancyButton>
          </FancyCard.SpacingBox>
        </FancyCard>
      </div>
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      {/* LINEEE */}
      <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
        <FancyCard>
          <FancyCard.FlexBox direction="column">
            <FancyCard.Image className="card_image">
              <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
            </FancyCard.Image>
            <FancyCard.SpacingBox padding={[0, 'md', 'lg', 'md']}>
              <FancyCard.SubTitle layer={5} className="card_subtitle" addLineHeight>
                {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
              </FancyCard.SubTitle>
              <FancyCard.Title className="card_title" weight="bold" addLineHeight>
                {'Corporate'}
              </FancyCard.Title>

              <FancyCard.Descritpion layer={3} className="card_description" addLineHeight>
                <DescriptionPreview
                  description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                  }
                  letterLimit={150}
                  text={{ showMore: 'Expand' }}
                />
              </FancyCard.Descritpion>
            </FancyCard.SpacingBox>
          </FancyCard.FlexBox>
          <FancyCard.SpacingBox padding={['sm']}>
            <FancyButton
              label="Click me"
              wide
              themeType="secondary"
              textColor="primary"
              borderRadius="complete"
            ></FancyButton>
          </FancyCard.SpacingBox>
        </FancyCard>

        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        {/* CARD 2222 */}
        <FancyCard>
          <FancyCard.FlexBox direction="column">
            <FancyCard.Image borderRadius="md">
              <img src="http://ilovepixel.eu/images/shibi.png" />
            </FancyCard.Image>
            <FancyCard.SpacingBox padding={[0, 'md', 'lg', 'md']}>
              <FancyCard.SubTitle layer={5} className="card_subtitle" addLineHeight>
                {'Grow steadily and pizza. Grow steadily and pizza. Grow steadily and pizza.Grow steadily and pizza.'}
              </FancyCard.SubTitle>
              <FancyCard.Title className="card_title" weight="bold" addLineHeight>
                {'Corporate'}
              </FancyCard.Title>

              <FancyCard.Descritpion layer={3} className="card_description" addLineHeight>
                <DescriptionPreview
                  description={
                    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet ligula id libero tristique cursus. Mauris at volutpat leo. Vivamus in arcu non leo elementum cursus nec sit amet quam. Nullam eget nunc eget leo elementum sodales. Suspendisse potenti. Sed et sapien nec sapien convallis ullamcorper. Nulla facilisi. Curabitur at justo ac nisl auctor gravida non eget nibh.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut vitae lacus non felis suscipit faucibus. Nulla facilisi. Duis dignissim nisl ut elit suscipit, et commodo leo cursus. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.'
                  }
                  letterLimit={150}
                  text={{ showMore: 'Expand' }}
                />
              </FancyCard.Descritpion>
            </FancyCard.SpacingBox>
          </FancyCard.FlexBox>
          <FancyCard.SpacingBox padding={['sm']}>
            <FancyButton
              label="Click me"
              wide
              themeType="secondary"
              textColor="primary"
              borderRadius="complete"
            ></FancyButton>
          </FancyCard.SpacingBox>
        </FancyCard>
      </div>
      <DesignArea title="Card for Content with static size" style={backgroundColor}>
        <Card />
      </DesignArea>
      <DesignArea title="Card for Content dynamic" style={backgroundColor}>
        <Card borderRadius="xxl">
          <h1>Hello</h1>
          <h1>World</h1>
          <h1>World</h1>
        </Card>
      </DesignArea>
      <DesignArea title="Card for Content with static size" style={backgroundColor}>
        <FancyCard />
      </DesignArea>
    </DesignWrapper>
  );
}
