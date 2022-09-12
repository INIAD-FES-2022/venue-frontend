import React from 'react';
import { sample } from './Sample2.css';

export const Sample2: React.FC = () => {
  const thisIsASample2 = true;

  return (
    <div className={`${thisIsASample2 ? sample : ''} h-full w-full p-8`}>
      Sample
    </div>
  );
};
