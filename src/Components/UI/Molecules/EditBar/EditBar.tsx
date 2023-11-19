import React from 'react';
import { styled } from 'styled-components';

//TODO: Settings: Border needs ==> Color / Borderstyle / BorderWidth / Radius
//TODO: Shadow needs ==> Color / Strength / Vertikal / Horizontal
//TODO: Distances margin passings needs ==> Horizontzal / Vertical / Top / left / right / bottom
//TODO: Text needs ==> Fontsize / Fontfamily / Font weight / text align / color / Text /letter spacing

//TODO: Main SEttings --> Heding / Background / Box
//TODO: Grouped Settings --> Shadow, Text

//speeddialbutton is getting the main function for the categorys
//the first bar is getting settings for the grouped bar
//the second is for the settings

import FancyBottomBarIcon, { IFancyBottomBarIcon } from '../../Templates/FancyBottomBarIcon/FancyBottomBarIcon';
import EditBarModal from '../../Atoms/EditBarModal/EditBarModal';

import DynamicBottomScrollBar from '../DynamicBottomScrollBar/DynamicBottomScrollBar';
import themeStore from '@/Components/UI/Design/color/themeStore';

const Wrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
  width: 100%;
`;

interface IEditBar {
  scrollable?: boolean;
  children?: React.ReactNode[];
  currentlyEdited?: 'text' | 'image' | 'sectionBox';
  sectionItems?: IFancyBottomBarIcon[] | null;
  subSectionItems?: IFancyBottomBarIcon[] | null;
  settings?: React.ReactNode[] | null;
}

// --------------------------------------------------------------------------- //
// ----------    The Editbar with two bars and the edit Settings    ---------- //
// --------------------------------------------------------------------------- //
export default function EditBar(props: IEditBar) {
  const { scrollable, subSectionItems, sectionItems, settings } = props;
  const themeSpacing = themeStore((state) => state.theme.spacing);


  //TODO: GIVE BACK FROM THE DYANMIC BOTTOM BAR THE BUTTON WHICH IS ACTIVE
  return (
    <Wrapper>
      {settings && (
        <EditBarModal title="Test" spacingLeftRight={parseFloat(themeSpacing.xl) * 2 + 'px'}>
          {(settings as React.ReactElement[]).map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </EditBarModal>
      )}
      {/* The second Bar that adapts to the activated button from the man bar */}
      {subSectionItems && (
        <DynamicBottomScrollBar scrollable={scrollable} activateScrollbar={subSectionItems.length > 4}>
          {sectionItems?.map((item, index) => (
            <FancyBottomBarIcon key={index} {...item} />
          ))}
        </DynamicBottomScrollBar>
      )}
      {/* The Main Bar which always shown with the main settings */}
      {sectionItems && (
        <DynamicBottomScrollBar scrollable={scrollable} activateScrollbar={sectionItems.length > 4}>
          {subSectionItems?.map((item, index) => (
            <FancyBottomBarIcon key={index} {...item} />
          ))}
        </DynamicBottomScrollBar>
      )}
    </Wrapper>
  );
}
