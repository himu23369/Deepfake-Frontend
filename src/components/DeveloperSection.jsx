import React from 'react';
import { AnimatedTooltip } from './ui/animated-tooltip';

export const DeveloperSection = ({ people }) => {
  return (
    <div className="flex flex-row items-center justify-end mb-6 w-full px-10">
      <div className='flex flex-col'>
        <p className="z-10 text-2xl text-white text-sm mb-2 pr-4">Developers:</p>
        <div className='flex flex-align px-2 mx-4'>
          <AnimatedTooltip items={people} />
        </div>
      </div>
    </div>
  );
};
