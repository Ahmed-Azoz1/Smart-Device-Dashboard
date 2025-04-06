import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    TablePagination,
    Paper,
    LinearProgress,
    Box,
    Typography
} from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
        },
        '&:last-child td, &:last-child th': {
        border: 0,
        },
        '&:hover': {
        backgroundColor: theme.palette.action.selected,
        }
    }));
    
    const DataTable = ({
        columns,
        data,
        loading = false,
        page = 0,
        rowsPerPage = 10,
        totalRows = 0,
        onPageChange,
        onRowsPerPageChange
    }) => {
        return (
        <Paper sx={{ overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 'calc(100vh - 200px)' }}>
            {loading && <LinearProgress />}
            <Table stickyHeader aria-label="data table">
                <TableHead>
                <TableRow>
                    {columns.map((column) => (
                    <TableCell
                        key={column.id}
                        align={column.align || 'left'}
                        sx={{ fontWeight: 'bold', minWidth: column.minWidth }}
                    >
                        {column.label}
                    </TableCell>
                    ))}
                </TableRow>
                </TableHead>
                <TableBody>
                {data.length > 0 ? (
                    data.map((row, index) => (
                    <StyledTableRow hover key={index}>
                        {columns.map((column) => (
                        <TableCell key={column.id} align={column.align || 'left'}>
                            {column.render ? column.render(row) : row[column.id]}
                        </TableCell>
                        ))}
                    </StyledTableRow>
                    ))
                ) : (
                    <TableRow>
                    <TableCell colSpan={columns.length} align="center">
                        <Box py={4}>
                        <Typography variant="body1" color="textSecondary">
                            No data available
                        </Typography>
                        </Box>
                    </TableCell>
                    </TableRow>
                )}
                </TableBody>
            </Table>
            </TableContainer>
            <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
            />
        </Paper>
    );
};

export default DataTable;