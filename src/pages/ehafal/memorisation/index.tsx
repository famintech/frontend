import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useMemorizationDetails } from '@/features/ehafal/hooks';
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
import { SciFiSnackbar } from '@/features/ehafal/components/dialog/ScifiSnackbar';

interface MemorizationItemType {
    id: string;
    title: string;
    content: string;
    repetitionsRequired: number;
    progress: number;
}

interface NewMemorizationItem {
    title: string;
    content: string;
    repetitions: number;
}

export default function Memorisation() {
    const { id = '' } = useParams<{ id: string }>();
    const { memorization, isLoading, error, updateItemProgress, addItem } = useMemorizationDetails(id);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [snackbar, setSnackbar] = useState<{
        open: boolean;
        message: string;
        severity: 'error' | 'success' | 'info' | 'warning';
    }>({
        open: false,
        message: '',
        severity: 'error'
    });

    if (error) {
        return (
            <SciFiSnackbar
                open={true}
                message="Failed to fetch memorization details. Please try again later."
                severity="error"
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            />
        );
    }
    if (isLoading || !memorization) return <div>Loading...</div>;

    const handleProgressChange = async (itemId: string, newProgress: number) => {
        try {
            const item = memorization.items.find((item: MemorizationItemType) => item.id === itemId);
            if (!item) throw new Error('Item not found');
            
            const repetitionNumber = Math.ceil((newProgress / 100) * item.repetitionsRequired);
            await updateItemProgress(itemId, repetitionNumber, newProgress === 100);
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to update progress. Please try again.',
                severity: 'error'
            });
        }
    };

    const handleAddItem = async (newItem: NewMemorizationItem) => {
        try {
            await addItem(id, {
                title: newItem.title,
                content: newItem.content,
                repetitionsRequired: newItem.repetitions
            });
            setIsDialogOpen(false);
            setSnackbar({
                open: true,
                message: 'Item added successfully',
                severity: 'success'
            });
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to add item. Please try again.',
                severity: 'error'
            });
        }
    };

    const items = memorization.items || [];

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

                <ItemsContainer>
                    {items.map((item: MemorizationItemType) => (
                        <MemorizationItem
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            content={item.content}
                            repetitions={item.repetitionsRequired}
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

            <SciFiSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity as 'error' | 'success'}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            />
        </MemorizationContainer>
    );
}