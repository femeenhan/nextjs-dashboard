// 브라우저에서 실행되도록
'use client';
import AcmeLogo from '@/app/ui/acme-logo';
import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import { useRef } from 'react';
// import heroPC from '@/public/hero-desktop.png';

export default function HomePage() {
  // const pRef = useRef(null);
  // function buttonClick() {
  //   console.log(pRef.current);
  // }

  return (
    <main className="flex flex-col p-[24px] h-screen gap-4">
      <div className="h-[208px] bg-[rgb(0,112,243)] rounded-lg flex items-end p-4 sm:h-20">
        <AcmeLogo />
      </div>
      {/* 하단영역 */}
      {/* <p ref={pRef}>다른요소</p>
      <button type="button" className="flex items-start" onClick={buttonClick}>
        Event
      </button> */}

      <div className="flex flex-grow gap-4 sm:flex-col">
        {/* 좌측 텍스트 영역 */}
        <div className="flex flex-col rounded-lg bg-[#f9fafb] w-2/5 p-[80px] justify-center items-start gap-6 sm:w-full sm:px-[24px]">
          <p className={` ${montserrat.className} text-[30px]`}>
            <strong className="text-point-color1">Welcome to Acme. </strong>
            This is the example for the <br></br>
            <a
              href="https://nextjs.org/learn/"
              target="blank"
              className="font-bold text-blue-500"
            >
              Next.js Learn Course,{' '}
            </a>
            brought to you by Vercel.
          </p>
          <Link
            href="/login"
            className={`${montserrat.className} h-[48px] flex items-center p-[24px] text-white rounded-lg gap-5  bg-blue-500 mt-[20px]`}
          >
            Log in
            <ArrowRightIcon className="w-[24px]" />
          </Link>
        </div>
        {/* 우측 이미지 영역 */}
        <div className="w-3/5 px-[112px] py-[48px] flex items-center justify-center sm:w-full">
          <Image
            src="/hero-desktop.png"
            alt="Screenshots of the dashboard project showing desktop version"
            width={1000}
            height={760}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO89AcAAqYB0OFMyEMAAAAASUVORK5CYII="
            className="block sm:hidden"
          />
          <Image
            src="/hero-mobile.png"
            alt="Screenshots of the dashboard project showing mobile version"
            width={560}
            height={620}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mO89AcAAqYB0OFMyEMAAAAASUVORK5CYII="
            className="hidden sm:block"
          />
          {/* <img src={heroPC.src} alt="" /> */}
        </div>
      </div>
    </main>
  );
}
