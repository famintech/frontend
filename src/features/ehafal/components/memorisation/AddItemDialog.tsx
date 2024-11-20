import { useState } from 'react';
import { RichTextEditor } from '@/features/ehafal/components/memorisation/RichTextEditor';
import {
    StyledDialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    FormField,
    FormLabel,
    FormInput,
    ActionButton
} from '@/features/ehafal/components/dialog/styles';
import { SciFiSnackbar } from '@/features/ehafal/components/dialog/ScifiSnackbar';

interface AddItemDialogProps {
    open: boolean;
    onClose: () => void;
    onAdd: (newItem: {
        id: string;
        title: string;
        content: string;
        repetitions: number;
        progress: number;
    }) => void;
}

export const AddItemDialog = ({ open, onClose, onAdd }: AddItemDialogProps) => {
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        repetitions: 40
    });

    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });

    const handleSubmit = async () => {
        try {
            const newItem = {
                id: crypto.randomUUID(),
                title: formData.title,
                content: formData.content,
                repetitions: formData.repetitions,
                progress: 0
            };
            
            onAdd(newItem);
            setSnackbar({
                open: true,
                message: 'Item added successfully!',
                severity: 'success'
            });
            
            setFormData({
                title: '',
                content: '',
                repetitions: 40
            });
            
            setTimeout(() => {
                onClose();
            }, 1000);
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to add item',
                severity: 'error'
            });
        }
    };

    return (
        <>
            <StyledDialog open={open} onClose={onClose}>
                <DialogHeader>Add New Item to Memorize</DialogHeader>
                <DialogBody>
                    <FormField>
                        <FormLabel>Title</FormLabel>
                        <FormInput
                            value={formData.title}
                            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                            placeholder="Enter item title..."
                        />
                    </FormField>
                    <FormField>
                        <FormLabel>Content</FormLabel>
                        <RichTextEditor
                            value={formData.content}
                            onChange={(value) => setFormData({ ...formData, content: value })}
                        />
                    </FormField>
                    <FormField>
                        <FormLabel>Number of Repetitions</FormLabel>
                        <FormInput
                            type="number"
                            value={formData.repetitions}
                            onChange={(e) => setFormData({ ...formData, repetitions: parseInt(e.target.value) })}
                            min={1}
                        />
                    </FormField>
                </DialogBody>
                <DialogFooter>
                    <ActionButton onClick={onClose}>Cancel</ActionButton>
                    <ActionButton onClick={handleSubmit}>Add</ActionButton>
                </DialogFooter>
            </StyledDialog>
            <SciFiSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            />
        </>
    );
};