import Image from 'next/image';
import React from 'react';
import ArrowRight from '@/assets/arrow-right.svg';
import Code from '@/assets/code.svg';

const CardFooter = () => {
  return (
    <div className="flex flex-1">
      <div className="shadow rounded-xl w-full h-[142px] p-4 text-sm">
        <Image src={Code} width={40} height={40} alt="arrow-right" />
        <div className="mt-2 mb-4">해외 개발자 원격 채용</div>
        <div className="flex gap-2">
          <div>바로가기</div>
          <Image src={ArrowRight} width={20} height={20} alt="arrow-right" />
        </div>
      </div>
    </div>
  );
};

export default CardFooter;
