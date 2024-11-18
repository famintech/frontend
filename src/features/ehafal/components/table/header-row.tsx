import { TableHead } from '@mui/material';
import { HeaderCell, TableRowStyled } from '@/features/ehafal/themes/datatable';
import { HeaderRowProps } from '@/features/ehafal/types/table';

export const HeaderRow = ({ columns }: HeaderRowProps) => (
    <TableHead>
        <TableRowStyled>
            {columns.map((column) => (
                <HeaderCell 
                    key={column.id} 
                    align="center" 
                    width={column.width}
                >
                    {column.label}
                </HeaderCell>
            ))}
        </TableRowStyled>
    </TableHead>
);