import { styled } from 'styled-components';

import { FancyPill } from '@/components/atoms/FancyPill';
import { sizeSettings } from '@/components/molecules/MiniProfile/sizeSettings';



export const StyledMiniProfile = styled(FancyPill)`
  display: inline-flex;
  align-items: center;

  .profile_picture {

    border-radius: 50%;
    height: ${sizeSettings.sm.image};
    width: ${sizeSettings.sm.image};
  }
`;
