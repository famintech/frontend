import { toolkitVariants } from "@/features/ehafal/components/table/styles/animations";
import { ToolbarContainer, FilterContainer } from "@/features/ehafal/components/table/styles/components";
import { SearchFilter, ScopeFilter, PriorityFilter } from '@/features/ehafal/components/table/filters';
import { ToolbarProps } from "@/features/ehafal/types/table";

export const Toolbar = ({ 
    searchQuery, 
    onSearchChange,
    scopes,
    selectedScopes,
    onScopeChange,
    selectedPriorities,
    onPriorityChange 
}: ToolbarProps) => {
    return (
        <ToolbarContainer
            initial="hidden"
            animate="visible"
            variants={toolkitVariants}
        >
            <FilterContainer
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
            >
                <SearchFilter
                    searchQuery={searchQuery}
                    onSearchChange={onSearchChange}
                />
                <ScopeFilter
                    scopes={scopes}
                    selectedScopes={selectedScopes}
                    onScopeChange={onScopeChange}
                />
                <PriorityFilter
                    selectedPriorities={selectedPriorities}
                    onPriorityChange={onPriorityChange}
                />
            </FilterContainer>
        </ToolbarContainer>
    );
};