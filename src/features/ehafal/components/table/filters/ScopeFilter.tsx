import { useState } from 'react';
import { ClickAwayListener } from '@mui/material';
import { FilterButton, DropdownContainer, CheckboxList, FilterSearch, CheckboxItem, StyledCheckbox } from '@/features/ehafal/components/table/styles/components';
import { ScopeFilterProps } from '@/features/ehafal/types';

export const ScopeFilter = ({ scopes, selectedScopes, onScopeChange }: ScopeFilterProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredScopes = scopes.filter(scope => 
        scope.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleToggle = (scope: string) => {
        const newSelected = selectedScopes.includes(scope)
            ? selectedScopes.filter(s => s !== scope)
            : [...selectedScopes, scope];
        onScopeChange(newSelected);
    };

    return (
        <ClickAwayListener onClickAway={() => setIsOpen(false)}>
            <div style={{ position: 'relative' }}>
                <FilterButton
                    variant="outlined"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    Scope Filter ({selectedScopes.length})
                </FilterButton>
                {isOpen && (
                    <DropdownContainer
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        <FilterSearch
                            size="small"
                            placeholder="Search scopes..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <CheckboxList>
                            {filteredScopes.map((scope) => (
                                <CheckboxItem key={scope}>
                                    <StyledCheckbox
                                        checked={selectedScopes.includes(scope)}
                                        onChange={() => handleToggle(scope)}
                                    />
                                    {scope}
                                </CheckboxItem>
                            ))}
                        </CheckboxList>
                    </DropdownContainer>
                )}
            </div>
        </ClickAwayListener>
    );
};