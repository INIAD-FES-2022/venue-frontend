import React from 'react';
import { sample } from './Sample.css';

export const Sample: React.FC = () => {
  const thisIsASample = true;

  return (
    <div className={`${thisIsASample ? sample : ''} h-full w-full p-8`}>
      Sample
    </div>
  );
};
