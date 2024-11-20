import { useState } from 'react';
// import { useParams } from 'react-router-dom';
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
import { ItemsContainer } from '@/features/ehafal/components/memorisation/styles/item.styles';
import { ProgressBar } from '@/features/ehafal/components/table/ProgressBar';
import { AddItemDialog } from '@/features/ehafal/components/memorisation/AddItemDialog';
import { MemorizationItem } from '@/features/ehafal/components/memorisation/MemorizationItem';
import { buttonVariants } from '@/features/ehafal/components/table/styles/animations';

interface MemorizationItem {
    id: string;
    title: string;
    content: string;
    repetitions: number;
    progress: number;
}

export default function Memorisation() {
    // const { id } = useParams();
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [items, setItems] = useState<MemorizationItem[]>([]);

    const overallProgress = items.length
        ? Math.round(items.reduce((acc, item) => acc + item.progress, 0) / items.length)
        : 0;

    const handleProgressChange = (itemId: string, newProgress: number) => {
        setItems(prevItems =>
            prevItems.map(item =>
                item.id === itemId
                    ? { ...item, progress: newProgress }
                    : item
            )
        );
    };

    const handleAddItem = (newItem: MemorizationItem) => {
        setItems(prev => [...prev, newItem]);
        setIsDialogOpen(false);
    };

    // const memorization = {
    //     id,
    //     target: 'Surah Al-Kahf Ayat 1-10',
    //     scope: 'Al-Quran',
    //     progress: 0,
    // };

    return (
        <MemorizationContainer>
            <HeaderContainer
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
            >
                <Title>Memorization Target</Title>
                <Scope>Scope: Al-Quran</Scope>
                <ProgressSection>
                    <ProgressBar value={overallProgress} color="#00ff00" />
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

                <ItemsContainer>
                    {items.map(item => (
                        <MemorizationItem
                            key={item.id}
                            {...item}
                            onProgressChange={(progress) => handleProgressChange(item.id, progress)}
                        />
                    ))}
                </ItemsContainer>
            </ContentSection>

            <AddItemDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                onAdd={handleAddItem}
            />
        </MemorizationContainer>
    );
}