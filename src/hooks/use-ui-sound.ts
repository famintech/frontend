import { useRef, useEffect } from 'react';
import { Howl } from 'howler';

interface SoundOptions {
  volume?: number;
  pitch?: number; // 1 is normal, >1 is higher, <1 is lower
}

export const useUiSound = (soundUrl: string, defaultOptions: SoundOptions = {}) => {
  const soundRef = useRef<Howl | null>(null);
  const lastPlayedTimeRef = useRef<number>(0);

  useEffect(() => {
    soundRef.current = new Howl({
      src: [soundUrl],
      volume: defaultOptions.volume ?? 0.15,
    });

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
    };
  }, [soundUrl]);

  const playSound = (options: SoundOptions = {}) => {
    const now = Date.now();
    if (soundRef.current && now - lastPlayedTimeRef.current > 100) {
      const sound = soundRef.current;
      
      // Set the rate (pitch)
      const pitch = options.pitch ?? defaultOptions.pitch ?? 1;
      sound.rate(pitch);
      
      // Set the volume
      if (options.volume !== undefined) {
        sound.volume(options.volume);
      }

      sound.play();
      lastPlayedTimeRef.current = now;
    }
  };

  return playSound;
};