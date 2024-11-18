import { Toolbar } from "@/features/ehafal/components/table/Toolbar";
import { EHafalTable } from "@/features/ehafal/components/table/Table";
import { columns } from "@/features/ehafal/config/columns";
import { mockData } from "@/features/ehafal/config/mock-data";

export default function EHafal() {
    return (
        <>
            <Toolbar />
            <EHafalTable
                columns={columns}
                data={mockData}
            />
        </>
    );
}