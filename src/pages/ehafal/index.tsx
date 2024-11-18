import { Toolbar } from "@/features/ehafal/components/table/Toolbar";
import { EHafalTable } from "@/features/ehafal/components/table/Table";
import { columns } from "@/features/ehafal/config/columns";
import { mockData } from "@/features/ehafal/config/mock-data";
import { useTableFilters } from "@/features/ehafal/hooks";

export default function EHafal() {
    const {
        searchQuery,
        setSearchQuery,
        selectedScopes,
        setSelectedScopes,
        selectedPriorities,
        setSelectedPriorities,
        availableScopes,
        filteredData
    } = useTableFilters(mockData);

    return (
        <>
            <Toolbar 
                searchQuery={searchQuery} 
                onSearchChange={setSearchQuery}
                scopes={availableScopes}
                selectedScopes={selectedScopes}
                onScopeChange={setSelectedScopes}
                selectedPriorities={selectedPriorities}
                onPriorityChange={setSelectedPriorities}
            />
            <EHafalTable
                columns={columns}
                data={filteredData}
            />
        </>
    );
}