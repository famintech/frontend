import { Table, TableBody, TableContainer, TableHead } from '@mui/material';
import {
    SciFiTable,
    HeaderCell,
    TableRowStyled,
} from '@/theme/datatable';
import { useUiSound } from '@/hooks/use-ui-sound';
import { EHafalDatatableProps } from '@/config/types/ehafal/datatable';
import { TableRow } from '@/components/ehafal/datatable-row';

const DATA_APPEAR_SOUND = '/sounds/ui-sound-hover-1.mp3';

export const EHafalDatatable = ({ data, columns }: EHafalDatatableProps) => {
    const playSound = useUiSound(DATA_APPEAR_SOUND, { volume: 0.15 });

    const handleAnimationStart = (index: number) => {
        setTimeout(() => {
            playSound({
                pitch: 1.5,
                volume: 0.2
            });
        }, index * 100);
    };

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