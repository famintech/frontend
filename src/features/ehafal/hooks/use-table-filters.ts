import { useState, useMemo } from 'react';
import { TableData, Priority } from '@/features/ehafal/types';

export const useTableFilters = (initialData: TableData[]) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedScopes, setSelectedScopes] = useState<string[]>([]);
    const [selectedPriorities, setSelectedPriorities] = useState<Priority[]>([]);

    // Get unique scopes from data
    const availableScopes = useMemo(() => {
        return Array.from(new Set(initialData.map(item => item.scope)));
    }, [initialData]);

    // Filter data based on all criteria
    const filteredData = useMemo(() => {
        return initialData.filter(item => {
            const matchesSearch = item.target.toLowerCase().includes(searchQuery.toLowerCase());
            const matchesScope = selectedScopes.length === 0 || selectedScopes.includes(item.scope);
            const matchesPriority = selectedPriorities.length === 0 || selectedPriorities.includes(item.priority);
            
            return matchesSearch && matchesScope && matchesPriority;
        });
    }, [initialData, searchQuery, selectedScopes, selectedPriorities]);

    return {
        searchQuery,
        setSearchQuery,
        selectedScopes,
        setSelectedScopes,
        selectedPriorities,
        setSelectedPriorities,
        availableScopes,
        filteredData
    };
};