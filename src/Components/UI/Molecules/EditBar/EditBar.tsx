import React from 'react';
import styled from 'styled-components';

//TODO: Settings: Border needs ==> Color / Borderstyle / BorderWidth / Radius
//TODO: Shadow needs ==> Color / Strength / Vertikal / Horizontal
//TODO: Distances margin passings needs ==> Horizontzal / Vertical / Top / left / right / bottom
//TODO: Text needs ==> Fontsize / Fontfamily / Font weight / text align / color / Text /letter spacing

//TODO: Main SEttings --> Heding / Background / Box
//TODO: Grouped Settings --> Shadow, Text

//speeddialbutton is getting the main function for the categorys
//the first bar is getting settings for the grouped bar
//the second is for the settings
import BottomBar from '../../Atoms/BottomBar/BottomBar';
import FancyBottomBarIcon from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon';
import { IFancyBottomBarIcon } from '../../Atoms/FancyBottomBarIcon/FancyBottomBarIcon.model';
import { useEditBarStore } from './EditBar.state';
import { spacingPx, spacing } from '../../Design/design';
import EditBarModal from '../../Atoms/EditBarModal/EditBarModal';


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
  //the state for the first edit bar(bottom bar)
  const activeEditbarItem = useEditBarStore((state) => state.activeEditbarItem);
  const setActiveBarItem = useEditBarStore((state) => state.setActiveEditbarItem);
  //the state for the second edit bar(on the top of the bottom bar)
  const activeSecondEditbarItem = useEditBarStore((state) => state.activeSecondEditbarItem);
  const setActiveSecondBarItem = useEditBarStore((state) => state.setActiveSecondEditbarItem);

  
  const clickHandler = (section: 'section' | 'subSection', item: IFancyBottomBarIcon, buttonFunction?: () => void) => {
    if (section === 'subSection') setActiveSecondBarItem(item.id!);
    if (section === 'section') setActiveBarItem(item.id!);
    if (buttonFunction) buttonFunction();
  };

  return (
    <Wrapper>
      {/* //TODO: Add the edit bar */}
      {settings && (
        <EditBarModal title='Test' spacingLeftRight={spacing.xl + spacing.xl + 'px' }>
          {(settings as React.ReactElement[]).map((item, index) => (
            <React.Fragment key={index}>{item}</React.Fragment>
          ))}
        </EditBarModal>
      )}
      {/* The second Bar that adapts to the activated button from the man bar */}
      {subSectionItems && (
        <BottomBar scrollable={scrollable} bottomFixed={false} spacingLeftRight={spacingPx.xl} secondBar={true}>
          {subSectionItems.map((item, index) => (
            <FancyBottomBarIcon
              key={index}
              icon={item.icon}
              label={item.label}
              active={activeSecondEditbarItem === item.id}
              handler={() => clickHandler('subSection', item, item.handler)}
            />
          ))}
        </BottomBar>
      )}
      {/* The Main Bar which always shown with the main settings */}
      {sectionItems && (
        <BottomBar bottomFixed={false} scrollable={scrollable}>
          {sectionItems.map((item, index) => (
            <FancyBottomBarIcon
              key={index}
              icon={item.icon}
              label={item.label}
              active={activeEditbarItem === item.id}
              handler={() => setActiveBarItem(item.id!)}
            />
          ))}
        </BottomBar>
      )}
    </Wrapper>
  );
}
