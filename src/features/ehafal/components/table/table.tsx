import { Table, TableBody, TableContainer } from '@mui/material';
import { SciFiTable } from '@/theme/datatable';
import { EHafalDatatableProps } from '@/features/ehafal/types/datatable';
import { TableRow } from '../../../features/ehafal/components/table/datatable-row';
import { HeaderRow } from '../../../features/ehafal/components/table/datatable-header-row';
import { useDataTableAnimation } from '@/hooks/use-ehafal-table-animation';

export const EHafalDatatable = ({ data, columns }: EHafalDatatableProps) => {
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