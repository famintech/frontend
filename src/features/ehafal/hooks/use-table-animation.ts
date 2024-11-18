import { useUiSound } from '@/shared/hooks/use-ui-sound';
import { DataTableAnimationOptions } from '@/features/ehafal/types/table';

export const useTableAnimation = (options: DataTableAnimationOptions = {}) => {
    const {
        soundUrl = '/sounds/ui-sound-hover-1.mp3',
        volume = 0.15,
        pitch = 1.5,
        delay = 100
    } = options;

    const playSound = useUiSound(soundUrl, { volume });

    const handleAnimationStart = (index: number) => {
        setTimeout(() => {
            playSound({
                pitch,
                volume: 0.2
            });
        }, index * delay);
    };

    return { handleAnimationStart };
};