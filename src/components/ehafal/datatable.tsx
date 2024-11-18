import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import {
    SciFiTable,
    HeaderCell,
    TableRowStyled, 
} from '@/theme/datatable';
import { EHafalDatatableProps } from '@/config/types/ehafal/datatable';
import { TableRow } from '@/components/ehafal/datatable-row';
import { useDataTableAnimation } from '@/hooks/use-ehafal-table-animation';

export const EHafalDatatable = ({ data, columns }: EHafalDatatableProps) => {

    const { handleAnimationStart } = useDataTableAnimation();

    return (
        <SciFiTable elevation={0}>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRowStyled>
                            {columns.map((column) => (
                                <HeaderCell key={column.id} align="center" width={column.width}>
                                    {column.label}
                                </HeaderCell>
                            ))}
                        </TableRowStyled>
                    </TableHead>
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