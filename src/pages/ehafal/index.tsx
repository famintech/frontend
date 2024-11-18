import { TableToolkit } from "@/components/ehafal/datatable/datatable-toolkit";
import { EHafalDatatable } from "@/components/ehafal/datatable/datatable";
import { columns } from "@/config/ehafal/datatable/columns";
import { mockData } from "@/config/mock/ehafal/datatable";

export default function EHafal() {
    return (
        <>
            <TableToolkit />
            <EHafalDatatable
                columns={columns}
                data={mockData}
            />
        </>
    );
}