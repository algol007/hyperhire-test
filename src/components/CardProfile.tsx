import Image from 'next/image';
import React from 'react';
import Code from '@/assets/code.svg';

const CardProfile = () => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="w-[120px]">
          <Image src={Code} width={120} height={120} alt="arrow-right" className="rounded-full mx-auto" />
          <div className="flag"></div>
        </div>
      </div>
      <div className="card-body">
        <h2 className="name">Abhishek Gupta</h2>
        <p className="role">마케팅 &bull; 2y+</p>
        <div className="tags">
          <div className="tag">마케팅 콘텐츠 제작</div>
          <div className="tag">인스타그램 관리</div>
          <div className="tag">트위터 관리</div>
          <div className="tag">블로그 글 작성</div>
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
