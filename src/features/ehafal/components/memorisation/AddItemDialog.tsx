import { useState } from 'react';
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
}

export const AddItemDialog = ({ open, onClose }: AddItemDialogProps) => {
    const [formData, setFormData] = useState({
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
            // TODO: Add API call to save the item
            setSnackbar({
                open: true,
                message: 'Item added successfully!',
                severity: 'success'
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
                        <FormLabel>Content</FormLabel>
                        <FormInput
                            value={formData.content}
                            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                            placeholder="Enter content to memorize..."
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