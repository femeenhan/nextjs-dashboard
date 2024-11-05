import { Montserrat, Lusitana } from 'next/font/google';
import localFont from 'next/font/local';

// 변수형 폰트
export const montserrat = Montserrat({
  subsets: ['latin'],
  // system font를 먼저 보여주고 download한 font를 나중에 보여줌
  display: 'swap',
});

// 변수형 아닌 경우
export const lusitana = Lusitana({
  subsets: ['latin'],
  display: 'swap',
  // 배열 방식 혹은 배열 방식 아니어도 상관없음
  weight: ['400', '700'],
});

// local font 적용(다운받은 폰트)
export const pretendard = localFont({
  src: [
    { path: '../../public/fonts/Pretendard-Regular.woff', weight: '400' },
    { path: '../../public/fonts/Pretendard-Medium.woff', weight: '500' },
    { path: '../../public/fonts/Pretendard-Bold.woff', weight: '700' },
  ],
  display: 'swap',
});
