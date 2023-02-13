import * as React from 'react';

interface HelloProps {
  name: string;
}

export const Hello = ({ name }: HelloProps) => {
  return <>Hello {name}</>;
};
