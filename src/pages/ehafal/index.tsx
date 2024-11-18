import { Toolbar } from "@/features/ehafal/components/table/toolbar";
import { DataTable } from "@/features/ehafal/components/table/table";
import { columns } from "@/features/ehafal/config/columns";
import { mockData } from "@/features/ehafal/config/mock-data";

export default function EHafal() {
    return (
        <>
            <Toolbar />
            <DataTable
                columns={columns}
                data={mockData}
            />
        </>
    );
}