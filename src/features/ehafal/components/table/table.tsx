import { Table, TableBody, TableContainer } from '@mui/material';
import { SciFiTable } from '@/features/ehafal/themes/datatable';
import { DatatableProps } from '@/features/ehafal/types/table';
import { TableRow } from '@/features/ehafal/components/table/table-row';
import { HeaderRow } from '@/features/ehafal/components/table/header-row';
import { useDataTableAnimation } from '@/features/ehafal/hooks/use-table-animation';

export const DataTable = ({ data, columns }: DatatableProps) => {
    const { handleAnimationStart } = useDataTableAnimation();

    return (
        <SciFiTable elevation={0}>
            <TableContainer>
                <Table>
                    <HeaderRow columns={columns} />
                    <TableBody>
                        {data.map((row, index) => (
                            <TableRow
                                key={row.id}
                                row={row}
                                columns={columns}
                                index={index}
                                onAnimationStart={handleAnimationStart}
                            />
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </SciFiTable>
    );
};