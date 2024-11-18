import { Toolbar } from "@/features/ehafal/components/table/Toolbar";
import { EHafalTable } from "@/features/ehafal/components/table/Table";
import { columns } from "@/features/ehafal/config/columns";
import { mockData } from "@/features/ehafal/config/mock-data";
import { useSearch } from "@/features/ehafal/hooks";

export default function EHafal() {
    const { searchQuery, setSearchQuery, filteredData } = useSearch(mockData);
    return (
        <>
            <Toolbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
            <EHafalTable
                columns={columns}
                data={filteredData}
            />
        </>
    );
}