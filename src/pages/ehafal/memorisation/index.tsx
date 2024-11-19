import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { 
    MemorizationContainer, 
    HeaderContainer, 
    Title, 
    Scope, 
    ProgressSection,
    ContentSection,
    AddItemButton,
    StyledAddIcon 
} from '@/features/ehafal/components/memorisation/styles';
import { ProgressBar } from '@/features/ehafal/components/table/ProgressBar';
import { AddItemDialog } from '@/features/ehafal/components/memorisation/AddItemDialog';
import { buttonVariants } from '@/features/ehafal/components/table/styles/animations';

export default function Memorisation() {
    const { id } = useParams();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    
    const memorization = {
        id,
        target: 'Surah Al-Kahf Ayat 1-10',
        scope: 'Al-Quran',
        progress: 0,
    };

    return (
        <MemorizationContainer>
            <HeaderContainer
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Title>{memorization.target}</Title>
                <Scope>Scope: {memorization.scope}</Scope>
                <ProgressSection>
                    <ProgressBar value={memorization.progress} color="#00ff00" />
                </ProgressSection>
            </HeaderContainer>
            
            <ContentSection>
                <AddItemButton
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setIsDialogOpen(true)}
                >
                    <StyledAddIcon />
                    Add Item to Memorize
                </AddItemButton>
            </ContentSection>

            <AddItemDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </MemorizationContainer>
    );
}