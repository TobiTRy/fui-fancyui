import React from 'react';
import FancyContentIcon from './utils/FancyContentIcon';
import FancyContentDescription from './utils/FancyContentDescription';
import FancyContentTitle from './utils/FancyContentTitle';

type TContent = {
  children: React.ReactNode;
};

function Content(props: TContent) {
  const { children } = props;
  return <div>{children}</div>;
}

Content.Icon = FancyContentIcon;
Content.Description = FancyContentDescription;
Content.Title = FancyContentTitle;

export default Content;
