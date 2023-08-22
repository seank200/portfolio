import { waitForDebugger } from 'inspector';
import { useState, useEffect, MutableRefObject } from 'react';

export default function useVideo(
  ref: MutableRefObject<HTMLVideoElement | null>,
  initialPlayingState = true
): [boolean, () => void] {
  const [isPlaying, setIsPlaying] = useState<boolean>(initialPlayingState);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const handlePlaying = () => {
      setIsPlaying(true);
    };
    const handlePause = () => {
      setIsPlaying(false);
    };
    video.addEventListener('playing', handlePlaying);
    video.addEventListener('pause', handlePause);

    return () => {
      if (!video) return;
      video.removeEventListener('playing', handlePlaying);
      video.removeEventListener('pause', handlePause);
    };
  }, [ref]);

  useEffect(() => {
    console.log(`isPlaying: ${isPlaying}`);
  }, [isPlaying]);

  const playVideo = () => {
    if (ref.current && !isPlaying) ref.current.play();
  };

  return [isPlaying, playVideo];
}
