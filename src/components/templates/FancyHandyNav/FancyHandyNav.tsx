import { useEffect } from 'react';

import useFancyHandyNavStore from './FancyHandyNav.store';

import { FancyBox } from '@/components/atoms/FancyBox';
import { RawNav } from '@/components/atoms/RawNav';
import { SwitchList } from '@/components/molecules/SwitchList';
import { FancyBottomBarIcon } from '@/components/templates/FancyBottomBarIcon';
import { ButtonWrapper, fancyBarStyle } from '@/components/templates/FancyHandyNav/FancyHandyNav.style';
import { TFancyHandyNavWithHTMLAttrs } from './TFancyHandyNav.model';
import { getOpositMainThemeType } from '@/design/designFunctions/getOpositMainThemeType';
import { clampLayer } from '@/utils/functions/clampLayer';

// --------------------------------------------------------------------------- //
// ---------- A handyNavBar that can dynamicly generated via objects---------- //
// --------------------------------------------------------------------------- //
export default function FancyHandyNav(props: TFancyHandyNavWithHTMLAttrs) {
  const {
    items,
    isVisible,
    wichIndexIsActive,
    themeType,
    themeTypeSwitchList,
    switchListLayer = 3,
    layer,
    externalStyle,
    ...htmlProps
  } = props;

  // setup a global zustand store for the visibility and the active index
  const isVisibleState = useFancyHandyNavStore((state) => state.isVisible);
  const setIsVisible = useFancyHandyNavStore((state) => state.setIsVisible);
  const stateWhichIsActive = useFancyHandyNavStore((state) => state.whichIsActive);
  const setWhichIsActiveState = useFancyHandyNavStore((state) => state.setWhichIsActive);

  // Set the default values / initial values
  useEffect(() => {
    setWhichIsActiveState(wichIndexIsActive ?? '0');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [wichIndexIsActive]);

  // handle the visibility of the nav
  useEffect(() => {
    setIsVisible(isVisible ?? true);
  }, [isVisible, setIsVisible]);

  return (
    <>
      {isVisibleState && (
        // The Navbar container
        <RawNav $externalStyle={externalStyle} {...htmlProps}>
          <FancyBox
            outlined={props.outlined}
            themeType={themeType}
            layer={layer}
            outlinedBackgroundStrength={props.outlinedBackgroundStrength}
            externalStyle={fancyBarStyle}
          >
            {/* The List with the items  */}
            <SwitchList
              whichIndexIsSelected={Number(stateWhichIsActive)}
              switchIndicator={{
                themeType: themeTypeSwitchList,
                layer: clampLayer((switchListLayer ?? 1) - 5),
                indicatorWidth: '70%',
              }}
            >
              {items?.map((item, index) => (
                <ButtonWrapper key={index}>
                  <FancyBottomBarIcon
                    activeThemeType={themeTypeSwitchList}
                    themeType={getOpositMainThemeType(themeType)}
                    layer={switchListLayer ?? 0}
                    activeLayer={clampLayer((switchListLayer ?? 1) + 4)}
                    isActive={Number(stateWhichIsActive) === index}
                    {...item}
                    onClick={() => {
                      setWhichIsActiveState(index.toString());
                      item.onClick && item.onClick();
                    }}
                  />
                </ButtonWrapper>
              ))}
            </SwitchList>
          </FancyBox>
        </RawNav>
      )}
    </>
  );
}
