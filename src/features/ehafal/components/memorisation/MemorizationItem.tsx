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
    onProgressChange: (progress: number) => void;
}

export const MemorizationItem = ({
    id,
    title,
    content,
    repetitions,
    onProgressChange
}: MemorizationItemProps) => {
    const [checked, setChecked] = useState<boolean[]>(new Array(repetitions).fill(false));

    const progress = Math.round((checked.filter(Boolean).length / repetitions) * 100);

    const handleCheck = (index: number) => {
        const newChecked = [...checked];
        newChecked[index] = !newChecked[index];
        setChecked(newChecked);
        onProgressChange(Math.round((newChecked.filter(Boolean).length / repetitions) * 100));
    };

    const handleReset = () => {
        setChecked(new Array(repetitions).fill(false));
        onProgressChange(0);
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