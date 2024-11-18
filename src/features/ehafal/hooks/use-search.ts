import { useState, useMemo } from 'react';
import { TableData } from '@/features/ehafal/types';

export const useSearch = (data: TableData[]) => {
    const [searchQuery, setSearchQuery] = useState('');

    const filteredData = useMemo(() => {
        return data.filter(item =>
            item.target.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }, [data, searchQuery]);

    return {
        searchQuery,
        setSearchQuery,
        filteredData
    };
};