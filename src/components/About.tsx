import { Title } from './Common/Title';
import data from '@/data';
import Image from 'next/image';
import React from 'react';

export const About = () => {
  return (
    <div
      className="flex flex-col items-center justify-center max-w-7xl w-full mx-auto p-5 md:p-0"
      id="about"
    >
      <Title num={1} title="About me" />

      <div className="flex flex-col items-center justify-center md:flex-row md:justify-start md:items-start">
        <p className="mt-10 text-xl text-textDark md:w-1/2 z-10">
          {data.about}
        </p>

        <Image
          alt={data.name}
          className="object-contain relative mx-auto mt-20 border-2 rounded-full md:mt-0 md:ml-20 w-80 h-80 border-neon"
          height={300}
          src={data.image}
          width={300}
        />
      </div>
    </div>
  );
};
