import React, { useState } from 'react';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import FancyButton from '../../components/organisms/FancyButton/FancyButton';
import { css } from 'styled-components';

const Icon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm11.666 1.89c.682 0 1.139.47 1.187 1.107H14v-.11c-.053-1.187-1.024-2-2.342-2-1.604 0-2.518 1.05-2.518 2.751v.747c0 1.7.905 2.73 2.518 2.73 1.314 0 2.285-.792 2.342-1.939v-.114h-1.147c-.048.615-.497 1.05-1.187 1.05-.839 0-1.318-.62-1.318-1.727v-.742c0-1.112.488-1.754 1.318-1.754zm-6.188.926h.044L6.542 11h1.006L9 5.001H7.818l-.82 4.355h-.056L5.97 5.001h-.94l-.972 4.355h-.053l-.827-4.355H2L3.452 11h1.005l1.02-4.184z" />
  </svg>
);

export default function ButtonRoute() {
  const [isLoading, setIsLoading] = useState(false);

  const backgroundColor = css`
    background-color: #235179;
    padding: 1rem;
    border-radius: 1rem;
    align-items: center;
  `;

  return (
    <DesignWrapper>
      <DesignArea title="Buttons sizes" style={backgroundColor}>
        <FancyButton label="Button" themeType="primary" size="sm" wide={false} onClick={() => console.log('moooinn')} />
        <FancyButton label="Button" themeType="secondary" size="md" wide={false} />
        <FancyButton label="Button" themeType="accent" size="lg" wide={false} />
        <FancyButton label="Button" themeType="secondary" wide={false} />
        <FancyButton label="Button" themeType="primary" size="sm" wide={false} borderRadius={'lg'} />
      </DesignArea>
      <DesignArea title="Button Types in wide" style={backgroundColor}>
        <FancyButton label="Button" size='sm' themeType="primary" wide />
        <FancyButton label="Button" size='md' themeType="primary" wide />
        <FancyButton label="Button" size='lg' themeType="secondary" wide />
        <FancyButton label="Button" themeType="accent" wide borderRadius="complete" align="center" />
        <FancyButton label="Button" themeType="transparent" wide align="center" hoverColor="accent" />
      </DesignArea>
      <DesignArea title="Button Types in wide" style={backgroundColor}>
        <FancyButton icon={Icon} label="Button" themeType="primary" align="left" iconAlign="left" wide />
        <FancyButton icon={Icon} label="Button" themeType="secondary" align="right" />
        <FancyButton icon={Icon} label="Button" themeType="accent" />
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
          size="sm"
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
          size="md"
          isLoading={isLoading}
          onClick={() => setIsLoading(true)}
          themeType="primary"
          borderRadius="complete"
        />
        <FancyButton
          icon={Icon}
          size="sm"
          isLoading={isLoading}
          onClick={() => setIsLoading(false)}
          themeType="secondary"
          outlined
          borderRadius="sm"
        />
        <FancyButton
          icon={Icon}
          size="lg"
          isLoading={isLoading}
          onClick={() => setIsLoading(false)}
          themeType="secondary"
          outlined
          borderRadius="sm"
        />
      </DesignArea>
    </DesignWrapper>
  );
}
