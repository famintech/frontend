import { Toolbar } from "@/features/ehafal/components/table/toolbar";
import { DataTable } from "@/features/ehafal/components/table/table";
import { columns } from "@/features/ehafal/config/columns";
import { mockData } from "@/config/mock/ehafal/datatable";

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