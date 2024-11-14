import { useRef } from 'react';

export const useHoverSound = (soundUrl: string, volume = 0.15) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayedTimeRef = useRef<number>(0);

  const playSound = () => {
    const now = Date.now();
    if (!audioRef.current) {
      const audio = new Audio(soundUrl);
      audio.volume = volume;
      audioRef.current = audio;
    }

    if (audioRef.current && now - lastPlayedTimeRef.current > 100) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch(e => {
        console.log('Error playing sound:', e);
      });
      lastPlayedTimeRef.current = now;
    }
  };

  return playSound;
};