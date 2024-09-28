'use client';

import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import LogoWhite from '@/assets/logo-white.svg';
import Price from '@/assets/price.svg';
import Checkbox from '@/assets/checkbox.svg';
import Link from 'next/link';
import CardFooter from '@/components/CardFooter';
import CardHero from '@/components/CardHero';
import CardProfile from '@/components/CardProfile';

import { Pagination, EffectCoverflow, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import { dummies, dummiesHero, dummiesInfo } from './dummies';
import { useRef } from 'react';

export default function Home() {
  const progressCircle = useRef<HTMLDivElement | null>(null);
  const progressContent = useRef<HTMLDivElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty('--progress', `${1 - progress}`);
    }
    if (progressContent.current) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  return (
    <div className="homepage">
      <main className="hero overflow-hidden">
        <div className="max-w-7xl mx-auto text-white">
          <nav className="h-[60px] flex items-center px-8 justify-between">
            <Image src={LogoWhite} width={114} height={21} alt="hyperhire" />
            <div className="flex gap-8">
              <div>
                <select className="outline-none bg-transparent">
                  <option value="채용">채용</option>
                  <option value="해외 개발자 원격 채용">해외 개발자 원격 채용</option>
                  <option value="외국인 원격 채용 (비개발 직군)">외국인 원격 채용 (비개발 직군)</option>
                  <option value="한국어 가능 외국인 채용">한국어 가능 외국인 채용</option>
                </select>
              </div>
              <div>해외 개발자 활용 서비스</div>
            </div>
            <div>
              <button className="bg-white text-[#4A77FF] font-bold rounded px-6 py-1.5">문의하기</button>
            </div>
          </nav>
          <div className="p-4 md:p-8 flex font-bold flex-wrap mb-8">
            <div className="lg:w-1/2 w-full">
              <div className="bubble my-12 fade-in-up delay-800">풀타임, 파트타임</div>
              <div className="font-bold mb-8 fade-in-up">
                <h1 className="text-4xl md:text-5xl flex flex-col gap-4">
                  <div>최고의 실력을 가진</div>
                  <div>외국인 인재를 찾고 계신가요?</div>
                </h1>
              </div>
              <div className="mb-16 fade-in-up delay-200">
                <h2 className="text-2xl mb-8 flex flex-col gap-2">
                  <div>법률 및 인사관리 부담없이</div>
                  <div>1주일 이내에 원격으로 채용해보세요.</div>
                </h2>
                <p className="text-xl md:block hidden">개발자가 필요하신가요?</p>
              </div>
              <div className="gap-8 mb-12 md:flex hidden fade-in-up delay-400">
                <div>
                  <div className="text-xl border-t border-white py-2">평균 월 120만원</div>
                  <div className="opacity-80">임금을 해당 국가를 기준으로 계산합니다.</div>
                </div>
                <div>
                  <div className="text-xl border-t border-white py-2">최대 3회 인력교체</div>
                  <div className="opacity-80">막상 채용해보니 맞지 않아도 걱정하지 마세요.</div>
                </div>
                <div>
                  <div className="text-xl border-t border-white py-2">평균 3일, 최대 10일</div>
                  <div className="opacity-80">급하게 사람이 필요한 경우에도 빠른 채용이 가능합니다.</div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 w-full md:p-8">
              <div className="flex justify-center">
                <div className="bubble-price mb-12 flex items-center gap-2">
                  <Image src={Price} width={26} height={26} alt="hyperhire" />
                  <div>월 100만원</div>
                </div>
              </div>
              <Swiper
                effect={'coverflow'}
                grabCursor={true}
                navigation
                slidesPerView={2}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="mySwiper">
                <SwiperSlide>
                  <CardProfile />
                </SwiperSlide>
                <SwiperSlide>
                  <CardProfile />
                </SwiperSlide>
                <SwiperSlide>
                  <CardProfile />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div className="md:block hidden fade-in-up delay-600">
            <div className="flex p-8 gap-4 mb-16">
              <Swiper
                spaceBetween={30}
                slidesPerView={4}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                centeredSlides={false}
                modules={[Autoplay, Pagination]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper">
                {dummiesHero.map((data, idx) => (
                  <SwiperSlide key={idx}>
                    <CardHero text={data.text} image={data.image} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="md:hidden block mb-12 p-8">
            <div className="grid gap-4 grid-cols-2">
              {dummies.map((data, idx) => (
                <div className="flex gap-2" key={idx}>
                  <Image src={Checkbox} width={20} height={20} alt="checkbox" />
                  <p className="text-sm font-bold">{data.text}</p>
                </div>
              ))}
            </div>
            <div className="text-[#FBFF23] font-bold mt-8">개발자가 필요하신가요?</div>
          </div>
        </div>
      </main>
      <footer className="flex font-bold py-20 max-w-7xl mx-auto px-4 flex-wrap">
        <div className="w-full lg:w-1/3">
          <div className="mb-12 flex flex-col gap-4">
            <Image src={Logo} width={187} height={34} alt="hyperhire" />
            <p className="text-sm">우리는 국가의 장벽을 넘어 최고의 인재를 매칭해드립니다.</p>
            <div className="font-bold text-[13px]">
              <Link href="'tel:010-0000-0000">010-0000-0000</Link>
            </div>
            <div className="font-bold text-[13px]">
              <Link href="'mailto:aaaaa@naver.com">aaaaa@naver.com</Link>
            </div>
          </div>
        </div>

        <div className="lg:pl-8 w-full lg:w-2/3">
          <div className="grid gap-4 lg:grid-cols-4 grid-cols-2">
            {dummiesInfo.map((data, idx) => (
              <CardFooter key={idx} text={data.text} image={data.image} />
            ))}
          </div>
        </div>

        <div className="w-full lg:w-1/3 mt-8 md:mt-0 text-[13px]">
          <div className="font-bold">
            <div className="flex gap-4">
              <ul className="flex flex-col gap-2">
                <li>상호명</li>
                <li>하이퍼하이어</li>
                <li>Hyperhire India Private Limited</li>
              </ul>
              <ul className="flex flex-col gap-2">
                <li>대표 CEO</li>
                <li>김주현</li>
                <li>Juhyun Kim</li>
              </ul>
            </div>
          </div>
        </div>

        {/* divider */}

        <div className="lg:pl-8 w-full lg:w-2/3 mt-8 md:mt-0 text-[13px]">
          <div className="flex gap-4 flex-wrap md:flex-nowrap">
            <ul className="flex flex-col gap-2">
              <li>사업자등록번호 CIN</li>
              <li>427-86-01187</li>
              <li>U74110DL2016PTC290812 </li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li>주소 ADDRESS</li>
              <li>서울특별시 강남대로 479, 지하 1층 238호 </li>
              <li>D-138, Street number 11, Jagjeet Nagar, North East Delhi, New Delhi, 110053 India </li>
            </ul>
          </div>
        </div>

        <div className="w-full mt-8 text-[13px]">
          <span>ⓒ 2023 Hyperhire</span>
        </div>
      </footer>
    </div>
  );
}
