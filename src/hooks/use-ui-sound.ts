import { useRef } from 'react';

interface SoundOptions {
  volume?: number;
  playbackRate?: number; // Controls the pitch (1 is normal, >1 is higher, <1 is lower)
}

export const useUiSound = (soundUrl: string, defaultOptions: SoundOptions = {}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const lastPlayedTimeRef = useRef<number>(0);

  const playSound = (options: SoundOptions = {}) => {
    const now = Date.now();
    if (!audioRef.current) {
      const audio = new Audio(soundUrl);
      audio.volume = options.volume ?? defaultOptions.volume ?? 0.15;
      audioRef.current = audio;
    }

    if (audioRef.current && now - lastPlayedTimeRef.current > 100) {
      const audio = audioRef.current;
      audio.playbackRate = options.playbackRate ?? defaultOptions.playbackRate ?? 1;
      audio.currentTime = 0;
      audio.play().catch(e => {
        console.log('Error playing sound:', e);
      });
      lastPlayedTimeRef.current = now;
    }
  };

  return playSound;
};