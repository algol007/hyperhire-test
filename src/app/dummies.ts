import Code from '@/assets/code.svg';
import User from '@/assets/user.svg';
import Kor from '@/assets/kor.svg';
import Setting from '@/assets/setting.svg';

type Dummies = {
  text: string;
  image?: any;
};

export const dummies: Dummies[] = [
  { text: '한국어 능력' },
  { text: '업무 수행 능력' },
  { text: '겸업 여부' },
  { text: '평판 조회' },
];

export const dummiesInfo: Dummies[] = [
  { text: '해외 개발자 원격 채용', image: Code },
  { text: '외국인 원격 채용 (비개발)', image: User },
  { text: '한국어 가능 외국인 채용', image: Kor },
  { text: '해외 개발자 활용 서비스', image: Setting },
];

export const dummiesHero: Dummies[] = [
  { text: '해외 마케팅', image: Code },
  { text: '퍼블리셔', image: User },
  { text: '캐드원(제도사)', image: Kor },
  { text: '해외 세일즈', image: Setting },
  { text: '해외 마케팅', image: Code },
  { text: '퍼블리셔', image: User },
  { text: '캐드원(제도사)', image: Kor },
  { text: '해외 세일즈', image: Setting },
];
