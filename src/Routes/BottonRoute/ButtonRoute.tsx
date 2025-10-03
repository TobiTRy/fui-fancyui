import React, { useState } from 'react';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';
import { css } from 'styled-components';
import { SVGChevronLeft, SVGChevronRight } from '@/components/icons';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

import style from './ButtonRoute.module.css';
import { FancySVGAtom } from '@/components/atoms/FancySVGAtom';
import { Button } from '@/components/molecules/Button';
import { FancyContent } from '@/components/molecules/FancyContent';

const backgroundColor = css`
  background-color: #235179;
  padding: 1rem;
  border-radius: 1rem;
  align-items: center;
`;

export default function ButtonRoute() {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <>
      <DesignWrapper>
        <DesignArea title="Buttons sizes" style={backgroundColor}>
          <FancyButton themeType="primary" label="Hhdsds" sizeC="xs" layer={2} />
          <FancyButton
            label="Button"
            themeType="primary"
            sizeC="sm"
            icon={<SVGChevronRight />}
            onClick={() => console.log('Trigger me Dadddy')}
          />
          <FancyButton
            outlinedRemoveBorder
            themeType="primary"
            backgroundState="active"
            icon={<SVGChevronRight />}
            label="Hhdsds"
            sizeC="md"
            layer={2}
          />
          <FancyButton
            label="ButtonLG"
            icon={<SVGChevronRight />}
            backgroundState="hover"
            themeType="primary"
            sizeC="lg"
          />
          <FancyButton label="Button" icon={<SVGChevronRight />} themeType="primary" sizeC="xl" />
        </DesignArea>
        <DesignArea title="Buttons sizes" style={backgroundColor}>
          <FancyButton themeType="primary" backgroundState="active" label="Hhdsds" sizeC="xs" layer={2} />
          <FancyButton
            outlinedRemoveBorder
            themeType="primary"
            backgroundState="active"
            label="Hhdsds"
            sizeC="sm"
            layer={2}
          />
          <FancyButton label="Button" themeType="primary" sizeC="md" onClick={() => console.log('Trigger me Dadddy')} />
          <FancyButton label="Button" themeType="primary" sizeC="lg" />
          <FancyButton label="ButtonLG" backgroundState="hover" themeType="primary" sizeC="xl" />
        </DesignArea>

        <DesignArea title="Buttons sizes" style={backgroundColor}>
          <Button themeType="primary" backgroundState="active" sizeC="sm" layer={2}>
            <FancyContent.Title>Hhdsds</FancyContent.Title>
          </Button>
          <Button outlinedRemoveBorder themeType="primary" backgroundState="active" sizeC="lg" layer={2}>
            <FancyContent.Description fontWeight="bold" sizeC="md">
              Hhdsds
            </FancyContent.Description>
          </Button>
          <Button themeType="primary" sizeC="sm" onClick={() => console.log('Trigger me Dadddy')}>
            <FancyContent.Description fontWeight="bold" sizeC="sm">
              Hhdsds
            </FancyContent.Description>
          </Button>
          <Button themeType="primary" sizeC="md">
            <FancyContent.Description fontWeight="bold" sizeC="md">
              Hhdsds
            </FancyContent.Description>
          </Button>
          <Button themeType="primary" sizeC="lg" backgroundState="hover">
            <FancyContent.Description fontWeight="bold" sizeC="lg">
              Hhdsds
            </FancyContent.Description>
          </Button>
        </DesignArea>
        <FancyButton
          label="Button"
          themeType="primary"
          sizeC="sm"
          wide={false}
          onClick={() => console.log('moooinn')}
        />
        <FancyButton label="Button" themeType="secondary" sizeC="md" wide={true} />
        <FancyButton label="Button" themeType="accent" sizeC="lg" wide={false} />
        <FancyButton label="Button" themeType="secondary" wide={false} />
        <FancyButton label="Button" themeType="primary" sizeC="sm" wide={false} borderRadius={'lg'} />
      </DesignWrapper>
      <DesignArea title="Button Types in wide" style={backgroundColor}>
        <FancyButton label="Button" sizeC="sm" themeType="primary" wide />
        <FancyButton label="Button" sizeC="md" themeType="primary" wide />
        <FancyButton label="Button" sizeC="lg" themeType="secondary" wide />
        <FancyButton label="Button" themeType="accent" wide borderRadius="complete" align="center" />
        <FancyButton label="Button" themeType="transparent" wide align="center" hoverColor="accent" />
      </DesignArea>
      <DesignArea title="Button Types in wide" style={backgroundColor}>
        <FancyButton icon={Icon} label="Button" themeType="primary" align="left" iconAlign="left" wide />
        <FancyButton icon={Icon} outlined sizeC="sm" label="Button" themeType="secondary" align="right" />
        <FancyButton icon={Icon} label="Button" sizeC="sm" themeType="accent" />
        <FancyButton icon={Icon} label="Button" themeType="transparent" align="left" />
      </DesignArea>
      <DesignArea title="Outlined Buttons" style={backgroundColor}>
        <FancyButton label="Button" themeType="primary" outlined />
        <FancyButton label="Button" themeType="secondary" outlined />
        <FancyButton
          label="Butto jjsjkd jkjdjkbs jkj kskjdj j jsjkdj njk jksjd jbsbjkjkf n"
          themeType="accent"
          outlined
        />
        <FancyButton label="Button" themeType="transparent" outlined />
      </DesignArea>
      <DesignArea title="Outlined Buttons" style={backgroundColor}>
        <FancyButton icon={Icon} label="Button" themeType="primary" outlined />
        <FancyButton icon={Icon} label="Button" themeType="secondary" outlined />
        <FancyButton
          icon={Icon}
          label="Button Butto jjsjkd jkjdjkbs jkj kskjdj j jsjkdj njk jksjd jbsbjk ddkdjkjk jksjdjsjk kjjskdjkjskdj  jjksjkjkdsjk  jkjsjkjksdjkf n"
          themeType="accent"
          outlined
        />
        <FancyButton icon={Icon} label="Button" themeType="transparent" outlined />
      </DesignArea>
      <DesignArea title="Loading Buttons" style={backgroundColor}>
        <FancyButton
          icon={Icon}
          label="Button"
          sizeC="sm"
          isLoading={isLoading}
          onClick={() => setIsLoading(true)}
          themeType="primary"
          outlined
        />
        <FancyButton
          icon={Icon}
          label="Button"
          isLoading={isLoading}
          onClick={() => setIsLoading(false)}
          themeType="secondary"
          outlined
        />
      </DesignArea>
      <DesignArea title="1:1 Buttons" style={backgroundColor}>
        <FancyButton
          icon={Icon}
          sizeC="xs"
          isLoading={isLoading}
          onClick={() => setIsLoading(true)}
          themeType="primary"
          borderRadius="complete"
        />
        <FancyButton
          icon={Icon}
          sizeC="sm"
          isLoading={isLoading}
          onClick={() => setIsLoading(true)}
          themeType="primary"
          borderRadius="complete"
        />
        <FancyButton
          icon={Icon}
          sizeC="md"
          isLoading={isLoading}
          onClick={() => setIsLoading(true)}
          themeType="primary"
          borderRadius="complete"
        />
        <FancyButton
          icon={Icon}
          sizeC="lg"
          isLoading={isLoading}
          onClick={() => setIsLoading(false)}
          themeType="secondary"
          outlined
          borderRadius="sm"
        />
        <FancyButton
          icon={Icon}
          sizeC="xl"
          isLoading={isLoading}
          onClick={() => setIsLoading(false)}
          themeType="secondary"
          outlined
          borderRadius="sm"
        />
      </DesignArea>
    </>
  );
}
