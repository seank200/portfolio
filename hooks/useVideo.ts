import { useState, useEffect, MutableRefObject } from 'react';

export default function useVideo(
  ref: MutableRefObject<HTMLVideoElement | null>,
  initialPlayingState = true
): [boolean, () => void] {
  const [isPlaying, setIsPlaying] = useState<boolean>(initialPlayingState);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const handleStart = () => {
      setIsPlaying(true);
    };
    const handleEnd = () => {
      setIsPlaying(false);
    };

    video.addEventListener('play', handleStart);
    video.addEventListener('playing', handleStart);
    video.addEventListener('pause', handleEnd);
    video.addEventListener('ended', handleEnd);

    return () => {
      if (!video) return;
      video.removeEventListener('playing', handleStart);
      video.removeEventListener('pause', handleEnd);
    };
  }, [ref]);

  const playVideo = () => {
    if (ref.current && !isPlaying) ref.current.play();
  };

  return [isPlaying, playVideo];
}
