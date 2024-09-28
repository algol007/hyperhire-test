import Image from 'next/image';
import React from 'react';
import ArrowRight from '@/assets/arrow-right.svg';

interface CardFooterProps {
  text: string;
  image: any;
}

const CardFooter = ({ text, image }: CardFooterProps) => {
  return (
    <div className="flex flex-1">
      <div className="shadow rounded-xl w-full h-[142px] p-2 text-sm">
        <Image src={image} width={40} height={40} alt="arrow-right" />
        <div className="mt-2 mb-4">{text}</div>
        <div className="flex gap-2">
          <div>바로가기</div>
          <Image src={ArrowRight} width={20} height={20} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
