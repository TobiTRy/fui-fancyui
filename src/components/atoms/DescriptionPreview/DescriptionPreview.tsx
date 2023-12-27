import React from 'react';

type TDescriptionPreview = {
  description: string;
  letterLimit: number;
};
export default function DescriptionPreview(props: TDescriptionPreview) {
  const { description, letterLimit } = props;
  console.log(description, letterLimit);

  return <></>;
}
