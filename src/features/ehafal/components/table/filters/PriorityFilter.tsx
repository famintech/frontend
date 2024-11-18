import { useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import { Priority } from '@/features/ehafal/types/enums';
import { FilterButton, DropdownContainer, CheckboxItem, StyledCheckbox } from '../styles/components/filter.styles';
import { PriorityFilterProps } from '@/features/ehafal/types';

export const PriorityFilter = ({ selectedPriorities, onPriorityChange }: PriorityFilterProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = (priority: Priority) => {
        const newSelected = selectedPriorities.includes(priority)
            ? selectedPriorities.filter(p => p !== priority)
            : [...selectedPriorities, priority];
        onPriorityChange(newSelected);
    };

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <div style={{ position: 'relative' }}>
                <FilterButton
                    variant="outlined"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Priority Filter ({selectedPriorities.length})
                </FilterButton>
                {isOpen && (
                    <DropdownContainer
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {Object.values(Priority).map((priority) => (
                            <CheckboxItem key={priority}>
                                <StyledCheckbox
                                    checked={selectedPriorities.includes(priority)}
                                    onChange={() => handleToggle(priority)}
                                />
                                {priority}
                            </CheckboxItem>
                        ))}
                    </DropdownContainer>
                )}
            </div>
        </ClickAwayListener>
    );
};