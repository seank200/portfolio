"use client";

import { MyLang, createIntlDict } from "@lib/i18n";
import { faArrowRotateRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MouseEventHandler, useEffect, useRef, useState } from "react";
import Image from "next/image";
import MemojiImage from "@images/Memoji.png";
import UAParser from "ua-parser-js";

const dict = createIntlDict(
  {
    PLAY_AGAIN: <>Play&nbsp;again</>,
  },
  {
    PLAY_AGAIN: <>다시&nbsp;재생하기</>,
  },
);

export default function Memoji({
  className,
  lang,
}: {
  className?: string;
  lang: MyLang;
}) {
  const { PLAY_AGAIN } = dict[lang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isEnded, setIsEnded] = useState<boolean>(false);
  const [showFallback, setShowFallback] = useState<boolean>(false);
  const handleVideoClick: MouseEventHandler<HTMLDivElement> = () => {
    if (!videoRef.current) return;
    videoRef.current.play();
  };

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    if (!userAgent) {
      setShowFallback(true);
    }
    const uaParser = new UAParser(window.navigator.userAgent);
    const os = uaParser.getOS();
    if (os.name !== "Mac OS") {
      setShowFallback(true);
    }
  }, []);

  useEffect(() => {
    const videoElem = videoRef.current;
    if (!videoElem) return;
    videoElem.load();
    const handleStart = () => setIsEnded(false);
    const handleEnd = () => setIsEnded(true);
    videoElem.addEventListener("play", handleStart);
    videoElem.addEventListener("playing", handleStart);
    videoElem.addEventListener("ended", handleEnd);

    return () => {
      if (!videoElem) return;
      videoElem.removeEventListener("play", handleStart);
      videoElem.removeEventListener("playing", handleStart);
      videoElem.removeEventListener("ended", handleEnd);
    };
  }, [videoRef]);

  const buttonOpacity = isEnded ? "group-hover:opacity-100" : "";

  return (
    <div
      className={`${className} shrink-0 group relative hover:scale-102 w-52 h-52 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full bg-gradient-to-br from-ctp-mauve to-ctp-blue transition-all`}
      onClick={handleVideoClick}
    >
      <video
        autoPlay
        playsInline
        muted
        disablePictureInPicture
        disableRemotePlayback
        id="home__memoji_video"
        className="relative top-[17%] left-1 md:left-2"
        ref={videoRef}
      >
        <source src="images/Memoji.mov" type="video/mp4" />
      </video>
      {showFallback && (
        <Image
          src={MemojiImage}
          alt="Memoji"
          width={640}
          height={480}
          className="absolute top-[17%] left-1 md:left-2"
        />
      )}
      <button
        className={`absolute top-full left-1/2 -translate-x-1/2 opacity-0 ${buttonOpacity} hidden md:flex items-center pt-4 text-ctp-mauve text-lg font-medium transition-all`}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} className="mr-2" />
        {PLAY_AGAIN}
      </button>
    </div>
  );
}
