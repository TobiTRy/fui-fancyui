import React, { useMemo } from 'react';
import { css } from 'styled-components';

import HeaderContainer from '../../Atoms/HeaderContainer/HeaderContainer';
import HeaderSlot from '../HeaderSlot/HeaderSlot';

import { ISimpleHeader } from './SimpleHeader.model';

export default function SimpleHeader(props: ISimpleHeader) {
  const { leftSlot, middeSlot, rightSlot, headerHeight, spacingLeftRight, themeType, layer } = props;

  // this caluclates the grid-template-columns for the HeaderContainer
  const calcGridSlotsWithSize = useMemo(() => {
    const slotsInFR: string[] = [];
    if (leftSlot) slotsInFR.push(leftSlot.scale ? `${leftSlot.scale}fr` : '1fr');
    if (middeSlot) slotsInFR.push(middeSlot.scale ? `${middeSlot.scale}fr` : '1fr');
    if (rightSlot) slotsInFR.push(rightSlot.scale ? `${rightSlot.scale}fr` : '1fr');
    return slotsInFR;
  }, [leftSlot, middeSlot, rightSlot]);

  return (
    <HeaderContainer height={headerHeight} slotsInFR={calcGridSlotsWithSize} themeType={themeType} layer={layer}>
      {/* // ---------- The Slots for the Header ------- // */}
      {/* The slots are used to position the Components exactyl, how she needed */}
      {/* If one is not used, that it makes space for other slots */}
      {leftSlot && (
        <HeaderSlot
          headerSlot={{
            children: leftSlot.component,
            grow: leftSlot.scale,
            align: 'left',
            externalStyle: css`
              padding-left: ${spacingLeftRight};
            `,
          }}
          outOfHeaderSlot={leftSlot.toOpenComponent && leftSlot.toOpenComponent}
        />
      )}
      {middeSlot && (
        <HeaderSlot
          headerSlot={{
            children: middeSlot.component,
            grow: middeSlot.scale,
            align: 'center',
          }}
          outOfHeaderSlot={middeSlot.toOpenComponent && middeSlot.toOpenComponent}
        />
      )}
      {rightSlot && (
        <HeaderSlot
          headerSlot={{
            children: rightSlot.component,
            grow: rightSlot.scale,
            align: 'right',
            externalStyle: css`
              padding-right: ${spacingLeftRight};
            `,
          }}
          outOfHeaderSlot={rightSlot.toOpenComponent && rightSlot.toOpenComponent}
        />
      )}
    </HeaderContainer>
  );
}
