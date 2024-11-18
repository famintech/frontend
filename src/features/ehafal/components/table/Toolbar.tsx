import { Search as SearchIcon } from '@mui/icons-material';
import { InputAdornment } from '@mui/material';
import { toolkitVariants } from "@/features/ehafal/components/table/styles/animations";
import { 
    ToolbarContainer,
    SearchInput,
    SearchContainer 
} from "@/features/ehafal/components/table/styles/components";
import { ToolbarProps } from "@/features/ehafal/types/table";

export const Toolbar = ({ searchQuery, onSearchChange }: ToolbarProps) => {
    return (
        <ToolbarContainer
            initial="hidden"
            animate="visible"
            variants={toolkitVariants}
        >
            <SearchContainer
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
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
        </ToolbarContainer>
    );
};