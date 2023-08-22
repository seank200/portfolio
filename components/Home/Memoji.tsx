'use client';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';
import useVideo from '@/hooks/useVideo';

export default function Memoji() {
  const videoElemRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, playVideo] = useVideo(videoElemRef, true);

  return (
    <div className="group relative shrink-0 ml-12 w-[22rem] h-[22rem] rounded-full bg-gradient flex justify-center items-center text-primary transition-transform hover:scale-[1.02]">
      <button
        onClick={playVideo}
        className={`pt-4 absolute top-full opacity-0 group-hover:opacity-100 transition-opacity ${
          isPlaying ? 'hidden' : ''
        }`}
      >
        <FontAwesomeIcon icon={faArrowRotateRight} className="mr-2" />
        Play again
      </button>
      <video
        autoPlay
        playsInline
        muted
        id="home__memoji_video"
        className="relative top-5 left-1"
        ref={videoElemRef}
        onClick={playVideo}
      >
        <source src="images/Memoji.mov" type="video/mp4" />
        <source src="images/Memoji.webm" type="video/webm" />
      </video>
    </div>
  );
}
