import { useState } from 'react';
import { Refresh as RefreshIcon } from '@mui/icons-material';
import { Checkbox } from '@mui/material';
import { ProgressBar } from '@/features/ehafal/components/table/ProgressBar';
import {
    ItemCard,
    ItemHeader,
    ItemTitle,
    CheckboxesContainer,
    CheckboxWrapper,
    StyledIconButton,
    ItemContent
} from '@/features/ehafal/components/memorisation/styles';

interface MemorizationItemProps {
    id: string;
    title: string;
    content: string;
    repetitions: number;
    progressRecords?: {
        repetitionNumber: number;
        completed: boolean;
    }[];
    onProgressChange: (repetitionNumber: number, completed: boolean) => void;
}

export const MemorizationItem = ({
    id,
    title,
    content,
    repetitions,
    progressRecords = [],
    onProgressChange
}: MemorizationItemProps) => {
    const [checked, setChecked] = useState<boolean[]>(() => {
        const initialState = new Array(repetitions).fill(false);
        progressRecords.forEach(record => {
            if (record.completed && record.repetitionNumber <= repetitions) {
                initialState[record.repetitionNumber - 1] = true;
            }
        });
        return initialState;
    });

    const progress = Math.round((checked.filter(Boolean).length / repetitions) * 100);

    const handleCheck = (index: number) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
        onProgressChange(index + 1, newChecked[index]);
    };

    const handleReset = () => {
        setChecked(new Array(repetitions).fill(false));
        // Notify backend about reset
        checked.forEach((isChecked, index) => {
            if (isChecked) {
                onProgressChange(index + 1, false);
            }
        });
    };
    return (
        <ItemCard
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            <ItemHeader>
                <ItemTitle>{title}</ItemTitle>
                <StyledIconButton onClick={handleReset} size="small">
                    <RefreshIcon fontSize="small" />
                </StyledIconButton>
            </ItemHeader>
            <ItemContent dangerouslySetInnerHTML={{ __html: content }} />

            <ProgressBar
                value={progress}
                color="#00ff00"
                stripeDensity={4}
                stripeThickness={2}
            />

            <CheckboxesContainer>
                {checked.map((isChecked, index) => (
                    <CheckboxWrapper key={`${id}-${index}`}>
                        <Checkbox
                            checked={isChecked}
                            onChange={() => handleCheck(index)}
                            sx={{
                                color: 'rgba(255, 255, 255, 0.3)',
                                '&.Mui-checked': {
                                    color: '#00ff00',
                                },
                            }}
                        />
                    </CheckboxWrapper>
                ))}
            </CheckboxesContainer>
        </ItemCard>
    );
};