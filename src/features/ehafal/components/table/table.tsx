import { Table, TableBody, TableContainer } from '@mui/material';
import { SciFiTable } from '@/features/ehafal/components/table/styles/components';
import { EHafalTableProps } from '@/features/ehafal/types/table';
import { TableRow } from '@/features/ehafal/components/table/TableRow';
import { HeaderRow } from '@/features/ehafal/components/table/HeaderRow';
import { useTableAnimation } from '@/features/ehafal/hooks/use-table-animation';

export const EHafalTable = ({ data, columns }: EHafalTableProps) => {
    const { handleAnimationStart } = useTableAnimation();

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