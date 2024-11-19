import { useState } from 'react';
import { Status, Priority } from '@/features/ehafal/types/enums';
import { useMemorization } from '@/features/ehafal/hooks/use-memorization';
import { SciFiSnackbar } from '@/features/ehafal/components/dialog/ScifiSnackbar';
import {
    StyledDialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
    FormField,
    FormLabel,
    FormInput,
    FormSelect,
    ActionButton
} from '@/features/ehafal/components/dialog/styles';
import { CreateDialogProps } from '@/features/ehafal/types/table';

export const CreateDialog = ({ open, onClose }: CreateDialogProps) => {
    const { createMemorization } = useMemorization();
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'success' as 'success' | 'error'
    });
    const [formData, setFormData] = useState({
        target: '',
        scope: '',
        status: Status.PENDING,
        priority: Priority.MEDIUM
    });

    const handleSubmit = async () => {
        try {
            await createMemorization(formData);
            setSnackbar({
                open: true,
                message: 'Memorization target created successfully!',
                severity: 'success'
            });
            setTimeout(() => {
                onClose();
            }, 1000);
        } catch (error) {
            setSnackbar({
                open: true,
                message: 'Failed to create memorization target',
                severity: 'error'
            });
        }
    };

    const handleSnackbarClose = () => {
        setSnackbar(prev => ({ ...prev, open: false }));
    };

    return (
        <>
            <StyledDialog open={open} onClose={onClose}>
                <DialogHeader>Create New Target</DialogHeader>
                <DialogBody>
                    <FormField>
                        <FormLabel>Target</FormLabel>
                        <FormInput
                            value={formData.target}
                            onChange={(e) => setFormData({ ...formData, target: e.target.value })}
                            placeholder="Enter target name..."
                        />
                    </FormField>
                    <FormField>
                        <FormLabel>Scope</FormLabel>
                        <FormInput
                            value={formData.scope}
                            onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                            placeholder="Enter scope..."
                        />
                    </FormField>
                    <FormField>
                        <FormLabel>Status</FormLabel>
                        <FormSelect
                            value={formData.status}
                            onChange={(e) => setFormData({ ...formData, status: e.target.value as Status })}
                        >
                            {Object.values(Status).map((status) => (
                                <option key={status} value={status}>{status}</option>
                            ))}
                        </FormSelect>
                    </FormField>
                    <FormField>
                        <FormLabel>Priority</FormLabel>
                        <FormSelect
                            value={formData.priority}
                            onChange={(e) => setFormData({ ...formData, priority: e.target.value as Priority })}
                        >
                            {Object.values(Priority).map((priority) => (
                                <option key={priority} value={priority}>{priority}</option>
                            ))}
                        </FormSelect>
                    </FormField>
                </DialogBody>
                <DialogFooter>
                    <ActionButton onClick={onClose}>Cancel</ActionButton>
                    <ActionButton onClick={handleSubmit}>Create</ActionButton>
                </DialogFooter>
            </StyledDialog>
            <SciFiSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={handleSnackbarClose}
            />
        </>
    );
};