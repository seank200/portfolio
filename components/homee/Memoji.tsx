'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import useVideo from '@/hooks/useVideo';

export default function Memoji() {
  const videoElemRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, playVideo] = useVideo(videoElemRef, true);

  return (
    <div className="group absolute -z-10 lg:z-0 opacity-50 md:opacity-30 lg:opacity-100 lg:relative top-1/2 lg:top-auto left-1/2 lg:left-auto -translate-x-1/2 lg:translate-x-0 -translate-y-1/2 lg:translate-y-0 shrink-0 lg:ml-12 w-64 h-64 md:w-[22rem] md:h-[22rem] rounded-full bg-gradient lg:flex justify-center items-center text-primary transition-transform hover:scale-[1.02]">
      <button
        onClick={playVideo}
        className={`pt-4 absolute top-full opacity-0 group-hover:opacity-100 transition-opacity ${
          isPlaying ? 'hidden' : ''
        }`}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} className="mr-2" />
        Play again
      </button>
      <div className="w-full h-full">
        <video
          autoPlay
          playsInline
          muted
          id="home__memoji_video"
          className={`relative top-[17%] ${
            isPlaying ? 'left-1' : 'left-2'
          } transition-position duration-1000`}
          ref={videoElemRef}
          onClick={playVideo}
        >
          <source src="images/Memoji.mov" type="video/mp4" />
          <source src="images/Memoji.webm" type="video/webm" />
        </video>
      </div>
    </div>
  );
}
