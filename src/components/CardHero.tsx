import Image from 'next/image';
import React from 'react';
import Code from '@/assets/code.svg';

const CardHero = () => {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl opacity-20 h-full absolute w-full"></div>
      <div className="flex w-[322px]">
        <div className="shadow rounded-xl p-8 flex h-[88px] gap-4 items-center">
          <Image src={Code} width={56} height={56} alt="arrow-right" />
          <div className="text-2xl font-bold">해외 마케팅</div>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
