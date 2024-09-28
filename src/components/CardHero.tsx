import Image from 'next/image';
import React from 'react';

interface CardFooterProps {
  text: string;
  image: any;
}

const CardHero = ({ text, image }: CardFooterProps) => {
  return (
    <div className="relative">
      <div className="bg-white rounded-xl opacity-20 h-full absolute w-full"></div>
      <div className="flex w-[322px]">
        <div className="shadow rounded-xl p-8 flex h-[88px] gap-4 items-center">
          <div className="h-[56px] w-[56px]">
            <Image src={image} width={56} height={56} alt="arrow-right" />
          </div>
          <div className="text-2xl font-bold">{text}</div>
        </div>
      </div>
    </div>
  );
};

export default CardHero;
