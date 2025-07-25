'use client';

import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';

import { themeStore } from '@/design/theme/themeStore';

import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { TSwitchList } from './TSwitchList.model';

// --------------------------------------------------------------------------- //
// -------------- The Switch List Indicates wich item is active -------------- //
// --------------------------------------------------------------------------- //
export default function SwitchList(props: TSwitchList) {
  // the incoming props
  const { children, whichIndexIsSelected, activeItemHandler, externalStyle, switchIndicator, flexBoxProps, gap } =
    props;

  const [currentActive, setCurrentActive] = useState('');
  const theme = themeStore((state) => state.theme);

  const activeHandler = (uniqueKey: string) => {
    setCurrentActive(uniqueKey);
    activeItemHandler && activeItemHandler(Number(uniqueKey));
  };

  // Set the current active item if the whichIndexIsSelected prop changes
  useEffect(() => {
    setCurrentActive(`${whichIndexIsSelected ? whichIndexIsSelected : 0}`);
  }, [whichIndexIsSelected]);

  return (
    <FancyFlexBox
      externalStyle={css`
        height: 100%;
        ${externalStyle};
      `}
      gap={gap && theme.spacing[gap]}
      direction={switchIndicator?.direction === 'vertical' ? 'column' : 'row'}
      as="ul"
    >
      {/* The Item Of the List */}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Generate a unique key (or use any other unique identifier logic)
          const uniqueKey = `${index}`;

          return (
            <FancyFlexBox
              externalStyle={css`
                position: relative;
                flex-grow: 1;
                height: 100%;
                padding-bottom: 2px;
              `}
              key={uniqueKey}
              {...flexBoxProps}
              as={'li'}
              onClick={() => activeHandler(uniqueKey)}
            >
              {child}
              {index === 0 && (
                <SwitchActiveIndicator
                  className="switch-indicator"
                  direction={switchIndicator?.direction}
                  type={switchIndicator?.type ?? 'underline'}
                  itemNumber={Number(currentActive)}
                  tabSpacing={gap}
                  {...switchIndicator}
                />
              )}
            </FancyFlexBox>
          );
        }
        return child;
      })}
    </FancyFlexBox>
  );
}
