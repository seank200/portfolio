'use client';

import { SupportedLang, createIntlDict } from '@/i18n';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { MouseEventHandler, useEffect, useRef, useState } from 'react';

const dict = createIntlDict(
  {
    PLAY_AGAIN: <>Play&nbsp;again</>,
  },
  {
    PLAY_AGAIN: <>다시&nbsp;재생하기</>,
  }
);

export default function Memoji({
  className,
  lang,
}: {
  className?: string;
  lang: SupportedLang;
}) {
  const { PLAY_AGAIN } = dict[lang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const handleVideoClick: MouseEventHandler<HTMLDivElement> = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
  };

  useEffect(() => {
    const videoElem = videoRef.current;
    if (!videoElem) return;
    videoElem.load();
    const handleStart = () => setIsEnded(false);
    const handleEnd = () => setIsEnded(true);
    videoElem.addEventListener('play', handleStart);
    videoElem.addEventListener('playing', handleStart);
    videoElem.addEventListener('ended', handleEnd);
    return () => {
      if (!videoElem) return;
      videoElem.removeEventListener('play', handleStart);
      videoElem.removeEventListener('playing', handleStart);
      videoElem.removeEventListener('ended', handleEnd);
    };
  }, [videoRef]);

  const buttonOpacity = isEnded ? 'group-hover:opacity-100' : '';

  return (
    <div
      className={`${className} shrink-0 group relative hover:scale-102 w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-primary to-secondary transition-all`}
      onClick={handleVideoClick}
    >
      <video
        autoPlay
        playsInline
        muted
        id="home__memoji_video"
        className="relative top-[17%] left-1 md:left-2"
        ref={videoRef}
      >
        <source src="images/Memoji.mov" type="video/mp4" />
        <source src="images/Memoji.webm" type="video/webm" />
      </video>
      <button
        className={`absolute top-full left-1/2 -translate-x-1/2 opacity-0 ${buttonOpacity} hidden md:flex items-center pt-4 text-primary text-lg font-medium transition-all`}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} className="mr-2" />
        {PLAY_AGAIN}
      </button>
    </div>
  );
}
