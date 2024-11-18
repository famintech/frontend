import { useState } from "react";
import { toolkitVariants, buttonVariants } from "@/features/ehafal/components/table/styles/animations";
import { ToolbarContainer, FilterContainer } from "@/features/ehafal/components/table/styles/components";
import { CreateButton, StyledAddIcon, CreateButtonText } from "@/features/ehafal/components/table/styles/components/actions.styles";
import { SearchFilter, ScopeFilter, PriorityFilter } from '@/features/ehafal/components/table/filters';
import { ToolbarProps } from "@/features/ehafal/types/table";
import { CreateDialog } from "@/features/ehafal/components/dialog";

export const Toolbar = ({ 
    searchQuery, 
    onSearchChange,
    scopes,
    selectedScopes,
    onScopeChange,
    selectedPriorities,
    onPriorityChange 
}: ToolbarProps) => {
    const [isDialogOpen, setIsDialogOpen] = useState(false);

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
                <CreateButton
                    variants={buttonVariants}
                    initial="hidden"
                    animate="visible"
                    onClick={() => setIsDialogOpen(true)}
                >
                    <StyledAddIcon />
                    <CreateButtonText>Create</CreateButtonText>
                </CreateButton>
            </FilterContainer>
            <CreateDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
            />
        </ToolbarContainer>
    );
};