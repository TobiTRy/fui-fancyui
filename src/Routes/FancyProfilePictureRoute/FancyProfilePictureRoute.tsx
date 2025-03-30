import React from 'react';

import FancyProfilePicture from '../../components/atoms/FancyProfilePicture/FancyProfilePicture';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';
import { TextAvatar } from '@/components/molecules/TextAvatar';

export default function FancyProfilePictureRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="ProfilePictures">
        <FancyProfilePicture sizeC="xxs">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="xs">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="sm">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="md">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="lg">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="xl">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="xxl">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>
      </DesignArea>
      <DesignArea title="ProfilePictures borderRadius">
        <FancyProfilePicture sizeC="sm" borderRadius="sm">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="md" borderRadius="md">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="lg" borderRadius="lg">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>

        <FancyProfilePicture sizeC="xl" borderRadius="complete">
          <img src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg" />
        </FancyProfilePicture>
      </DesignArea>
      <DesignArea title="TExt Avatar">
        <TextAvatar sizeC="xxs" text="TEster" />
        <TextAvatar sizeC="xs" text="TEster" />
        <TextAvatar sizeC="sm" text="TEster" />
        <TextAvatar sizeC="md" text="TEster" />
        <TextAvatar sizeC="lg" text="TEster" />
        <TextAvatar sizeC="xl" text="TEster" />
        <TextAvatar sizeC="xxl" text="TEster" />
        <TextAvatar sizeC="xxxl" text="TEster" />
      </DesignArea>
      <DesignArea title="ProfilePictures Avatar">
        <FancyProfilePicture sizeC="xxs" borderRadius="sm" nickname="Hi" />
        <FancyProfilePicture sizeC="xs" borderRadius="sm" nickname="Hi" />
        <FancyProfilePicture sizeC="sm" borderRadius="sm" nickname="Hi" />
        <FancyProfilePicture sizeC="md" borderRadius="md" nickname="Hi" />
        <FancyProfilePicture sizeC="lg" borderRadius="lg" nickname="Hi" />
        <FancyProfilePicture sizeC="xl" borderRadius="complete" nickname="Hi" />
      </DesignArea>
    </DesignWrapper>
  );
}
