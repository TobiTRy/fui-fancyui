import React, { useEffect, useState } from 'react';
import { css } from 'styled-components';

import { SwitchActiveIndicator } from '@/components/atoms/SwitchActiveIndicator';
import { FancyFlexBox } from '@/components/templates/FancyFlexBox';
import { TSwitchList } from './SwitchList.model';
import { generateListItemStyle } from './SwitchList.style';
import { themeStore } from '@/design/theme/themeStore';


// --------------------------------------------------------------------------- //
// -------------- The Switch List Indicates wich item is active -------------- //
// --------------------------------------------------------------------------- //
export default function SwitchList(props: TSwitchList) {
  // the incoming props
  const {
    children,
    whichIndexIsSelected,
    activeItemHandler,
    externalStyle,
    switchIndicator,
    flexBoxProps,
    hoverStyle,
    activeStyle,
    gap,
  } = props;

  const [currentActive, setCurrentActive] = useState('');
  const theme = themeStore(state => state.theme)

  const activeHandler = (uniqueKey: string) => {
    setCurrentActive(uniqueKey);
    activeItemHandler && activeItemHandler(Number(uniqueKey));
  };

  // Set the current active item if the whichIndexIsSelected prop changes
  useEffect(() => {
    setCurrentActive(`${whichIndexIsSelected ? whichIndexIsSelected + 1 : 1}`);
  }, [whichIndexIsSelected]);

  return (
    <FancyFlexBox
      externalStyle={css`
        height: 100%;
        ${externalStyle};

      `}
      gap={gap && theme.spacing[gap]}
      flexDirection={switchIndicator?.direction === 'vertical' ? 'column' : 'row'}
      as="ul"
    >
      {/* The Item Of the List */}
      {React.Children.map(children, (child, index) => {
        if (React.isValidElement(child)) {
          // Generate a unique key (or use any other unique identifier logic)
          const uniqueKey = `${index + 1}`;

          return (
            <FancyFlexBox
              externalStyle={css`
                ${generateListItemStyle({
                  isActive: currentActive === uniqueKey,
                  hoverStyle,
                  activeStyle,
                })}
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
                  className='switch-indicator'
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
