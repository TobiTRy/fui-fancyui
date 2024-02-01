import React from 'react';

import FancyProfilePicture from '../../components/atoms/FancyProfilePicture/FancyProfilePicture';

import { DesignWrapper, DesignArea } from '../DesignWrapper/Wrapper';

export default function FancyProfilePictureRoute() {
  return (
    <DesignWrapper>
      <DesignArea title="ProfilePictures">
        <FancyProfilePicture
          sizeC="xxs"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="xs"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="sm"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="md"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="lg"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="xl"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="xxl"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="ProfilePictures Rounded">
        <FancyProfilePicture
          sizeC="sm"
          rounded="sm"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="md"
          rounded="md"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="lg"
          rounded="lg"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
        <FancyProfilePicture
          sizeC="xl"
          rounded="complete"
          src="https://www.az-online.de/bilder/2019/08/23/12938342/2113799823-tobias-rester-2tyMMSkM2R73.jpg"
        />
      </DesignArea>
      <DesignArea title="ProfilePictures Avatar">
        <FancyProfilePicture sizeC="xxs" rounded="sm" alt="Hi" />
        <FancyProfilePicture sizeC="xs" rounded="sm" alt="Hi" />
        <FancyProfilePicture sizeC="sm" rounded="sm" alt="Hi" />
        <FancyProfilePicture sizeC="md" rounded="md" alt="Hi" />
        <FancyProfilePicture sizeC="lg" rounded="lg" alt="Hi" />
        <FancyProfilePicture sizeC="xl" rounded="complete" alt="Hi" />
      </DesignArea>
    </DesignWrapper>
  );
}
