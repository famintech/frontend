import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { SearchContainer, SearchInput } from '@/features/ehafal/components/table/styles/components';
import { SearchFilterProps } from '@/features/ehafal/types';

export const SearchFilter = ({ searchQuery, onSearchChange }: SearchFilterProps) => {
    return (
        <SearchContainer>
            <SearchInput
                placeholder="Search by target name..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                startAdornment={
                    <InputAdornment position="start">
                        <SearchIcon sx={{ color: 'rgba(255, 255, 255, 0.7)' }} />
                    </InputAdornment>
                }
            />
        </SearchContainer>
    );
};