import { Toolbar } from "@/features/ehafal/components/table/Toolbar";
import { EHafalTable } from "@/features/ehafal/components/table/Table";
import { columns } from "@/features/ehafal/config/columns";
import { useTableFilters } from "@/features/ehafal/hooks";
import { useMemorization } from "@/features/ehafal/hooks";
import { SciFiSnackbar } from "@/features/ehafal/components/dialog/ScifiSnackbar";
import { useState } from "react";

export default function EHafal() {
    const [snackbar, setSnackbar] = useState({
        open: false,
        message: '',
        severity: 'error' as const
    });
    const { memorizations, isLoading, error } = useMemorization();
    const {
        searchQuery,
        setSearchQuery,
        selectedScopes,
        setSelectedScopes,
        selectedPriorities,
        setSelectedPriorities,
        availableScopes,
        filteredData
    } = useTableFilters(memorizations || []);

    if (error) {
        return (
            <>
                <div>Failed to load data</div>
                <SciFiSnackbar
                    open={true}
                    message="Failed to fetch memorization data. Please try again later."
                    severity="error"
                    onClose={() => setSnackbar({ ...snackbar, open: false })}
                />
            </>
        );
    }
    if (isLoading) return <div>Loading...</div>;

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
            <SciFiSnackbar
                open={snackbar.open}
                message={snackbar.message}
                severity={snackbar.severity}
                onClose={() => setSnackbar({ ...snackbar, open: false })}
            />
        </>
    );
}